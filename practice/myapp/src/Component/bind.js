import React, { Component } from "react";

class Bind extends Component
{
    constructor(props) {
        super(props)
        this.state={Text:`message`}
        this.clickHandler=this.clickHandler.bind(this)
        
    }

    clickHandler()
    {
        this.setState({Text:`updated`})
    }

    render()
    {
        return(
            <div>
                {this.state.Text}
                <br></br>
                <button onClick={this.clickHandler}>Press</button>
            </div>
        )
    }
}

export default Bind