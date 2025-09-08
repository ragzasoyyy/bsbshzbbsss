import axios from "axios";

export default async function handler(req, res) {
  const { username } = req.query;
  if(!username) return res.status(400).json({error: "Username TikTok dibutuhkan"});
  try {
    const response = await axios.get(`https://api.tiktokdl.com/user-posts?username=${username}`);
    res.status(200).json(response.data);
  } catch(err) {
    res.status(500).json({error: "Gagal mengambil postingan user"});
  }
}
