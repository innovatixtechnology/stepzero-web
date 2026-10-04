// Google Apps Script web app that appends each submission as a row in the
// "StepZero Form Submissions" sheet. The site is a static export, so the
// browser posts directly to it. text/plain avoids a CORS preflight, which
// Apps Script doesn't support.
const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyToYfeneT6bcIDEW4sN52HQqGWNdIvUVHlpesAylKwvqexaYQ5sB-uH2j3c0lqBLdS/exec";

type Submission =
  | { form: "Contact"; name: string; email: string; location: string; topic: string; message: string }
  | { form: "FreeGuide"; name: string; email: string };

export async function submitForm(data: Submission) {
  const res = await fetch(SHEET_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Submission failed (${res.status})`);
  const json = await res.json();
  if (!json.ok) throw new Error("Submission failed");
}
