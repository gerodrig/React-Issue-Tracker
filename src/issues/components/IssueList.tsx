import { Issue } from '../interfaces';
import { IssueItem } from './IssueItem';

interface Props {
  issues: Issue[];
};

export const IssueList = ({issues}: Props) => {
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
              className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
              href="#">
              All
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
              href="#">
              Open
            </a>
          </li>
          <li className="mr-3">
          <a
              className="inline-block rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3"
              href="#">
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
