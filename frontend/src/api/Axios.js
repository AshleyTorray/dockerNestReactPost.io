import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
      ? '/v2'
      : 'http://127.0.0.1:7072/v2';

export default axios.create({
    baseURL,
});
