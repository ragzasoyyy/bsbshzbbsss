import TikTokScraper from 'tiktok-scraper';

export default async function handler(req, res) {
  const { username } = req.query;
  if(!username) return res.status(400).json({ error: "Username TikTok dibutuhkan" });

  try {
    const user = await TikTokScraper.getUserProfileInfo(username);
    res.status(200).json({
      username: user.user.uniqueId,
      user_id: user.user.id,
      followers: user.user.fans,
      following: user.user.following,
      likes: user.user.heart,
      bio: user.user.signature,
      profile_url: `https://www.tiktok.com/@${user.user.uniqueId}`
    });
  } catch(err) {
    res.status(500).json({ error: "Gagal mengambil data user" });
  }
}
