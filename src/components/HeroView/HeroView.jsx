import React from 'react';

export const HeroView = (props) => {
  return(
    <div >
      <table>
        <ol>
          {props.superHeroList.map(function(item){
            return <li>{item.name}  {item.superheroId} {item.primaryAbility} {item.secondarAbility}</li>
          })}
        </ol>
      </table>
    </div>
  );
}
