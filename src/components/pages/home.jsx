import React, { Component } from 'react'
import CarouselComp from '../minicomp/carousel'; 
import Posts from '../minicomp/Posts';
import { Pagination } from 'react-materialize';

export default class Home extends Component {
  constructor(props){
    super();
    this.state={
      userid :1
    }
  }
  updateUserId(event){
     this.setState({
       userid:event
     })
  }
  render() { 
    return (
      <div className="container"> 
        <CarouselComp></CarouselComp>
        <Pagination items={10} activePage={this.state.userid} onSelect={this.updateUserId.bind(this)}/>
        <Posts userid={this.state.userid}></Posts>
      </div> 
    )
  }
}
