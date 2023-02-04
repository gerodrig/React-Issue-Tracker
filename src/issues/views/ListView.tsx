import { useState } from 'react';

import { IssueList, LabelPicker, Pagination, PaginationInfinite } from '../components/';
import { useIssues,useIssuesInfinite } from '../hooks';

import { State } from '../interfaces';

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [state, setstate] = useState<State>();
  const [scrollType, setScrollType] = useState<'pagination' | 'infinite'>('pagination');

  const {issuesQuery, prevPage, nextPage, page} = useIssues({
    state,
    labels: selectedLabels,
  });

  const { issuesQuery: IssuesInfiniteQuery } = useIssuesInfinite({
    state,
    labels: selectedLabels,
  });

  const onLabelChanged = (labelName: string) => {
    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName]);
  };

  const onPaginationHandler = () => {
    if(scrollType === 'pagination') {
      setScrollType('infinite');
      return;
    }
    setScrollType('pagination');
  };

  return (
    <>
    <div className='flex mt-5 ml-14'>
      <button onClick={() => onPaginationHandler()} className='bg-red-600 rounded p-1 text-yellow-200 capitalize'>{scrollType}</button>
    </div>
    <div className="flex mx-12">
      <div className="w-2/3">
        {
        // issuesQuery.isLoading ? (
        //   <LoadingIcon className="mx-auto mt-5" />) 
        // : 
        scrollType === 'pagination' ?
        (
          <IssueList
            issues={ issuesQuery.data || []}
            state={state}
            onStateChanged={(newState) => setstate(newState)}
          />
        ) :
        (
          <IssueList
            issues={ IssuesInfiniteQuery.data?.pages.flat() || []}
            state={state}
            onStateChanged={(newState) => setstate(newState)}
          />
        )
      }

        {/* pagination */}
        {/* <Pagination prevPage={prevPage} issuesQuery={issuesQuery} nextPage={nextPage} page={+page} /> */}
         { scrollType === 'pagination' ? (<Pagination prevPage={prevPage} issuesQuery={issuesQuery} nextPage={nextPage} page={+page} />) : (<PaginationInfinite query={IssuesInfiniteQuery} />) }
      </div>

      <div className="w-1/3">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName) => onLabelChanged(labelName)}
        />
      </div>
    </div>
    </>
  );
};
