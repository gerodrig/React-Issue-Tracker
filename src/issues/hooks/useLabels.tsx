import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Label } from '../interfaces/';
import { sleep } from '../../helpers/sleep';

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);
  const { data } = await githubApi.get<Label[]>('/labels?per_page=100',{
    headers: {
      Authorization: null,
  },
  });

  return data;
};

export const useLabels = () => {
  const query = useQuery(['labels'], getLabels, {
    staleTime: 1000 * 60 * 60,
    //initialData: [],
    placeholderData: [
      {
        id: 1109410193,
        node_id: 'MDU6TGFiZWwxMTA5NDEwMTkz',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Hooks',
        name: 'Component: Hooks',
        color: 'c2f27b',
        default: false,
      },
      {
        id: 710332294,
        node_id: 'MDU6TGFiZWw3MTAzMzIyOTQ=',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Server%20Rendering',
        name: 'Component: Server Rendering',
        color: 'd4c5f9',
        default: false,
      },
    ],
  });

  return query;
};
