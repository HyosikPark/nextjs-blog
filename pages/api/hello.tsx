// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  console.log(process.env.EXP);
  res.json({ name: process.env.EXP });
};
