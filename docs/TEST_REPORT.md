# TAPETONE v1.0.0 — Test Report

Test date: 2026-08-10

## Result

**PASS** — the tested static build completed all automated browser and structural checks used for this release.

## Browser functional tests

Executed in headless Chromium using the standalone build.

Passed:

- Initial idle state
- WAV upload
- Corrupt MP3 rejection
- 4-channel audio rejection
- Oversized file rejection
- Mono processing
- Stereo processing
- Silence processing
- Very quiet audio processing
- Clipped source processing
- 96 kHz source processing
- All 12 Mode × Age combinations
- Random variation invalidation and re-processing
- Original / FX switching
- 24-bit WAV download
- Valid RIFF/WAVE header
- Mobile 390 px layout without horizontal overflow
- Mobile Share control visibility logic
- No uncaught page errors during the test run

## DSP matrix

| Mode | New | Worn | Dead |
|---|---|---|---|
| Tape | PASS | PASS | PASS |
| Cassette | PASS | PASS | PASS |
| Boombox | PASS | PASS | PASS |
| Recorder | PASS | PASS | PASS |

## Static / SEO / package checks

Passed:

- Premium build contains no user-facing anchor links
- Public build includes the Free Audio Apps link
- Public build includes the Premium Collection link
- Five guide pages contain a title, meta description and single H1
- PWA manifests parse correctly
- 192 px and 512 px app icons exist
- Service-worker source passes JavaScript syntax validation
- App source passes JavaScript syntax validation
- README screenshots exist

## Known test limitation

This execution environment blocks automated navigation to `localhost`, `127.0.0.1` and `file://` by browser policy. Therefore service-worker installation could not be validated end-to-end inside this sandbox. The PWA manifest and service-worker files were validated structurally and syntactically. Functional app tests were performed by loading the complete standalone HTML directly into Chromium using Playwright.

Raw results are available in:

- `docs/browser-test.json`
- `docs/static-test.json`
