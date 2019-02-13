import React from "react";

import { storiesOf } from "@storybook/react";
import { array } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import TodoList from './TodoList';

const sampleTodos = [
    {id: 1, text: 'First item'},
    {id: 2, text: 'Second item'},
    {id: 3, text: 'Third item'}
]

storiesOf("TodoList", module)
    .add("Sample", () => <TodoList todos={array('Itens', sampleTodos)} toggleTodo={action('toogled')}/>)
    .add("Empty", () => <TodoList todos={array('Itens', [])} toggleTodo={action('toogled')}/>)