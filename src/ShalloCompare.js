import React, { Component } from 'react'

export class ShalloCompare extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:{
                 name:'hai'
             }
        }
    }
    
    render() {
        const emoji=this.state.user
        emoji.name='hoi'
        console.log(emoji===this.state.user)
        return (
            <div>
                
            </div>
        )
    }
}

export default ShalloCompare
