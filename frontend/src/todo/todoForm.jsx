import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

function TodoForm(props) {
    const keyHandler = e => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input
                    onChange={props.handleChange}
                    value={props.description}
                    placeholder="Adicione uma tarefa"
                    type="text"
                    id="description"
                    onKeyUp={keyHandler}
                    className="form-control" />
            </Grid>
            <Grid cols="12 3 2">
                <IconButton
                    onClick={props.handleAdd}
                    style="primary"
                    icon="plus" />
                <IconButton
                    onClick={props.handleSearch}
                    style="info"
                    icon="search" />
                <IconButton
                    onClick={props.handleClear}
                    style="default"
                    icon="close" />
            </Grid>
        </div>
    )
}

export default TodoForm
