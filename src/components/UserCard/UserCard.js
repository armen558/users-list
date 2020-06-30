import React from 'react';

import EditForm from '../EditForm/EditForm'

import './UserCard.css';

class UserCard extends React.Component {
    state = {
        isFormOpen: false
    }

    formOpen = () => {
        this.setState({isFormOpen: true})
    }

    formClose = (e) => {
        // e.preventDefault();
        this.setState({isFormOpen: false})
    }


    render () {
        return (
        <div className="userCard">
            {this.state.isFormOpen ? 
                <EditForm 
                    id={this.props.id} 
                    formClose={this.formClose} 
                    handleSubmit={this.props.userUpdate}
                    name={this.props.name}
                    imgUrl={this.props.imgUrl}
                    url={this.props.url}
                    type="update"
                /> 
                :    <>
                    <img src={this.props.imgUrl}/>
                    <h3 className="username"><a href={this.props.url} target="_blank">{this.props.name}</a></h3>
                    <div className="editButtons">
                        <span className="iconWrap" onClick={this.formOpen} title="Edit"><i className="pencil alternate icon"></i></span>
                        <span className="iconWrap" onClick={() => this.props.userDelete(this.props.id)} title="Delete"><i className="times icon"></i></span>
                    </div>
                </>
            }
        </div>
        )
    }
}

export default UserCard;