import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import { Input, Button, Wrapper } from './AddTodo.styles'

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <Wrapper>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <Input
                    ref={node => {
                        input = node
                    }}
                />
                <Button type="submit">Add Todo</Button>
            </form>
        </Wrapper>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo