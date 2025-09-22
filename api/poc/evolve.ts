export default async function handler(req: Request) {
  const body = await req.json();
  return new Response(JSON.stringify({ ok: true, echo: body }), {
    headers: { "content-type": "application/json" },
  });
}
