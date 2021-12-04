import React, { Component } from 'react';
import '../App.css';
import { Redirect } from "react-router-dom";
import Swal from 'sweetalert2';
import ReactLoading from 'react-loading';
import { URL } from '../utility/Util';

const axios = require('axios');

const Validator = require('Validator');
const rules = {
    username: 'required',
    password: 'required',
};
const messages = {
    required: 'Kolom :attr tidak boleh kosong',
};
const FormData = require('form-data');
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: true,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.title = "Halaman Login";
        setTimeout(() => {
            this.setState({
                isLoading: false,
            })
        }, 1500);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const v = Validator.make({
            username: this.state.username,
            password: this.state.password,
        }, rules, messages);

        if (v.fails()) {

            const errors = v.getErrors();
            var result = Object.entries(errors);
            console.log(result);
            Swal.fire({
                title: 'Perhatian',
                text: result[0][1][0],
                icon: 'warning',
                showCancelButton: false,
                showConfirmButton: false,
                timer: 1500,
            });

        } else {

            var form = new FormData();
            form.append('username', this.state.username)
            form.append('password', this.state.password)

            axios.post(URL + '/login/auth', form)
                .then(function (res) {
                    if (res.data.status == 'success') {

                        // Swal.fire({
                        //     title: 'Berhasil',
                        //     text: res.data.msg,
                        //     icon: 'success',
                        //     showCancelButton: false,
                        //     showConfirmButton: false,
                        //     timer: 1500,
                        // });

                        return <Redirect to="/dashboard" />

                    } else {
                        Swal.fire({
                            title: 'Gagal',
                            text: res.data.msg,
                            icon: 'error',
                            showCancelButton: false,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                })
                .catch(function (err) {
                    console.log(err);
                    Swal.fire({
                        title: 'Gagal',
                        text: 'tidak dapat menghubungi server',
                        icon: 'error',
                        showCancelButton: false,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                });
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#357EDD' }}>
                    <ReactLoading type='spin' color='#FFFFFF' height={'10%'} width={'10%'} />
                </div>
            );
        }

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
                            <input value={this.state.username} onChange={this.handleChange} name="username" type="text" className="form-control" placeholder="Username" />
                            <span className="glyphicon glyphicon-envelope form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input value={this.state.password} onChange={this.handleChange} name="password" type="password" className="form-control" placeholder="Password" />
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
