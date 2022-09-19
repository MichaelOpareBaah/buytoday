import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Shirts', 'Pants', 'Accessories', 'Shoes', 'Jackets'];
  res.send(categories);
});

export default handler;
