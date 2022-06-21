import React, { Component } from "react";
import clientService from '../client.service'
import "./style.css"
class Discussion extends Component {
    constructor(props) {
        super()
        this.state = {
            discussionText: "",
            discussionList: [],
        }
    }
    componentDidMount = () => {
       this.onLoadDiscussions()
    }

    onLoadDiscussions = () => {
        clientService.getDiscussions()
        .then(Response => {
            console.log('success fff', Response.data.data)
            this.setState({
                discussionList: (Response.data && Response.data.data) || []
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    onchangediscussion = (event) => {
        const { name, value } = event.target
        this.setState({
            // [name]:value
            discussionText: value,
            errormsg: ""
        })
    }


    onSubmit = () => {
        console.log(this.state);
        if (!this.state.discussionText) {
            this.setState({
                errormsg: "discussion not found"
            })
            return
        }

        const { discussionText } = this.state
        const payloadon = { discussionText };
        clientService.createDiscussion(payloadon)
            .then(data => {
                console.log('success', data)
                this.onLoadDiscussions()
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (

            <div className="discussion-main">
                <div className="discussion-text">
                    {this.state.discussionList && this.state.discussionList.map((dis, index) => (
                         <div className="card mt-2 p-2" key={index}>
                        <p>
                            {dis.discussionText}
                        </p>
                        <p>
                            { dis.createdAt }
                        </p>
                    </div>)
                    )}
                </div>
                <div className="discussion-input">
                    <div class="form-group " >
                        <label for="Discussion">Comment:</label>
                        <textarea className="form-control" rows="5" id="Discussion"
                            onChange={(event) => this.onchangediscussion(event)} value={this.state.discussionText}></textarea>
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
}

export default Discussion;
