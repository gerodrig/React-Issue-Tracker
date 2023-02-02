import { FaSpinner } from 'react-icons/fa';

interface Props {
    className?: string;
}

export const LoadingIcon = ({className = ''}: Props) => {
    return (
        <FaSpinner className={`animate-spin block ${className}`} />
    )
}
