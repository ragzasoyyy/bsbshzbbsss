import axios from "axios";

export default async function handler(req, res) {
  const { username } = req.query;
  if(!username) return res.status(400).json({error: "Username TikTok dibutuhkan"});
  try {
    const response = await axios.get(`https://api.tiktokdl.com/stalker?username=${username}`);
    const user = response.data.user;
    res.status(200).json({
      username: user.username,
      user_id: user.id,
      followers: user.followers,
      following: user.following,
      likes: user.likes,
      bio: user.bio,
      profile_url: `https://www.tiktok.com/@${user.username}`
    });
  } catch(err) {
    res.status(500).json({error: "Gagal mengambil data user"});
  }
}
