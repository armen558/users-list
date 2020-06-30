import React from 'react';

import EditForm from '../EditForm/EditForm';

import './AddUser.css';

class AddUserForm extends React.Component {
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
                <div className="addUserBlock">
                    <EditForm
                        formClose={this.formClose} 
                        type="add" 
                        handleSubmit={this.props.userAdd}
                    /> 
                </div>
                : <div className="addUserBlock" ><i onClick={this.formOpen} className="plus icon"></i></div>
                
                }
</div>)

}
}
    

export default AddUserForm;