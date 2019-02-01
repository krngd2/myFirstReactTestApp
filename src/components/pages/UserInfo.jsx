import React, {Component} from 'react'
import {Row, Col} from 'react-materialize';
var API = require('../../utils/api')

export default class UserInfo extends Component {
  constructor(props) {
    super()
    console.log(props)
    this.state = {
      userid: props.match.params.userid,
      userData: null
    }
    this.componentDidMount = this
      .componentDidMount
      .bind(this);
  }
  componentDidMount() {
    API
      .fetchUser(this.state.userid)
      .then((res) => {
        this.setState({userData: res[0]})
      })
  }
  render() {
    return (
      <div className="container" style={{marginTop:'16px'}}> 
        {!this.state.userData
          ? <p>loading</p>
          : <Row>
            <Col l={4}>
								<img srcSet={'https://via.placeholder.com/200'} style={{radius:'50%' }}></img>
								<h4>{this.state.userData.name}</h4>
								<h6>{`@${this.state.userData.username}`}</h6>
								<h5>Company info</h5>
								<p>{this.state.userData.company.name} - {this.state.userData.company.catchPhrase}</p>
						</Col>
						<Col l={8}>
								<h5>Contact</h5>
								<a href={`tell:${this.state.userData.phone}`}>{`${this.state.userData.phone}`}</a> <br/>
								<a href={`mailto:${this.state.userData.email}`}>{`${this.state.userData.email}`}</a> <br/>
								<a href={`http://${this.state.userData.website}`}>{`${this.state.userData.website}`}</a>
								<h5>User Address</h5>
								<p>{this.state.userData.address.street}<br/>
								{this.state.userData.address.suite}<br/>
								{this.state.userData.address.city}</p> 
						</Col>
            </Row>
          }
      </div>
    )
  }
}
