import React from 'react'

class Form extends React.Component {
    state = { name: ''}

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handledis = (e) => {
        this.setState({name: e.target.value })
    }
    render() {
        const { name } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                 value={name}
                 onChange={this.handledis}
                 required
                 placeholder="Add Mission"
                 />

            </form>
        )
    }
}

export default Form