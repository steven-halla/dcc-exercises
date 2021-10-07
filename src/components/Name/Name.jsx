import React from 'react';

export const Name = (props) => {
  return(
    <div className>

        <h1 className>{props.name.firstName}</h1>
        <h4 className>{props.name.lastName}</h4>
    </div>
  );
}
