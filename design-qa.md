# design-qa.md

- source visual truth path: `D:\test\personal-site-preview\option1-quiet-scholar.html` (Quiet Scholar selected direction)
- implementation screenshot path: `D:\test\quiet-scholar-site\qa\impl-desktop.png`
- viewport: 1440x1200 desktop / 390x1200 mobile
- date: 2026-07-12

## Latest change
- Portrait placeholder replaced with user-provided avatar:
  - `D:\test\quiet-scholar-site\public\assets\portrait.jpg`
  - also mirrored to `avatar.jpg`
  - preview option1 updated to use `./assets/portrait.jpg`

## Findings
- [P2] Deploy base is `/resume/`, so hard-coded `/assets/*` paths would break after publish unless rebased through Vite.
  Fix applied: portrait and paper texture now resolve through `import.meta.env.BASE_URL`, so they work under the `/resume/` deploy base.

## Required fidelity surfaces
- Fonts/typography: Source Serif 4 + Inter, matches Quiet Scholar hierarchy.
- Spacing/layout: narrow measure (~760px), list research rows, expandable projects.
- Colors/tokens: warm ivory bg `#faf9f5`, accent `#d97757`.
- Image quality: user avatar now used as portrait asset.
- Copy/content: bilingual scaffold with user profile fields where known.

## final result: passed
Avatar asset is served (HTTP 200, 267028 bytes). Core Quiet Scholar structure remains interactive.
