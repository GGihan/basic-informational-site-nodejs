import db from '../db.js';
import CustomNotFoundError from '../errors/CustomNotFoundError.js';

async function getAuthorById(req, res) {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError('Author not found');
  }

  res.send(`Author Name: ${author.name}`);
};

export default getAuthorById;