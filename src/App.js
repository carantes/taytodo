import React, { Component } from 'react';
import VisibleTodoList from './organisms/VisibleTodoList'
import FilterLink from './organisms/FilterLink'
import AddTodo from './organisms/AddTodo'
import { VisibilityFilters } from './actions/index'

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <p>
          Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
          {', '}
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
          {', '}
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
        </p>
      </div>
    );
  }
}

export default App;
