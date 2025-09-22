export default function handler(req, res) {
  const { token_id, level, current_metadata } = req.body || {};
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
}
