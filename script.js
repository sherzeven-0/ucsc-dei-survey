/**
 * Update these settings when the Google Form is ready.
 *
 * status: "draft" (Coming soon), "open" (show survey button), or "closed" (Survey Closed)
 * formUrl: the full https://docs.google.com/forms/... URL
 *
 * Never place private form edit URLs or API credentials here: this code is public.
 */
const SURVEY_CONFIG = {
  status: "open",
  formUrl: "https://forms.gle/RbeiBbyLz9HJZ1Tx8"
};

(function initializeSurvey() {
  const link = document.getElementById("survey-link");
  const status = document.getElementById("survey-status");
  const description = document.getElementById("survey-description");
  const note = document.getElementById("survey-action-note");

  // Restrict external survey links to HTTPS, avoiding javascript: URLs and typos.
  let validFormUrl = null;
  try {
    const parsed = new URL(SURVEY_CONFIG.formUrl);
    if (parsed.protocol === "https:" &&
        (parsed.hostname === "docs.google.com" || parsed.hostname === "forms.gle") &&
        (parsed.hostname === "forms.gle" || parsed.pathname.startsWith("/forms/"))) {
      validFormUrl = parsed.href;
    }
  } catch (_) { /* Unconfigured by design */ }

  if (SURVEY_CONFIG.status === "open" && validFormUrl) {
    link.href = validFormUrl;
    link.classList.remove("is-hidden");
    status.classList.add("is-hidden");
    description.textContent = "The survey is open. If you choose to participate, you will be taken to Google Forms.";
    note.textContent = "Opens Google Forms in a new tab. UCSC sign-in may be required.";
  } else if (SURVEY_CONFIG.status === "closed") {
    link.classList.add("is-hidden");
    status.classList.remove("is-hidden");
    status.textContent = "Survey Closed";
    description.textContent = "This survey is currently closed. Thank you for your interest.";
    note.textContent = "The survey link is not available at this time.";
  } else {
    link.classList.add("is-hidden");
    status.classList.remove("is-hidden");
    status.textContent = "Coming soon";
    description.textContent = "The survey is being prepared. Please check back once it opens.";
    note.textContent = "The form will open in a new tab when available.";
  }
})();
