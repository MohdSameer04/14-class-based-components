import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';


class Users extends Component {

  // with the help of that how we can manage a state with the help of class based components
  constructor(){
    super();
    // setting a default state value 
    this.state = {
      showUsers : true,
      more : 'Test',
    };
  }

  toggleUsersHandler(){

    // with the help if that we can set a updated value in the state
    this.setState((curState) => {
      return { showUsers : !curState.showUsers }
    })
  }

  render(){

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>

          {/* with the help of this.state we can acces this(Class based components) state */}
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}


              // FUNCTIONAL COMPONENTS STATE 

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

  
              // HOW WE CAN MANAGE FUNCTIONAL BASED COMPONENTS STATE
//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
