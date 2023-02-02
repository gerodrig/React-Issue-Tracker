import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { Issue } from '../interfaces';

interface Props {
  issue: Issue;
}

export const IssueItem = ({ issue }: Props) => {
  //navigate to issue detail page
  const navigate = useNavigate();
  return (
    <div className="mb-2 issue" onClick={() => navigate(`/issues/issue/${issue.number}`)}>
      <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
        <div>
          {issue.state === "closed" ? (
            <FiCheckCircle size={30} color="green" />
          ) : (
            <FiInfo size={30} color="red" />
          )}
        </div>

        <div className="flex flex-col items-start pl-4">
          <span className="text-lg text-start">{issue.title}</span>
          <span className="text-sm text-gray-600">
            #{issue.number} opened 2 days ago by{' '}
            <span className="font-medium">{issue.user?.login}</span>
          </span>
        </div>

        <div className="flex mx-5 items-center ml-auto">
          <img
            src={`${issue.user?.avatar_url}`}
            alt={`${issue.user?.login} Avatar`}
            className="h-8 w-8 rounded-full"
          />
          <div className="flex items-center mr-2">
            <span className="px-2 text-lg">{issue.comments}</span>
            <FiMessageSquare />
          </div>
        </div>
      </div>
    </div>
  );
};
