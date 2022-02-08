import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Addition(test)
{
  var sum= test.a + test.b
return(
  <h1> hey {sum} </h1>);
}

function myapp()
{
  return(<h1>hello world</h1>)
}

function Calc(props)
{
  const add=props.a+props.b;
  const sub=props.a-props.b;
  const mul=props.a*props.b;
  const divi=props.a/props.b;

  return(
    <div>
      <h1> add {add}</h1>
      <h1> sub {sub}</h1>
      <h1> mul {mul}</h1>
      <h1> divide {divi}</h1>
    </div>
  )
};

function Calc1(props)
{
   let op=props.op;
  if(op=="+")
  {
    const add=props.a+props.b;
    return(<h1> add {add}</h1>)
  }
  else if(op=="-")
  {
    const sub =props.a-props.b
    return(<h1> sub {sub}</h1>)
  }
  else if(op=="*")
  {
    const mul =props.a*props.b
    return(<h1> mul {mul}</h1>)
  }
  else if(op=="/")
  {
    const div =props.a-props.b
    return(<h1> dicide {div}</h1>)
  }
} 

class MyAp extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={a:20,b:30}
  
  }
  render()
  {
   return(
     <div>
       <h1>add {this.state.a+this.state.b}</h1>
       <h1>sub {this.state.a-this.state.b}</h1> 
       <h1>mul {this.state.a*this.state.b}</h1>
       <h1>divide {this.state.a/this.state.b}</h1>
     </div>
   )
  }

}

class Gradde extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={eng:75,hin:85,math:85,sci:95}
  }
  render()
  {
    let result = (this.state.sci+this.state.math+this.state.eng+this.state.hin)/4
    if(result>90 && result<=100)
    {
        return(<h1>A</h1>)
    }
    else if(result>80 && result<=90)
    {
      return(<h1>B</h1>)
    }
    else if(result>70 && result<=80)
    {
      return(<h1>C</h1>)
    }
    else if(result>60 && result<=70)
    {
      return(<h1>c</h1>)
    }
    else
    {
      return(<h1>failed</h1>)
  }

  }
}

function Grade(props)
{
  let result = (props.sci+props.math+props.eng+props.hindi)/4
  if(result>90 && result<=100)
  {
    return(<h1>A</h1>)
  }
  else if(result>80 && result<=90)
  {
    return(<h1>B</h1>)
  }
  else if(result>70 && result<=80)
  {
    return(<h1>C</h1>)
  }
  else if(result>60 && result<=70)
  {
    return(<h1>c</h1>)
  }
  else
  {
    return(<h1>failed</h1>)
  }
}

class Gradee extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={science:props.sci,maths:props.math,english:props.eng,hindi:props.hin}
  }
  render()
  {
    let result = (this.state.science+this.state.maths+this.state.english+this.state.hindi)/4
    if(result>90 && result<=100)
    {
        return(<h1>A</h1>)
    }
    else if(result>80 && result<=90)
    {
      return(<h1>B</h1>)
    }
    else if(result>70 && result<=80)
    {
      return(<h1>C</h1>)
    }
    else if(result>60 && result<=70)
    {
      return(<h1>c</h1>)
    }
    else
    {
      return(<h1>failed</h1>)
  }

  }
}

class Calu extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={value1:"",value2:"",value3:""}

  }

  handlechange(event)
  {
    this.state({value:event.target.value1})

  }

  handlesubmit()
  {
    alert('are you sure'+this.state.value1)
  }
  render()
  {
    return(
      <div>
      <form onSubmit={this.handlesubmit}>
        <label>value
        <input type="text" value={this.state.value1} onChange={this.handlechange}></input>
        </label>
        <input type="text" value={this.state.value2} onChange={this.handlechange}></input>
        <input type="text" value={this.state.value3} onChange={this.handlechange}></input>
      </form>
      </div>
    )
  }
}





ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
