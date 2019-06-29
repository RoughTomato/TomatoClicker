import React from 'react';

const Nav = (props) => {
  const score = props;
  return (
    <div>
    You have
      {' '}
      {score.tomatoes}
      {' '}
    🍅.
    </div>
  );
};

export default Nav;
