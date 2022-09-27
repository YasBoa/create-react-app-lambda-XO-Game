import React, { Component } from "react"
import "./grid.css"
export class Grid extends Component{
    constructor (){
        super()
        this.state= { 
            data: [
                [undefined,undefined,undefined],
                [undefined,"x",undefined],
                [undefined,undefined,"o"],
            ],

            turn: false
            
        }
    }
    render(){
        const cells = []
        const { data } = this.state
        const cellClick= (event)=> {
            const row=parseInt(event.currentTarget.getAttribute("row"))
            const column=parseInt(event.currentTarget.getAttribute("column"))
            data[row][column]= ["x"]
            this.setState({data:data, turn:true})
        }
        for (let r=0; r<data.length; r++){
            for (let c=0; c<3; c++){
                cells.push(
                    <div 
                        key={r+""+c} 
                        onClick={cellClick} 
                        row={r}
                        column={c}
                        >{data[r][c]}
                    </div>
                )
            }
        }
        return (<div className="grid"> {cells} </div>)
    }
}

