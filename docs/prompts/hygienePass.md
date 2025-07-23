1. Perform a full hygiene pass:
- Re-scan ALL CSS, JS, and component files.
- Remove leftover local overrides or “crumbs” from past edits.
- Validate theme consistency (light/dark).

2. Update the guides:
- docs/guides/styleGuide.md: reflect current design tokens, color usage, spacing rules.
- docs/guides/theme-map.md: confirm correct theme variable mappings.
- docs/guides/variables-map.md: finalize current global variables and remove any unused.

3. Lock variables:
- Move any inline colors or shadow definitions into variables.css or theme files.
- Confirm only global variables are referenced in component-level code.

Final check:
- Confirm no conflicting values remain anywhere.
- Push all updates into guide markdown files.

Goal: system fully "locked", no drift, guides up-to-date, ready for next major steps.