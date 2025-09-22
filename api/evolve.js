export default function handler(req, res) {
  const url = new URL(req.url, `https://${req.headers.host}`);
  const token_id = url.searchParams.get("token_id");
  const level = Number(url.searchParams.get("level") || 0);

  return res.status(200).json({
    ok: true,
    token_id,
    level,
    demo: "JSON in URL, sin body"
  });
}
