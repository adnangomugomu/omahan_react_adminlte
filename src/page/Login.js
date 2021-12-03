import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
    }

    render() {
        return (
            <div className="login-box">
                <div className="login-logo">
                    Halaman Login
                </div>
                {/* /.login-logo */}
                <div className="login-box-body">
                    <p className="login-box-msg">Masukkan username dan password yang sesuai</p>
                    <form onSubmit={this.handleSubmit} action="#" method="post">
                        <div className="form-group has-feedback">
                            <input value={this.state.username} onChange={this.handleChange} required name="username" type="text" className="form-control" placeholder="Username" />
                            <span className="glyphicon glyphicon-envelope form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input value={this.state.password} onChange={this.handleChange} required name="password" type="password" className="form-control" placeholder="Password" />
                            <span className="glyphicon glyphicon-lock form-control-feedback" />
                        </div>
                        <div className="row">
                            <div className="col-xs-8"></div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Masuk</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
