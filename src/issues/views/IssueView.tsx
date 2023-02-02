import { Link, Navigate, useParams } from 'react-router-dom';
import { LoadingIcon } from '../../share/components/LoadingIcon';
import { IssueComment } from '../components/IssueComment';
import { useIssue } from '../hooks';

export const IssueView = () => {
  const { id = '0' } = useParams<{ id: string }>();

  const { issueQuery, commentsQuery } = useIssue(+id);

  if (issueQuery.isLoading) return <LoadingIcon className='mx-auto mt-5' />;
  if (!issueQuery.data) return <Navigate to="./issues/list" />;

  return (
    <div className="flex flex-col mb-5 mx-12">
      <div className="mb-3">
        <Link to="./issues/list">Go Back</Link>
      </div>

      {/* <!-- First comment --> */}
      <IssueComment issue={issueQuery.data!} />

      {/* <!-- Other comments --> */}
      {commentsQuery.isLoading && <LoadingIcon className='mx-auto mt-5'/>}
      {commentsQuery.data?.map((comment) => (
        <IssueComment key={comment.id} issue={comment} />
      ))}
    </div>
  );
};
