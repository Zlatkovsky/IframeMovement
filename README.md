# README

This simple repro demonstrates the need for being able to move iframes across the DOM without it reloading. See the live demo at <https://zlatkovsky.github.io/IframeMovement/>

The actual product scenarios that we are envisioning are:

- Primary use-case: load an iframe invisibly in the background (based on a heuristic of the user eventually needing it) so that when the user clicks on a button to view the iframe, we can swap in the already-loaded iframe much quicker than if we were to load from scratch.
- Secondary use-case: allow moving an already user-visible iframe from one spot in the DOM (e.g., the compose textbox) into another (the "sent messages" view above it, for example)
