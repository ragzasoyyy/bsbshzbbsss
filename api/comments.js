import TikTokScraper from 'tiktok-scraper';

export default async function handler(req, res) {
  const { video_id } = req.query;
  if(!video_id) return res.status(400).json({ error: "Video ID dibutuhkan" });

  try {
    const comments = await TikTokScraper.getVideoMeta(video_id, { noWaterMark: true });
    res.status(200).json({
      comments: comments.collector[0].comments.map(c => ({
        user: c.userName,
        text: c.text
      }))
    });
  } catch(err) {
    res.status(500).json({ error: "Gagal mengambil komentar" });
  }
}
