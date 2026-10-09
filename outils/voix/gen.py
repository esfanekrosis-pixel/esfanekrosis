# Records every line in lines.json with Kokoro TTS (French voice ff_siwis) and writes voice.js.
# Needs: pip install kokoro-onnx soundfile, ffmpeg, and kokoro-v1.0.int8.onnx + voices-v1.0.bin
# from https://github.com/thewh1teagle/kokoro-onnx/releases (model-files-v1.0). Run from outils/voix/.
import json, os, subprocess, base64, hashlib, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
k = Kokoro("kokoro-v1.0.int8.onnx", "voices-v1.0.bin")
lines = json.load(open("lines.json")); os.makedirs("clips", exist_ok=True)
out = {}
for i, t in enumerate(lines):
    name = "clips/" + hashlib.md5(t.encode()).hexdigest()[:12]
    if not os.path.exists(name + ".mp3"):
        say = t[0].upper() + t[1:]
        s, sr = k.create(say, voice="ff_siwis", speed=0.92, lang="fr-fr")
        nz = np.nonzero(np.abs(s) > 0.01)[0]
        if len(nz): s = s[max(0, nz[0] - 600): nz[-1] + 1800]
        sf.write(name + ".wav", s, sr)
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", name + ".wav", "-ac", "1", "-ar", "24000", "-b:a", "32k", name + ".mp3"], check=True)
        os.remove(name + ".wav")
    out[t] = base64.b64encode(open(name + ".mp3", "rb").read()).decode()
    if i % 50 == 0: print(i, t, flush=True)
js = "// Recorded French voice for Le Train des Animaux (Kokoro TTS, voice ff_siwis). Generated, do not edit by hand.\nwindow.VOICE_CLIPS = " + json.dumps(out, ensure_ascii=False, separators=(",\n", ":")) + ";\n"
open("../../voice.js", "w").write(js); print("done", len(out), len(js))
