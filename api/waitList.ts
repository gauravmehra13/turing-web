import type { VercelRequest, VercelResponse } from "@vercel/node";

const ZAPIER_WEBHOOK_URL =
  "https://hooks.zapier.com/hooks/catch/22893125/2n0nhix/"; // replace this with your real webhook URL

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const zapierResponse = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    if (!zapierResponse.ok) {
      console.error("Zapier error", await zapierResponse.text());
      return res.status(500).json({ error: "Failed to send to Zapier" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error in Vercel function:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
