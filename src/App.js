import {Component} from "react";
import './App.css';
import Showalert from './Components/alert';
import Counter from './Components/counter';

class App extends Component{

    render () {
            return(
    <div className='container'>
        <h1>Hello</h1>
        <div className="row">
            <div className="col-sm-1 col-lg-5">col5</div>
            <div className="col-sm-11 col-lg-7">col7</div>
        </div>
        <Counter/>
        <Showalert/>
    </div>
    )
    }
}
// function App(){


// }

export default App;
