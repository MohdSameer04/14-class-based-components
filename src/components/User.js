import { Component } from 'react';
import classes from './User.module.css';

//  CLASS BASED COMPONENTS

// Component is a built in feature in class based components 
class User extends Component {
  render(){
    //with the help of this keyword we all inherit the properties of components class
    return <li className={classes.user}>{this.props.name}</li>;
  }
}


//  NORMAL FUNCTION (FUNCTIONAL BASED COMPONENTS)

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
