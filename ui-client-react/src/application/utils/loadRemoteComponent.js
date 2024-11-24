import React from 'react';

export const loadRemoteComponent = (name) => {
  return process.env.NODE_ENV === 'development'
    ? React.lazy(() => import(`remote/${name}`))  
    : () => <div>Error loading {name}</div>;
};
