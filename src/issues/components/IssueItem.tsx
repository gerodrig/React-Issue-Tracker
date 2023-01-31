import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';

export const IssueItem = () => {
  return (
    <div className="mb-2 issue">
      <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
        <div>
          <FiInfo size={30} color="red" />

        </div>
        {/* <FiCheckCircle size={30} color="green" /> */}

        <div className="flex flex-col items-start pl-4">
          <span className="text-lg text-start">
            Suggestion: why not make accessing and changing the state possible
            globally?
          </span>
          <span className="text-sm text-gray-600">
            #25581 opened 2 days ago by{' '}
            <span className="font-medium">segfaulty1</span>
          </span>
        </div>

        <div className="flex mx-5 items-center">
          <img
            src="https://avatars.githubusercontent.com/u/1933404?v=4"
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
          <span className="px-2 text-lg">2</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
