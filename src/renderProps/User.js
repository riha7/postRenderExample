import React, { Component } from 'react'

export class User extends Component {
    render() {
        return (
            <div>
               <p>{this.props.render(true)}</p> 
            </div>
        )
    }
}

export default User
