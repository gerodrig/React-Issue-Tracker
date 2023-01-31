import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';


export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string []>([]);

  const onLabelChanged = (labelName: string) => {
    (selectedLabels.includes(labelName)) ? setSelectedLabels(selectedLabels.filter(label => label !== labelName)) : setSelectedLabels([...selectedLabels, labelName]);
  };

  return (
    <div className="flex mt-5 mx-12">
    <div className="w-2/3">
      <IssueList />
    </div>
    <div className="w-1/3">
      <LabelPicker selectedLabels={ selectedLabels } onChange={(labelName) => onLabelChanged(labelName)}/>
    </div>
  </div>
  )
}