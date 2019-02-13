import React, { Component } from 'react';
import { Container, Row, Col } from './settings/grid'
import { Hide } from './settings/utils'
import VisibleTodoList from './organisms/VisibleTodoList'
import FilterLink from './organisms/FilterLink'
import AddTodo from './organisms/AddTodo'
import { VisibilityFilters } from './actions/index'

// Criar rotas e migrar layout para o template default
class App extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Col>
                    Header
                </Col>
            </Row>
            <Row>
                <Col xs="6">
                    <AddTodo />
                    <VisibleTodoList />
                </Col>
                <Hide at='xs' >
                    Outra Coluna
                </Hide>
            </Row>
            <Row>
                <Col span="12">
                    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
                    {', '}
                    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
                    {', '}
                    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default App;
