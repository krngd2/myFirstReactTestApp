import React, {Component,PropTypes} from 'react' 
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-materialize';
import CardTitle from 'react-materialize/lib/CardTitle';
var api = require('../../utils/api') 

export default class Posts extends Component {
  constructor(props) {
    super();
    this.state = {
			userid: props.userid,
			posts:null
    }
  }
  componentDidMount() { 
    this.updateView(this.props.userid)
	}  
	// componentWillUpdate(newProps){ 
 	// 	this.updateView(newProps.userid); 
	// }
	// componentDidUpdate(newProps){
	// 	this.updateView(newProps.userid); 
	// }
	componentWillReceiveProps(newProps){
		this.updateView(newProps.userid); 
	}
	updateView(userId){
		api.fetchAlbums(userId)
		.then(function (res) { 
			this.setState({
				posts: res,
				userid :userId
			})
		}.bind(this)); 
	}
  render() {
    return (
			<div>
			{!this.state.posts? <p>Loading...</p>:
				<Row>
				{this.state.posts.map((item)=>
				<Col l={3} key={item.id}>
					<Card className='small' header={<CardTitle reveal image="https://via.placeholder.com/150" waves='light'/>}
							title={item.title.substring(0,15)}
							reveal={<p>{item.body}</p>}>
							<p><Link to={`/userinfo/${item.userId}`}>UserInfo</Link></p>
					</Card> 
				</Col>
				)}
				</Row>
			}
			</div>
    )
  }
}
