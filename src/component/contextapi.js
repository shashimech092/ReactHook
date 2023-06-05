
import React, {Component} from "react";
const myContext=React.createContext(); // createContext have Provider and Consumer

class MyFunctionprovider extends Component{
    
    constructor(){
        super()
        this.state={
            city:'London'
        }
    }
    

    render(){
        return(
            <myContext.Provider value={{status:this.state}}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}


class City extends Component{
    render(){
        return(
            <div className="city">
                <myContext.Consumer>
                    {(data)=>{
                        return(
                            <p>Hi To {data.status.city}</p>
                        )
                    }}
                </myContext.Consumer>
            </div>
        )
    }
}

class City1 extends Component{
    render(){
        return(
            <div className="city">
                <myContext.Consumer>
                    {(data)=>{
                        return(
                            <p>Hi To {data.status.city} 1</p>
                        )
                    }}
                </myContext.Consumer>
            </div>
        )
    }
}

const Country=(props)=>{
    return(
        <div className="country">
            <City/>       
            <City1/>       
        </div>
    )
}

class ContextComponent extends Component{
    render(){
        return(
            <MyFunctionprovider>
                <Country/>
            </MyFunctionprovider>
        )
    }
}

export default ContextComponent
