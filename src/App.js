import './App.css';
import Showalert from './Components/alert';
import Counter from './Components/counter';
import anotherCounter from './Components/anotherCounter';

function App(){
    return(
    <div className='container'>
        <h1>Hello</h1>
        <div className="row">
            <div className="col-sm-1 col-lg-5">col5</div>
            <div className="col-sm-11 col-lg-7">col7</div>
            <br/>
        </div>
        <Counter/>
        <br/>
        <br/>
        <Showalert/>
        <anotherCounter/>
    </div>
    )
}

export default App;