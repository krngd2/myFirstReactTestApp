import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize';

export default class Login extends Component {
  constructor(props){
    super()
    this.state ={
      username:null,
      password:null
    }
  }
   
  render() {
    return (
      <React.Fragment> 
          <img  style={{position: 'fixed', zIndex: '-99', width: '100%', height: 'auto'}} 
          src={'https://www.valuemotorcycleparts.co.uk/ekmps/shops/8ecd76/resources/Design/cafe-racer-background.jpg'}/> 
          <div style={{ display: 'flex',justifyContent: 'left',alignItems: 'center'}}> 
              <Row style={{backgroundColor:'#0000004f', padding:"20px", marginTop:'50px',borderRadius:'20px'}}>
                <h3 className='dark'>Login</h3> 
                  <Input type="text" label="username" s={12} autoComplete='off' onChange={(event)=>{this.setState({username:event.target.value})}}/> 
                  <Input type="password" label="password" s={12} autoComplete='off' onChange={(event)=>{this.setState({password:event.target.value})}}/> 
                  <Button type="button" onClick={()=>{this.props.history.push('/')}} className='btn btn-primary' disabled={this.state.username == null || this.state.password == null}>Login</Button>
              </Row>
          </div>
      </React.Fragment>
    )
  }
}
