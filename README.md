# Painted adventure skin update

Illustrated view is now the default, with original richly painted workshop/courtyard environments and five character portraits. The existing 3D mode remains available. All quest rules and functions are retained. See `docs/VISUAL-SKIN.md`.

# Mighty Klaus V2 — explorable 3D Christmas demo

Browser game with a true WebGL 3D counting house, hearth, toy workshop and snowy courtyard. Use the map, drag to orbit, zoom, tap props, or use the labelled journal list. Nujhat Hossain replaces Preety and is represented by a stylized procedural 3D character with breathing, blinking and small idle movements. This is a stylized 3D prototype, not photorealistic character capture.

Rewind changes light, sky, window color, missing objects and the toy cart. Correctly completed quests warm the scene, move the character, light village lanterns and lead to the next memory. Guide me focuses the next useful object; hints are free. Three Christmas Past memories award 100 points each, once, up to 300. Other spirits and real Secret Santa services remain planned; this demo creates no actual pairings or purchases and uses no browser storage.

## Publish a public GitHub Pages link

The Pages workflow is included. A repository owner must select **Settings → Pages → Build and deployment → Source: GitHub Actions**. Then run **Actions → Publish browser game → Run workflow**, or push a change. The workflow publishes the `site/` build with project-relative paths and a local copy of Three.js. Only use the deployment URL returned by a successful run; committing source alone does not enable GitHub Pages.

## Develop locally

Node 24: `npm install`, `npm test`, `npm run build`. Serve `site/` over HTTP (e.g. `python -m http.server 3000 --directory site`). Players install nothing. Three.js 0.160.1 is pinned; its MIT license is included in build output. The renderer limits pixel ratio and runs at about 30fps, pauses rendering in hidden tabs and respects reduced motion. A labelled gameplay list provides an alternative if WebGL fails.

## Source and verification

The earlier pitch source remains in the Sites source repository. This GitHub version includes authored source, puzzle/engine tests, SVG branding, build script and Pages workflow; generated vendor files are assembled during build. No employee emails, credentials or Secret Santa assignments are in the static demo.

Browser tests exercised real WebGL initialization, map travel, all three memories, inventory use, conversations, rewind, changed outcomes, 300 points and mobile layout. Core engine tests cover timing, ordering, correct item selection, optional discoveries and duplicate-reward prevention.

