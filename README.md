# Baskin Engineering DEI Survey — redesigned static site

Local-previewable redesign of https://github.com/sherzeven-0/ucsc-dei-survey (public `main`, reviewed November 18, 2026). No live GitHub files have been changed.

## Preview

Open `index.html` directly in your browser. Or in this folder run `python3 -m http.server 8000` and visit http://localhost:8000/ . No build tool is necessary.

## Survey behavior — preserved

`script.js` retains the current `status: "open"` and `formUrl: "https://forms.gle/RbeiBbyLz9HJZ1Tx8"` read from the GitHub repository. It also retains `draft` / `open` / `closed` behaviors. Both hero and survey-section actions now open the form directly when status is `open`; disabled statuses never navigate.

## Official images and logo

The hero now references the official Engineering 2 building photo from the Baskin Engineering Departments page, and both logo positions reference an original UCSC-created horizontal identity via Wikimedia Commons. The footer uses a white identity panel to preserve the logo's original colors. See `ASSET_SOURCES.md` for source attribution.

**Current delivery limitation:** the environment could not download image binaries. The page therefore loads images from their source URLs. On your Mac, run `sh download-assets.sh` from the unpacked project folder to save them to `assets/` and rewrite the HTML to local URLs. Verify appearance before uploading.

## Update existing GitHub Pages site

1. Review the redesign locally and obtain committee/advisor approval.
2. Save a backup of the current `main` branch (or download the existing repo ZIP).
3. Upload/replace `index.html`, `styles.css`, `script.js`, `README.md` in the existing repository root. Run `sh download-assets.sh` before uploading to bundle the official assets locally, and upload the resulting `assets/` folder too.
4. Keep Pages settings `main` and `/(root)`; URL remains https://sherzeven-0.github.io/ucsc-dei-survey/.
5. Test the form link, UCSC organization access, the seven mailto links, mobile layout, and all three survey statuses. Confirm the Google Form description and eligibility match the new Baskin Engineering-only audience before distribution.

## Important caveats

- This redesign does **not** change any Google Form questions or settings.
- Current Google Forms access may include UCSC users outside Baskin Engineering. Account-domain restrictions do not establish enrollment or gender identity.
- This static site itself does not collect responses, use analytics, or set cookies. Form/hosting services may log technical access information. Survey free-text answers may identify individuals; avoid claiming unconditional anonymity.
- The university-wide copyright text is a draft pattern for committee approval, not a confirmation that university legal/brand approval has been given to this specific webpage.

## Sources checked

- Existing source: https://github.com/sherzeven-0/ucsc-dei-survey
- Baskin Engineering website: https://engineering.ucsc.edu/
- Baskin Engineering brand toolkit: https://toolkit.engineering.ucsc.edu/baskin-engineering-brand/
- Baskin Engineering building/address: https://engineering.ucsc.edu/about/locations/baskin-engineering-building/
