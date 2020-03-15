import { useState } from 'react';
import { postBookmark as post, getBookmark as get } from './bookmark';
import Axios, { AxiosError } from 'axios';

enum Phase {
  empty = '',
  loading = 'loading',
  success = 'success',
  error = 'error',
  disabled = 'disabled'
}

const baseUrl = '/bookmark';
const getBookmark = async (id: string) => await Axios.get(`${baseUrl}/${id}`);

const postBookmark = async (links: Array<string>) =>
  await Axios.post(baseUrl, links);

const useBookmark = () => {
  const [error, setError] = useState<AxiosError>();
  const [phase, setPhase] = useState<Phase>(Phase.empty);
  const [bookmark, setBookmark] = useState({});

  const submitBookmark = async links => {
    setPhase(Phase.loading);

    try {
      const id = await post(links);

      setPhase(Phase.success);
      return id;
    } catch (error) {
      setError(error);
      setPhase(Phase.error);

      throw error;
    }
  };

  const getBookmark = async (bookmarkId: string) => {
    setPhase(Phase.loading);
    try {
      setBookmark(await get(bookmarkId));

      setPhase(Phase.success);
    } catch (error) {
      setError(error);
      setPhase(Phase.error);
    }
  };

  return { submitBookmark, getBookmark, error, phase, bookmark };
};

export { useBookmark, getBookmark, postBookmark };
