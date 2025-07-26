export default async function handler(req, res) {
  const { code, shop } = req.query;

  if (!code || !shop) {
    return res.status(400).send('Missing code or shop param');
  }

  // Mock token exchange (in real app, you’d use Shopify’s API here)
  console.log('OAuth callback received from:', shop);
  return res.redirect(`/app?shop=${shop}`);
}
