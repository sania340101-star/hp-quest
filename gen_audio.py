"""Voices every quest text from quest.js into audio/*.mp3 (Edge TTS, free). Run after editing quest.js:
  py -3 gen_audio.py [names...]   (only the given texts, e.g. final pro1: a full run rewrites every mp3)"""
import asyncio, json, os, re, sys
import edge_tts

VOICE, RATE, PITCH = "ru-RU-DmitryNeural", "-12%", "-6Hz"
HERE = os.path.dirname(os.path.abspath(__file__))

src = open(os.path.join(HERE, "quest.js"), encoding="utf-8").read()
q = json.loads(re.search(r"window\.QUEST = (\{.*\});", src, re.S).group(1))
texts = {"intro": q["intro"], "start": q["start"], "final": q["final"]}
texts.update({f"place{i + 1}": s["place"] for i, s in enumerate(q["steps"])})
texts.update({f"pro{i + 1}": p["text"] for i, p in enumerate(q["prologue"])})
if sys.argv[1:]:
    texts = {k: texts[k] for k in sys.argv[1:]}


async def main():
    os.makedirs(os.path.join(HERE, "audio"), exist_ok=True)
    for name, text in texts.items():
        await edge_tts.Communicate(text.replace("\n", " "), VOICE, rate=RATE, pitch=PITCH).save(
            os.path.join(HERE, "audio", f"{name}.mp3"))
        print("ok", name)

asyncio.run(main())
