import React from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
  showMore: () => void;
}

const ShowMoreButton: React.FC<IProps> = ({ showMore }) => {
  return (
    <div className='button__show-more' onClick={() => showMore()}>
      <FontAwesomeIcon
        icon={faAngleDown}
        className='button__show-more--icon'
        size='10x'
      />
    </div>
  );
};

export default ShowMoreButton;
