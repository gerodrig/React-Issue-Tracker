import { useLabels } from '../hooks/useLabels';
import { LoadingIcon } from '../../share/components/LoadingIcon';
import { Label } from '../interfaces/label';

interface Props {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker = ({ selectedLabels, onChange }: Props) => {
  const labelsQuery = useLabels();

  if (labelsQuery.isLoading) {
    return <LoadingIcon />;
  }

  return (
    <>
      {labelsQuery.data?.map(({id, name, color}: Label) => (
        <span
          key={id}
          className={`inline-block text-xs text-ellipsis px-3 py-1 rounded-full text-white m-1 hover:cursor-pointer hover:bg-slate-600 ${ selectedLabels.includes(name) ? 'bg-gray-400' : '' }`}
          onClick={() => onChange(name)}
          style={{
            border: `1px solid #${color}`,
            color: `#${color}`,
          }}>
          {name}
        </span>
      ))}
    </>
  );
};
