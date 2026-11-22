// Zapis leada do arkusza Google (Vercel Function: POST /api/lead).
//
// Przeglądarka wysyła tu dane z formularza RÓWNOLEGLE z mailem EmailJS, więc
// zgłoszenie zostaje zapisane nawet wtedy, gdy mail nie dojdzie. Funkcja
// przekazuje dane do aplikacji Google Apps Script podpiętej do arkusza
// (docs/leady-google-sheets.md). Adres i sekret są tylko po stronie serwera:
//   LEADS_WEBHOOK_URL    — adres wdrożonej aplikacji Apps Script (…/exec)
//   LEADS_WEBHOOK_SECRET — wspólny sekret, ten sam co w skrypcie
// Bez tych zmiennych funkcja nic nie robi (204), a formularze działają jak dotąd.

const ALLOWED_ORIGINS = [/^https:\/\/(www\.)?flowtex\.pl$/, /^https:\/\/[a-z0-9-]+\.vercel\.app$/, /^http:\/\/localhost(:\d+)?$/];
const FIELDS = {
  lead_id: 40, form_id: 60, name: 120, company: 160, email: 160, phone: 40,
  message: 4000, resource: 200, page_url: 300, source: 300, first_source: 300,
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }
  const origin = req.headers.origin || "";
  if (!ALLOWED_ORIGINS.some((re) => re.test(origin))) return res.status(403).end();

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).end();
    }
  }
  if (!body || typeof body !== "object") return res.status(400).end();

  const lead = {};
  for (const [key, max] of Object.entries(FIELDS)) lead[key] = String(body[key] ?? "").trim().slice(0, max);
  if (!EMAIL_RE.test(lead.email) || !lead.lead_id) return res.status(400).end();

  const url = process.env.LEADS_WEBHOOK_URL;
  const secret = process.env.LEADS_WEBHOOK_SECRET;
  if (!url || !secret) return res.status(204).end();

  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, lead }),
      redirect: "follow",
      signal: AbortSignal.timeout(8000),
    });
    const text = await r.text();
    if (!r.ok || !text.includes('"ok":true')) {
      console.error("[lead] Apps Script odpowiedział:", r.status, text.slice(0, 200));
      return res.status(502).end();
    }
    return res.status(204).end();
  } catch (err) {
    console.error("[lead] Błąd zapisu do arkusza:", err?.message);
    return res.status(502).end();
  }
}
