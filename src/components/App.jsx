import React, {Component} from "react";
import {NameView} from "./NameView/NameView";
import {NameListView} from "./NameList/NameListView";

export class App extends Component {
  constructor(props) {
    super(props);
    //Exercise 1

    this.state = {
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']

    };
  }

  hiAlert = () => {
    alert("This is an alert, you pressed me");
  }

    render(){
    return(
      <div>
        {/*<NameView name={this.state.firstName + this.state.lastName} />*/}
        <NameListView peopleNames={this.state.names} alertMessage={this.hiAlert}/>
      </div>
    )
  }

}


