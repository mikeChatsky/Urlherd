import Axios from 'axios';

const baseUrl = '/bookmark';

const getBookmark = async (id: string) => await Axios.get(`${baseUrl}/${id}`);

const postBookmark = async (links: Array<string>) =>
  await Axios.post(baseUrl, links);

export { getBookmark, postBookmark };
