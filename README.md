# UCSC DEI Survey — landing page

A lightweight **unofficial draft** of an English-language, one-page landing page for a DEI survey intended for women students at UC Santa Cruz. The site contains **no form or response database**. Responses are collected by a separate Google Form once the survey is configured and approved.

## Files

- `index.html` — page content, section headings, navigation and participation link placeholder.
- `styles.css` — visual design, accessibility and responsive layout.
- `script.js` — survey status and Google Forms participation URL configuration.

No build tools, dependencies, analytics, cookies, trackers, or web server are required.

## Preview locally

Double-click `index.html` to view it in a browser. For an optional local server, run `python3 -m http.server 8000` in this folder and open `http://localhost:8000`.

## Configure the Google Form

Open `script.js` on GitHub (or locally). Locate:

```js
const SURVEY_CONFIG = {
  status: "draft",
  formUrl: ""
};
```

- **Before survey setup:** leave `status: "draft"` and `formUrl: ""`.
- **When the form is approved and live:** paste the **public responder URL** (not the form edit URL) and set `status: "open"`.
- **When the survey ends:** set `status: "closed"`; the survey link disappears and the page displays **Survey Closed**.

Example (illustrative URL only; replace with a real URL):

```js
const SURVEY_CONFIG = {
  status: "open",
  formUrl: "https://forms.gle/REPLACE_WITH_REAL_FORM_ID"
};
```

If status is `"open"` but the link is missing or invalid, the site safely remains in the **Coming soon** state.

The prominent hero button currently scrolls to the participation section rather than opening a Google Form directly; the actual external link is displayed in that section only when the form is live.

## Publish with GitHub Pages

1. Sign in to your personal GitHub account. Create a new **public** repository, e.g. `ucsc-dei-survey`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` into the repository root (the main/default branch).
3. Open the repository’s **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**. Choose the default branch, folder **/(root)**, and click **Save**.
5. Once GitHub Pages has finished publishing, the website address will normally be `https://YOUR_USERNAME.github.io/ucsc-dei-survey/`. The account and repository names determine the final URL.
6. For subsequent updates, open a file on GitHub, choose **Edit**, update it and **Commit changes**. GitHub Pages republishes the site automatically.

**Important:** GitHub Pages is public. Do not commit private data, account credentials, a Google Form editing URL, or raw survey responses. Moving the site to an organization later will likely change the URL; update any distributed links or configure a redirect.

## Before public launch — required checks

- Obtain advisor approval for the survey title, descriptions, privacy language, and publication under the UCSC/Baskin Engineering name. This draft deliberately **does not use an official UCSC logo** or claim official university endorsement.
- In the UCSC Google account, confirm which Google Forms restrictions are available: UCSC-only respondents, **Limit to 1 response**, and **Do not collect email addresses**. Test using an eligible respondent account. These settings are not controlled by this website.
- Verify that the form does not request names, student IDs or other direct identifiers. Some combinations of demographic/open-ended responses may still enable re-identification. Adjust the website privacy notice to reflect the approved survey.
- Confirm the final wording of the survey purpose and any required participant information or contact channel with the supervising department.
- Review desktop and mobile appearance, keyboard focus navigation, the survey-open flow, and the Survey Closed state.

## Accessibility and privacy notes

The page includes a keyboard skip link, clear headings, focus indicators, reduced-motion support, and mobile layouts. It does not deliberately collect visitors' responses. Hosting and Google services may still process ordinary technical access data. **Do not claim that login verification is anonymous to Google or UCSC.**
