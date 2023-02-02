import { useState } from 'react';
import { LoadingIcon } from '../../share/components/LoadingIcon';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';

import { State } from '../interfaces';

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [state, setstate] = useState<State>();

  const { issuesQuery } = useIssues({state, labels: selectedLabels});

  const onLabelChanged = (labelName: string) => {
    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName]);
  };

  return (
    <div className="flex mt-5 mx-12">
      <div className="w-2/3">
        {issuesQuery.isLoading ? (
          <LoadingIcon className="mx-auto mt-5" />
        ) : (
          <IssueList issues={issuesQuery.data || []} state={state} onStateChanged={(newState) => setstate(newState)}/>
        )}
      </div>
      <div className="w-1/3">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName) => onLabelChanged(labelName)}
        />
      </div>
    </div>
  );
};
