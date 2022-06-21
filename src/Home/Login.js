import React, { Component } from "react";
import "./style.css";
import clientService from '../client.service'

class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            emailAddress: "",
            password: "",
            errormsg:"",
        }
    }



    onchangeData = (keyName,event) => {
        const { name, value } = event.target
        this.setState({
            [keyName]:value,
            errormsg: ""
        })
    }
    
    onSubmit = () => {
        console.log(this.state);
         if (!this.state.emailAddress) {
            this.setState({
                errormsg: "email address not found"
            })
            return
        }
        if(!this.state.password){
            this.setState({
                errormsg: "password not found"
            })
            return
        }
        const {emailAddress,password}=this.state
        const payloadon = {  emailAddress, password };
        clientService.onLogin(payloadon)
            .then(data => {
                console.log('success',data)
                this.props.history.push("/discussion")
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
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" value={this.state.emailAddress}
                            onChange={(event) => this.onchangeData('emailAddress',event)} />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="pwd" value={this.state.password}
                            onChange={(event) => this.onchangeData('password',event)} />

                    </div>
                    <button type="submit" className="btn btn-primary mt-3" style={{ float: "right" }} onClick={() => this.onSubmit()} >Submit</button>
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
export default Login