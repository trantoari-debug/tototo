let seq = 0;
export default function handler(req, res) {
  const t = Date.now() + seq++;
  const r = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
  const token = `B1-${t}-${r} | TRI LUNGGO KASIH | LIVE MERDEKA`;

  res.status(200).json({
    server: "Tri Lunggo Merdeka Aktif",
    token: token
  });
}
