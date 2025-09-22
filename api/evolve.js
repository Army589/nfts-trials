export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true, info: "POST /api/poc/evolve" });
  }

  let raw = "";
  req.setEncoding("utf8");
  req.on("data", (c) => (raw += c));
  req.on("end", () => {
    try {
      const { token_id, level, current_metadata } = JSON.parse(raw || "{}");

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

      res.status(200).json(out);
    } catch (e) {
      res.status(400).json({ error: "Invalid JSON", details: String(e) });
    }
  });
}
