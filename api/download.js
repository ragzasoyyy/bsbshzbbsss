import { getVideoMeta } from 'tiktok-scraper';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "URL video TikTok dibutuhkan" });

  try {
    const meta = await getVideoMeta(url, { noWaterMark: true });
    const video = meta.collector[0];
    res.status(200).json({
      video_url: video.videoUrl,
      title: video.text,
      author: video.authorMeta.name
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal download video" });
  }
}
