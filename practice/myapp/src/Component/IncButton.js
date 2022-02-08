import React, { Component } from "react";
class Inc extends Component
{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    
    in =()=> {
        this.setState({count:this.state.count+1})
    }
    dec =()=> {
        this.setState({count:this.state.count-1})
    }

    render()
    {
        return(
            <div>
                <button onClick={this.in}>+</button>

                <button onClick={this.dec}>-</button>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}
export default Inc