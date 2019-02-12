import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from '@storybook/addon-knobs';
import Todo from './Todo';

storiesOf("Todo", module)
    .add("Unfinished", () => <Todo text={text('Titulo', 'My unfinished todo')} />)
    .add("Finished", () => <Todo text={text('Titulo', 'My completed todo')} completed={boolean('Concluido', true)} />);