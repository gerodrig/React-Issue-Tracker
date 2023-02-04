import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { githubApi } from '../../api/githubApi';
import { Issue, State } from '../interfaces/';
import { sleep } from '../../helpers/sleep';

interface Props {
  state?: State;
  labels: string[];
  page?: number;
}

const getIssues = async ({labels, state, page = 1}: Props): Promise<Issue[]> => {
  await sleep(2);

  const params = new URLSearchParams();

  if (labels.length > 0) {
    const labelString = labels.join(',');
    params.append('labels', labelString);
  }

  if (state) {
    params.append('state', state);
  }

  params.append('page', '1');
  params.append('per_page', '5');

  const { data } = await githubApi.get<Issue[]>('/issues', { params });

  return data;
};

export const useIssues = ({ state, labels }: Props) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [state, labels]);
  
  const issuesQuery = useQuery(['issues', { state, labels, page }], () =>
    getIssues({labels, state, page})
  );

  const nextPage = () => {
    if(issuesQuery.data?.length! === 0) return;
    
    setPage(page + 1);
  }

  const prevPage = () => {
    if(page === 1) return;
    
    setPage(page - 1);
  }

  return {
    //properties
    issuesQuery,

    //getter
    page: issuesQuery.isFetching ? 'Loading...' : page,

    //methods
    nextPage,
    prevPage,
  };
};
