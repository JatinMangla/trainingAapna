
import React, { Component } from "react";
class Message extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            message:`welcome ${props.name}`
        }
    }

    updatemessage(props)
    {
            this.setState({
                message:`nice ${props.name}`
            })
    }
        render()
        {
            return(
                <div>
                    <h1>{this.state.message}</h1>
                    <button onClick={()=>this.updatemessage(this.props)}>Press</button>
                </div>

            )
        }
    
}
export default Message;