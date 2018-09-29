import React from 'react'

const List = ({ todos, name }) => (
        <div>
            <h2>{name}</h2>
            <ul>
                { todos.map( item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
)

export default List

