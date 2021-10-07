import React from 'react';


export const NameListView = (props) => {
  return(
    <div>
      <ol>
        <li>
          {props.peopleNames.map(function(name){
            return <h2>{name}</h2>
          })}
        </li>
      </ol>
      <button onClick={props.alertMessage}>Alert button Press meeeeee!!!</button>

    </div>
  );
}
