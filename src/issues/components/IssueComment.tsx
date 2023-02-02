import ReactMarkdown from 'react-markdown';
import { Issue } from '../interfaces';

interface Props {
  issue: Issue;
}

export const IssueComment = ({ issue }: Props) => {
  return (
    <div className="w-full">
      <div className="bg-white p-2 mt-2 rounded-lg shadow-md">
        <div className="bg-gray-800 p-2 text-white flex items-center">
          <img
            src={`${issue.user.avatar_url}`}
            alt={`${issue.user.login} Avatar`}
            className="w-8 h-8 rounded-full"
          />
          <span className="ml-2 text-lg">{issue.user.login} commented</span>
        </div>
        <div className="p-2 text-gray-800 text-start">
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
