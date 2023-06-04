import React from "react";

const Display=(props)=>{

    let renderData=({myData})=>{
        if(myData){
            return myData.map((data)=>{
                return (
                    <div>
                        <p>{data.restaurant_name} | {data.address}</p>
                    </div>
                )
            })
        }

    }

    return(
        <div>
            <center>
                <h2>Restaurant List</h2>
            {renderData(props)}
            </center>
        
        </div>
    )
}

export default Display