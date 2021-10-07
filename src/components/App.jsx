import React, {Component} from "react";
import {NameView} from "./NameView/NameView";
import {NameListView} from "./NameList/NameListView";
import {HeroView} from "./HeroView/HeroView";

export class App extends Component {
  constructor(props) {
    super(props);
    //Exercise 1

    // this.state = {
    //   names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
    //
    // };

    this.state = {
      superheroes : [
        {
          superheroId: 1,
          name: 'Batman',
          primaryAbility: 'Wealthy',
          secondarAbility: 'Rich'
        },
        {
          superheroId: 2,
          name: 'Superman',
          primaryAbility: 'Super strength',
          secondarAbility: 'Fly'
        },
        {
          superheroId: 3,
          name: 'Spiderman',
          primaryAbility: 'Spider senses',
          secondarAbility: 'Shoots web'
        }
      ]
    };



  }

  hiAlert = () => {
    alert("This is an alert, you pressed me");
  }

    render(){
    return(
      <div>
        {/*<NameView name={this.state.firstName + this.state.lastName} />*/}
        {/*<NameListView peopleNames={this.state.names} alertMessage={this.hiAlert}/>*/}
        <HeroView superHeroList={this.state.superheroes}/>
      </div>
    )
  }

}


