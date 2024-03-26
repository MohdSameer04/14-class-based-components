import { Fragment, Component } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";


class UserFinder extends Component {

    static contextType = UsersContext;
    constructor(){
        super();
        this.state = {
            filteredUsers : [],
            searchTerm : ''
        }
    }
    
    componentDidMount(){
        // send http request
        this.setState({filteredUsers : this.context.users });
    }
    //  same working as useEffects 
    componentDidUpdate(prevProps, prevState){
        // to avoid infinity loop we put if conditions here 
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({
                filteredUsers : this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            })
        } 
    }

    searchChangeHandler(event){
        this.setState({
            searchTerm : event.target.value
        })
    }

    render(){
        return (
            <Fragment>
                <div className={classes.finder}>
                    
                    {/* to check this keyword is working correct or not bind is used  */}
                    <input type="search" onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
            </Fragment>
        );
    }
}


//  FUNCTIONAL BASED COMPONENTS
// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState("");

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type="search" onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// };

export default UserFinder;
