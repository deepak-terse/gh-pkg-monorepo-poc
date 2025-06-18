import express from 'express';
import { getHelloMessage } from '@monorepo/api';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: getHelloMessage() });
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
}); 