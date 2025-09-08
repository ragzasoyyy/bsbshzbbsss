import TikTokScraper from 'tiktok-scraper';

export default async function handler(req, res) {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: "Query pencarian dibutuhkan" });

  try {
    const videos = await TikTokScraper.search(query, { number: 10 });
    const results = videos.collector.map(v => ({
      id: v.id,
      title: v.text,
      author: v.authorMeta.name,
      url: v.webVideoUrl
    }));
    res.status(200).json({ results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mencari video" });
  }
}
