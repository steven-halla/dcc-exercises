import React, {Component} from "react";
import {NameView} from "./NameView/NameView";


export class App extends Component {
  constructor(props) {
    super(props);
    //Exercise 1

    this.state = {
      firstName: 'Reggie',
      lastName: 'White'
    };
  }

  render(){
    return(
      <div>
        <NameView name={this.state.firstName + this.state.lastName} />
      </div>
    )
  }

}


