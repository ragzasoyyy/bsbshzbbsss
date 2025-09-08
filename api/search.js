import axios from "axios";

export default async function handler(req, res) {
  const { query } = req.query;
  if(!query) return res.status(400).json({error: "Query pencarian dibutuhkan"});
  try {
    const response = await axios.get(`https://api.tiktokdl.com/search?query=${query}`);
    res.status(200).json(response.data);
  } catch(err) {
    res.status(500).json({error: "Gagal mencari video"});
  }
}
