import React from 'react'

const WithoutJSX = () => {
    return (
        React.createElement('div',{id:'div'},React.createElement('h1',{},'converting Babel'))
    )
}

export default WithoutJSX
