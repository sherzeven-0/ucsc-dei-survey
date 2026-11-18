/** Existing GitHub Pages survey settings, retained unchanged from the public repository (2026-11-18). */
const SURVEY_CONFIG = {
  status: "open",
  formUrl: "https://forms.gle/RbeiBbyLz9HJZ1Tx8"
};

(function initializeSurvey() {
  const links = [document.getElementById('hero-survey-link'), document.getElementById('survey-link')];
  const statuses = [document.getElementById('hero-survey-status'), document.getElementById('survey-status')];
  const description = document.getElementById('survey-description');
  const note = document.getElementById('survey-action-note');
  let formUrl = null;
  try {
    const url = new URL(SURVEY_CONFIG.formUrl);
    if (url.protocol === 'https:' &&
        (url.hostname === 'forms.gle' || (url.hostname === 'docs.google.com' && url.pathname.startsWith('/forms/')))) {
      formUrl = url.href;
    }
  } catch (_) { /* A missing or invalid form URL is treated as draft. */ }

  const open = SURVEY_CONFIG.status === 'open' && Boolean(formUrl);
  const closed = SURVEY_CONFIG.status === 'closed';
  links.forEach((link) => {
    link.hidden = !open;
    if (open) link.href = formUrl;
    else link.removeAttribute('href');
  });
  statuses.forEach((status) => {
    status.hidden = open;
    if (!open) status.textContent = closed ? 'Survey Closed' : 'Coming soon';
  });
  if (open) {
    description.textContent = 'The survey is open. If you choose to participate, you will be taken to Google Forms.';
    note.textContent = 'Opens Google Forms in a new tab. UCSC sign-in may be required.';
  } else if (closed) {
    description.textContent = 'This survey is currently closed. Thank you for your interest.';
    note.textContent = 'The survey link is not available at this time.';
  } else {
    description.textContent = 'The survey is being prepared. Please check back once it opens.';
    note.textContent = 'The form will open in a new tab when available.';
  }
  document.getElementById('copyright-year').textContent = String(new Date().getFullYear());
})();
