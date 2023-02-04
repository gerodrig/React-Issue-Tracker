import { UseQueryResult } from '@tanstack/react-query';
import { Issue } from '../interfaces/issue';

interface Props {
  prevPage: () => void;
  issuesQuery: UseQueryResult<Issue[], unknown>;
  nextPage: () => void;
  page: number;
}

export const Pagination = ({
  prevPage,
  issuesQuery,
  nextPage,
  page,
}: Props) => {
  return (
    <div className="flex py-2 justify-between items-center bg-slate-900 rounded-b-md">
      <button
        className="inline-block rounded py-1 ml-2 px-3 hover:cursor-pointer hover:border-blue-200 text-blue-500 border border-blue-500 hover:bg-blue-200"
        onClick={prevPage}
        disabled={issuesQuery.isFetching}>
        Prev
      </button>
      <span className="text-white">
        {issuesQuery.isFetching ? 'Loading...' : page}
      </span>
      <button
        className="inline-block rounded py-1 mr-2 px-3 hover:cursor-pointer border border-blue-500 text-blue-500 hover:bg-blue-200"
        onClick={nextPage}
        disabled={issuesQuery.isFetching}>
        Next
      </button>
    </div>
  );
};

