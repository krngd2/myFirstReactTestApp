import React, {Component} from 'react'
import NavBar from "./layouts/navbar";
import FooTer from "./layouts/footer";

export default class Main extends Component {
  render() {
    console.log(this.props);
    return <div >
      <NavBar ></NavBar> 
      {this.props.children} 
      <FooTer></FooTer>
    </div>
  }
}
