import TikTokScraper from 'tiktok-scraper';

export default async function handler(req, res) {
  const { username } = req.query;
  if(!username) return res.status(400).json({ error: "Username TikTok dibutuhkan" });

  try {
    const posts = await TikTokScraper.user(username, { number: 10 });
    const result = posts.collector.map(p => ({
      id: p.id,
      title: p.text,
      url: p.webVideoUrl
    }));
    res.status(200).json({ posts: result });
  } catch(err) {
    res.status(500).json({ error: "Gagal mengambil postingan user" });
  }
}
