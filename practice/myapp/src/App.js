import logo from './logo.svg';
import './App.css';
import Hello from "./Component/Hello";
import Greet from './Component/Hello';
import Number from './Component/Hello';
import Disp from './Component/props';
import Message from './Component/classProps';
import Inc from './Component/IncButton';
import Lifecycle from './Component/Life';
import Bind from './Component/bind';
import Form from './Component/form';

function App() {
  return (
    /*<div className='App'> 
      <Disp name="jatin" games="table tennis"> <h1>nice</h1></Disp>

    </div>*/

    /*<div>
      <Message name="jatin"></Message>
    </div>*/

    /*<div>
      <center><Inc></Inc></center>
    </div>*/

    /*<div>
      <Lifecycle/>
    </div>*/

    //<Bind></Bind>
    <Form/>
    
  );
}

export default App;
