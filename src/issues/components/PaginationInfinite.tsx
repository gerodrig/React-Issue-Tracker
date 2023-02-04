import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { Issue } from "../interfaces";

interface Props {
    query:  UseInfiniteQueryResult<Issue[], unknown>
}

export const PaginationInfinite = ({query}: Props) => {


    return (
        <div className="flex py-2 justify-between items-center bg-slate-900 rounded-b-md">
          <button
          disabled={!query.hasNextPage}
          onClick={() => query.fetchNextPage()}
            className="inline-block rounded py-1 ml-2 px-3 hover:cursor-pointer hover:border-blue-200 text-blue-500 border border-blue-500 hover:bg-blue-200"
            // onClick={prevPage}
            // disabled={issuesQuery.isFetching}
            >
            Load More...
          </button>

        </div>
      );
};