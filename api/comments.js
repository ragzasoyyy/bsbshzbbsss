import axios from "axios";

export default async function handler(req, res) {
  const { video_id } = req.query;
  if(!video_id) return res.status(400).json({error: "Video ID dibutuhkan"});
  try {
    const response = await axios.get(`https://api.tiktokdl.com/comments?video_id=${video_id}`);
    res.status(200).json(response.data);
  } catch(err) {
    res.status(500).json({error: "Gagal mengambil komentar"});
  }
}
