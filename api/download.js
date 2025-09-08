import axios from "axios";

export default async function handler(req, res) {
  const { url } = req.query;
  if(!url) return res.status(400).json({error: "URL video TikTok dibutuhkan"});
  try {
    const response = await axios.get(`https://api.tiktokdl.com/download?url=${url}`);
    res.status(200).json(response.data);
  } catch(err) {
    res.status(500).json({error: "Gagal download video"});
  }
}
