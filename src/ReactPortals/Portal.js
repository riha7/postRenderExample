import React from 'react'
 import ReactDOM from 'react-dom';
const Portal = () => {
    return (
        <div>
            <h1 style={{color:'green'}}>hari</h1>
            {ReactDOM.createPortal(<h1>sub-portal...</h1>,document.getElementById('sub-portal'))}
        </div>
    )
}

export default Portal
