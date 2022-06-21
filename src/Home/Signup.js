import React, { Component } from "react";
import "./style.css";
import clientService from '../client.service'

class Signup extends Component {
    constructor(props) {
        super()
        this.state = {

            personName: "",
            phoneNumber: "",
            emailAddress: "",
            password: "",
            conformPassword: "",
            errormsg: "",
            isloginenabled: false

        }
    }
    componentDidMount = () => {
        console.log(this.props, "--------------")
    }

    onChangeData = (keyName, event) => {
        const { name, value } = event.target
        this.setState({
            [keyName]: value,
            errormsg: ""
        })
    }



    onSignup = () => {
        const {personName, phoneNumber, emailAddress,password,conformPassword} = this.state
        console.log(this.state);
        if (!personName) {
            this.setState({
                errormsg: "personName not found"
            })
            return
        }

        if (!phoneNumber) {
            this.setState({
                errormsg: "Phone number not found"
            })
            return
        }
        if (!emailAddress) {
            this.setState({
                errormsg: "emailAddress not found"
            })
            return
        }
        const payload = { personName, phoneNumber, emailAddress, password };
        clientService.Signup(payload)
            .then(data => {
                console.log(data)
                this.props.history.push("/login")

            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {
        return (
            <div>
                <div className="loginForm p-4">
                    <div class="form-group">
                        <label for="name">Person Name:</label>
                        <input type="text" className="form-control" placeholder="EnterPersonName" id="name" name="personName" value={this.state.personName}
                            onChange={(event) => this.onChangeData('personName', event)} />
                    </div>
                    <div class="form-group">

                        <label for="phone">Phone Number:</label>
                        <input type="text" className="form-control" placeholder="Enter phoneNumber" id="phone" name="phoneNumber" value={this.state.phoneNumber}
                            onChange={(event) => this.onChangeData('phoneNumber', event)} />

                    </div>

                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" name="email" value={this.state.emailAddress}

                            onChange={(event) => this.onChangeData('emailAddress', event)} />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="pwd" name="password" value={this.state.password}
                            onChange={(event) => this.onChangeData('password', event)} />

                    </div>
                    <div class="form-group">
                        <label for="confirm-password">Conform Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="confirm-password" name="conformPassword" value={this.state.conformPassword}
                            onChange={(event) => this.onChangeData('conformPassword', event)} />

                    </div>
                    <button type="submit" className="btn btn-primary mt-3" style={{ float: "right" }} onClick={() => this.onSignup()} >Signup</button>

                    <div>
                        {
                            this.state.errormsg ? this.state.errormsg : ""
                        }
                    </div>
                </div>


            </div>
        )
    }
};
export default (Signup)