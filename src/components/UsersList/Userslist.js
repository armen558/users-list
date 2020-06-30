import React  from 'react';

import AddUserForm from '../AddUserForm/AddUser';
import UserCard from '../UserCard/UserCard';
import { fetchUsers} from '../../helpers';
import Spinner from '../Spinner/Spinner';

import './UsersList.css';

class UsersList extends React.Component {

    state = {
        users: [],
        usersLoaded: false
    };

    componentDidMount () {
        let updateUsers = (users) => this.setState({users: users}, () => {this.setState({usersLoaded: true})});
        fetchUsers(updateUsers);
    }
    handleUserDelete = (userId) => {
        let newUsersList = this.state.users.filter((el) => el.id !== userId);
        this.setState({users: newUsersList});
    }
    handleUserUpdate = (userId, info) => {
        let newUsersList = this.state.users.map(el => {
            if(el.id === userId) {
                let obj = Object.assign({}, {...el, login: info.name, html_url: info.url, avatar_url: info.imgUrl});
                return obj;
            } else {
                return el;
            }
        });
        this.setState({users: newUsersList});
    }
    handleUserAdd = (_, user) => {
        let userObj = {
            id: this.state.users[this.state.users.length - 1].id + 1,
            login: user.name,
            avatar_url: user.imgUrl,
            html_url: user.url

        };
        let newUsersList = this.state.users.concat(userObj);
        this.setState({users: newUsersList})
    }

    render () {
        const users = this.state.users.map(user => (
                <UserCard 
                    key={user.id} 
                    id={user.id} 
                    name={user.login} 
                    imgUrl={user.avatar_url} 
                    url={user.html_url}
                    userDelete={this.handleUserDelete}
                    userUpdate={this.handleUserUpdate}
                />
            )
        )
        let usersOutput = <Spinner/>;
        if (this.state.usersLoaded) {
            usersOutput = (
                <div className="usersList">
                    {users}
                    <AddUserForm userAdd={this.handleUserAdd}/>
                </div>
            )
        }

        return usersOutput;
    }

}

export default UsersList;