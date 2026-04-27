# AI Avatar Pipeline — Initiative Memory

**Created:** 2026-04-27
**Status:** Active — pipeline tested, awaiting training data
**Project dir:** `~/Projects/ai-avatar-pipeline/`

## What

Cross-project AI avatar video pipeline using Julia McCoy method.
One personal avatar + voice clone → video content for all projects at scale.
Purpose: increase conversion and trust through Kirill's video presence without real-time recording.

## Stack

- **Script:** Claude (skill: `~/.claude/skills/julia-mccoy-method/`)
- **Voice:** ElevenLabs (voice clone, Creator plan, $22-99/mo)
- **Avatar:** HeyGen (Instant Avatar, Business plan, $89-199/mo)
- **Edit:** CapCut / freelance

## Test results (2026-04-27)

- HeyGen API key: validated
- Stock avatar + Russian voice: video generated (8.8 sec, 1080p, ~3.5 min generation)
- Video ID: `ab98f3b6a77d4affb0d8d4623a92034f`
- Russian voices available: 9 (Dmitry Professional, Dariya Professional, etc.)
- Stock avatars available: 1281

## Blocked on

Kirill needs to record training data:
1. **Video:** 5-10 short clips (20-40 sec each, ~3 min total) — same light/background/outfit/angle, looking at camera
2. **Audio:** ~1-2 hours clean speech — same mic, no noise, conversational pace

## Serves

SDTV YouTube, SDTV festival pitches, Brandbureau explainers, Arancha Brand content, WeDance demos, iKEEGAi product demos.

## Key decision

D-003: Single avatar training serves all projects. Investment is one-time; per-video marginal cost = script writing + API credits only.
