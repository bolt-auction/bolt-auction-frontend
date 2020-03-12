import axios from 'axios';

const client = axios.create();

client.defaults.headers.common[
  'Authorization'
] = `Bearer ${localStorage.token}`;

export default client;
