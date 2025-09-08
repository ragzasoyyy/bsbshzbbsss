import TikTokScraper from 'tiktok-scraper';

export default async function handler(req, res) {
  const { video_id } = req.query;
  if (!video_id) return res.status(400).json({ error: "Video ID dibutuhkan" });

  try {
    const meta = await TikTokScraper.getVideoMeta(video_id, { noWaterMark: true });
    const comments = (meta.collector[0].comments || []).map(c => ({
      user: c.userName,
      text: c.text
    }));
    res.status(200).json({ comments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengambil komentar" });
  }
}
