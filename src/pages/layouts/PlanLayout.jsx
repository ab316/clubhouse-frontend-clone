import React from 'react';
import {Outlet} from 'react-router';

const PlanLayout = ({children}) => {
  return (
    <div style={{width: '100%', maxWidth: '500px', margin: 'auto'}}>
      <Outlet />
    </div>
  );
};

export default PlanLayout;
