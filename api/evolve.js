export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(200).json({ ok: true, info: "POST /api/poc/evolve" });

  try {
    const raw = await new Promise((r, j) => {
      let b = ""; req.on("data", c => b += c); req.on("end", () => r(b)); req.on("error", j);
    });
    const { token_id, level, current_metadata } = raw ? JSON.parse(raw) : {};

    const out = {
      ...current_metadata,
      name: current_metadata?.name || `ARMY Test #${token_id}`,
      current_level: level,
      attributes: [
        { trait_type: "Head", value: "TBD" },
        { trait_type: "Body", value: "TBD" },
        { trait_type: "Eyes", value: "TBD" },
        { trait_type: "Background", value: "TBD" }
      ],
      rng_proof: { level, demo: true }
    };
    return res.status(200).json(out);
  } catch (e) {
    return res.status(400).json({ error: String(e) });
  }
}
