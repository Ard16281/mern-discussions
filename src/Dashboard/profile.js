import React, { Component, Profiler } from "react";


class profile extends Component {
    constructor(props) {
        super()
        this.state = {
            personName: "",
            phoneNumber: "",
            emailAddress: "",
            linkedin: "",
            errormsg: "",

        }
    }


    onchangepersonName = (event) => {
        const { name, value } = event.target
        this.setState({
            // [name]:value
            personName: value,
            errormsg: ""

        })
    }

    onchangepersonphoneNumber = (event) => {
        const { name, value } = event.target
        this.setState({
            // [name]:value
            phoneNumber: value,
            errormsg: ""
        })
    }

    onchangepersonemailAddress = (event) => {
        const { name, value } = event.target
        this.setState({
            // [name]:value
            emailAddress: value,
            errormsg: ""
        })
    }
    onchangelinkedin = (event) => {
        const { name, value } = event.target
        this.setState({
            // [name]:value
            linkedin: value,
            errormsg: ""
        })
    }




    onSubmit = () => {
        console.log(this.state);
        if (!this.state.personName) {
            this.setState({
                errormsg: "personName not found"

            })
            return
        }

        if (!this.state.phoneNumber) {
            this.setState({
                errormsg: "Phone number not found"
            })
            return
        }
        if (!this.state.emailAddress) {
            this.setState({
                errormsg: "emailAddress not found"
            })
            return
        }
        if (!this.state.linkedin) {
            this.setState({
                errormsg: "linkedin not found"
            })
            return
        }
    }



    render() {
        return (
            <div>
                <div className="loginForm p-4">
                    <div class="form-group">
                        <label for="name">Person Name:</label>
                        <input type="text" className="form-control" placeholder="EnterPersonName" id="name" name="personName" value={this.state.personName}
                            onChange={(event) => this.onchangepersonName(event)} />
                    </div>
                    <div class="form-group">

                        <label for="phone">Phone Number:</label>
                        <input type="text" className="form-control" placeholder="Enter phoneNumber" id="phone" name="phoneNumber" value={this.state.phoneNumber}
                            onChange={(event) => this.onchangepersonphoneNumber(event)} />

                    </div>

                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" name="email" value={this.state.emailAddress}

                            onChange={(event) => this.onchangepersonemailAddress(event)} />
                    </div>

                    <div class="form-group">
                        <label for="name">linkedin:</label>
                        <input type="text" className="form-control" placeholder="Enterlinkedin" id="name" name="linkedin" value={this.state.linkedin}
                            onChange={(event) => this.onchangelinkedin(event)} />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3" style={{ float: "right" }} onClick={() => this.onSubmit()} >proceed</button>
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

export default profile