const express = require('express');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 6060;

bookRouter.route('/books')
  .get((req, res) => {
    const response = { hello: 'this is my api' };

    res.json(response);
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('welcome to my rad nodemone api');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`bingpot on port ${port}`);
});
