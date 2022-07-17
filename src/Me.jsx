import React,{ Component } from "react";


export default class Me extends Component{
    constructor(props){
        super();
        this.state={
            counter:0,

        }
    }
    add =()=>{
     this.setState({counter:this.state.counter+1})
    }
    
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.profession}</p>
                <img src={this.props.src}/>
                <p>{this.state.counter}</p>
                <button onClick={()=>this.add()}></button>
            </div>
        )
    }
}

