import React from 'react';

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        msg: '',
        nameError: false,
        emailError: false,
        MsgError: false,
    }

    //setContactMsg = contactMsg => this.setState({contactMsg});

    onHandleChange = e => {

        switch (e.target.name) {
            case 'name':
                if (e.target.value.length < 3) {
                    this.setState({ nameError: true })
                } else {
                    this.setState({ nameError: false })
                }
                this.setState({ name: e.target.value })
                break;
            case 'email':
                const patternEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (!patternEmail.test(e.target.value)) {
                    this.setState({ emailError: true })
                } else {
                    this.setState({ emailError: false });
                }
                this.setState({ email: e.target.value })
                break;
            case 'msg':
                this.setState({ msg: e.target.value })
                break;
            default:
                break;
        }
    }

    onHandleSubmit = e => {
        e.preventDefault();
        const { name, email, msg } = this.state;
        const sendQuery = { name, email, msg };
        console.log(sendQuery)
    }

    render() {
        return (
            <section className='container'>
                <form className='m-4 p-5' onSubmit={this.onHandleSubmit}>
                    <legend className='text-center h3'>Contact Form</legend>
                    <div className='row'>
                        <div className="form-group col-12 col-md-4">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" className="form-control" id="name" name="name" onChange={this.onHandleChange} required />
                            {this.state.nameError &&
                                <span id='alias-error' className='form-text text-danger'>Su nombre debe contener mas de 4 letras.</span>
                            }
                        </div>
                        <div className="form-group col-12 col-md-8">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={this.onHandleChange} required />
                            {this.state.emailError &&
                                <span id='email-error' className='form-text text-danger'>El email es invalido.</span>
                            }
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-12">
                            <label htmlFor="msg">Message</label>
                            <textarea className="form-control" id="msg" rows="3" name="msg" onChange={this.onHandleChange} required></textarea>
                        </div>
                        <div className="form-group col-12">
                            <input type="submit" className="btn btn-primary" value='Submit' />
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

export default Contact;