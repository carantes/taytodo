import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Todo from './Todo';

storiesOf("Todo", module)
    .add("Unfinished", () => <Todo text={text('Titulo', 'My unfinished todo')} onClick={action('clicked')} />)
    .add("Finished", () => <Todo text={text('Titulo', 'My completed todo')} onClick={action('clicked')} completed={boolean('Concluido', true)} />);