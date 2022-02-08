import React, { Component } from 'react';  
class Form extends React.Component {  
  constructor(props) {  
      super(props);  
      this.state = {value: '',comment:''};  
      this.handleChange = this.handleChange.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);  
  }  
  handleChange = event => {  
      this.setState({value: event.target.value});  
  }  
  handleSubmit = event => {  
      alert(`You have submitted the input successfully:  ${this.state.value}  comment: ${this.state.comment}`);  
      event.preventDefault();  
  }  

  handlecomment = event =>
  {
      this.setState({comment:event.target.value})
  }
  render() {  
      return (  
          <form onSubmit={this.handleSubmit}>  
            <h1>Controlled Form Example</h1>  
            <label>  
                Name:  
                </label>  
                <br/>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <br/> <br/>
                <textarea value={this.state.comment} onChange={this.handlecomment}></textarea>  
            <br/>
            <input type="submit" value="Submit" />  
         </form>  
      );  
  }  
}  
export default Form;  