import { Component } from "react";

class Counter extends Component{

    render(){
            return(
    <div className="counterDiv">
    <h4>My counter: {Math.floor(Math.random()*100)}</h4>
    </div>
    )
    }
}
// function Counter(){

// }
export default Counter;