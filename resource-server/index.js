/* eslint-disable no-console */
import createApp from './app';

const app = createApp();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

export const server = app.listen(port, host, err => {
  if (err) {
    console.log(err);
  }

  console.log(`app started on ${host}:${port}`);
});

export const close = () => {
  console.log('Server closes');
  server.close();
};
