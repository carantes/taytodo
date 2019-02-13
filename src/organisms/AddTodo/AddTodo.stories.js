import React from "react";
import { Provider } from 'react-redux'
import store from '../../store'
import { storiesOf } from "@storybook/react";
import AddTodo from './AddTodo';

storiesOf("AddTodo", module)
    .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
    .add("Default", () => <AddTodo />);