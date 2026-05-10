# The Reel

Debbie's personal content operations app for the 100-day Stylist Checked build series.

**Three tabs:** Make (brain dump → AI plans), Track (pipeline), Learn (performance insights)

**Stack:** Single HTML file + one Vercel serverless function. No framework, no build step.

## What it does

- Paste or voice-to-text a brain dump → AI extracts themes and video angles
- Tap any angle → AI expands it into a full script, clips list, and caption
- Save plans to Track → move them through idea → in production → posted → shelved
- Log performance (views, likes, comments, saves, shares) when posted
- Learn tab shows cadence tracker, format leaderboard, and pillar leaderboard
- After your first posted plan, every new brain dump is biased toward what's worked

## Files

```
index.html          the whole app
api/generate.js     serverless proxy to Anthropic (key stays server-side)
manifest.webmanifest  PWA config
icon.svg            app icon
```

## Local dev

Open `index.html` directly in a browser. The AI features won't work locally (no API key) — test those on the deployed URL.

## Deploy

1. Push to GitHub (`deborahmojibola-bit/the-reel`)
2. Connect to Vercel → new project → link this repo
3. Add `ANTHROPIC_API_KEY` to Vercel environment variables (Production)
4. Deploy

## Install as app on iPhone

Open the deployed URL in Safari → Share button → Add to Home Screen.
