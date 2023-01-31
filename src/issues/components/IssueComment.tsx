import ReactMarkdown from 'react-markdown';

interface Props {
  body: string;
}

export const IssueComment = ({ body }: Props) => {
  return (
    <div className="w-full">
      <div className="bg-white p-2 mt-2 rounded-lg shadow-md">
        <div className="bg-gray-800 p-2 text-white flex items-center">
          <img
            src="https://avatars.githubusercontent.com/u/1933404?v=4"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="ml-2 text-lg">Pandaiolo commented</span>
        </div>
        <div className="p-2 text-gray-800 text-start">
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
