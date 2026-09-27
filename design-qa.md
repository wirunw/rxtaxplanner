# Design QA

**Source visual truth:** `/workspace/scratch/b37a316cb46e/generated_images/exec-c16b5925-fcd5-4dd9-a043-565775e0f09d.png` (850 × 1840 pixels)  
**Implementation screenshot:** `/workspace/scratch/pharmacist-final-loaded.png` (1363 × 936 browser viewport)  
**Comparison image:** `/workspace/scratch/b37a316cb46e/pharmacist-planner-prototype/qa-comparison-final.png`  
**CSS screen:** iPhone app viewport 393 × 852; cloud browser scaled rendered device-screen to 360.5 × 781.6 due its 1363 × 936 viewport. For visual comparison the app content was cropped and both reference and implementation normalized to 393 × 852. This is a normalized comparison, not a native 1:1 screenshot.  
**State:** initial income screen, three default items, no sheet open

## Comparison history

- Initial full-view evidence: `qa-comparison-initial.png`. P2: header had ~40 px excessive vertical spacing before the income rows; annual summary fell lower than source.
- Fix: reduced content top padding 48 → 34 and header min-height 150 → 120 in `src/prototype.css`.
- Post-fix evidence: `qa-comparison-final.png`. Header/title, three rows, add button and annual total align closely to source's relative positions. The app also contains navigation beneath the design's shown focal content to support the requested interactive flow.

## Fidelity review

- **Typography:** Thai headings, monetary emphasis and muted supporting labels reproduce the source hierarchy. Font rendering differs slightly because the browser uses a local Thai fallback. No illegible truncation in the initial screen.
- **Spacing/layout:** Source order and grouped rows match; after fix the primary controls and total appear at comparable vertical positions. The protected device frame and status bar are excluded from content fidelity.
- **Colors/tokens:** Warm ivory, navy text, soft row dividers, pastel icon backgrounds and coral primary button align to source.
- **Image quality:** The mortar/books asset was generated separately from the mock and inserted as a real raster PNG. Subject, palette and position match the source. Standard row icons use the included Radix icon library, with minor glyph differences classified P3.
- **Copy/content:** All three income labels, amounts, annual total and primary CTA match source. The navigation and caveat are deliberate interactive additions below the focal view.
- **Focused detail:** Header art and annual total are legible in normalized comparison; no additional region crop was needed. Comparison table was inspected in browser and all amount columns remained visible.

## Interactions checked in cloud browser

- Add Consulting ฿15,000/month → annual total changes from ฿1,080,000 to ฿1,260,000.
- Change COGS from ฿1,450,000 to ฿1,550,000 → operating profit changes from ฿2,160,000 to ฿2,060,000 and CIT changes accordingly.
- Default fixture: PIT ฿208,500, CIT SME ฿271,500, example dividend withholding ฿183,850.
- Open the calculation explanation sheet: shows 60% expense, PIT base, SME status and source links.
- Retain slider at 100% → dividend net ฿0 and retained profit ฿1,838,500.
- Navigate through the action plan; scrolling resets to top on page changes.
- Browser console: no app-origin errors seen. Only browser-extension metadata errors were recorded.

## Findings

- No remaining P0/P1/P2 visual or interaction issues in the inspected states.
- P3: standard row icon shapes differ from concept image; optional refinement.
- P3: full-size desktop layout is represented by a phone stage because the selected mock and Product Design starter are mobile app targets.

**final result: passed**
