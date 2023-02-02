import { Issue, State } from '../interfaces';
import { IssueItem } from './IssueItem';

interface Props {
  issues: Issue[];
  state?: State;
  onStateChanged: (newState?: State) => void;
};

export const IssueList = ({issues, state, onStateChanged}: Props) => {
  const activeClass = 'border border-blue-500  bg-blue-500 text-white';
  const inactiveClass = 'hover:border-gray-200 text-blue-500 hover:bg-gray-200'
  return (
    <div className="bg-white p-2 rounded-lg shadow-md">
      <div className="bg-gray-800 p-2 text-white flex justify-between">
        {/* <ul className="flex">
          <li className="mr-2 font-medium text-gray-300 hover:text-white">
            All
          </li>
          <li className="mr-2 font-medium text-gray-600 hover:text-white">
            Open
          </li>
          <li className="mr-2 font-medium text-gray-600 hover:text-white">
            Closed
          </li>
        </ul> */}
        <ul className="flex">
          <li className="mr-3">
            <a
              className={`inline-block rounded py-1 px-3 hover:cursor-pointer ${ !state ? activeClass : inactiveClass}`}
              onClick={() => onStateChanged()}
              >
              All
            </a>
          </li>
          <li className="mr-3">
            <a
              className={`inline-block rounded py-1 px-3 hover:cursor-pointer ${ state === 'open' ? activeClass : inactiveClass}`}
              onClick={() => onStateChanged('open')}
              >
              Open
            </a>
          </li>
          <li className="mr-3">
          <a
              className={`inline-block rounded py-1 px-3 hover:cursor-pointer ${ state === 'closed'  ? activeClass : inactiveClass}`}
              onClick={() => onStateChanged('closed')}
              >
              Closed
            </a>
          </li>
        </ul>
      </div>
      <div className="p-2 text-gray-800">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};
