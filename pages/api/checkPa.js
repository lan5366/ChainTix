import { paEmails } from "@/backend/paEmails";

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!paEmails.includes(email.toLowerCase())) {
    return res.status(403).json({ error: "Your email is not preapproved for registration." });
  }

  return res.status(200).json({ success: true });
}
