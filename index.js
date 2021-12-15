if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '.env.local' });
}

const app = require('./server');
const port = process.env.PORT || 4000;
app().then((server) =>
  server.listen({ port }, () => {
    console.log(`🚀 Server listening on port ${port}`);
  })
);
