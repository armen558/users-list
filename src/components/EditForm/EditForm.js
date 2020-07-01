import React from 'react';

import { validateForm } from '../../helpers';

import './EditForm.css';

class EditForm extends React.Component {
    state = {
        formData: {
            name: '',
            url: '',
            imgUrl: ''
        },
        isFormValid: true
    }

    componentDidMount () {
        this.setState({
            formData: {
                name: this.props.name || '',
                url: this.props.url || '',
                imgUrl: this.props.imgUrl || ''
            }
        })
        
    }

    handleInputChange = (event, inputType) => {
        this.setState({
            formData:{
                ...this.state.formData,
                [inputType]: event.target.value
            }
        }, () => {
            if (validateForm(this.state.formData)) {
                this.setState({isFormValid: true})
            }
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        if (validateForm(this.state.formData)) {
            this.props.handleSubmit(this.props.id, this.state.formData);
            this.props.formClose();
        }
        if (validateForm(this.state.formData)) {
            this.setState({isFormValid: true})
        } else {
            this.setState({isFormValid: false})
        }

    }

    render () {
        return (
            <form className="editForm">
                <input type="text" placeholder="Login" value={this.state.name} defaultValue={this.props.name} onChange={(e) => this.handleInputChange(e, 'name')}/>
                <input type="text" placeholder="Page url" value={this.state.url} defaultValue={this.props.url} onChange={(e) => this.handleInputChange(e, 'url')}/>
                <input type="text" placeholder="Image url" value={this.state.imgUrl} defaultValue={this.props.imgUrl} onChange={(e) => this.handleInputChange(e, 'imgUrl')}/>
                <div className="buttons">
                    <span onClick={this.handleFormSubmit} className="iconWrap check"><i className="check icon"></i></span>
                    <span className="iconWrap close" onClick={this.props.formClose}><i className="times icon"></i></span>
                </div>
                {this.state.isFormValid ? null : <p className="formError">Please fill all fields</p>}
            </form>
        )
    }
}

export default EditForm; 