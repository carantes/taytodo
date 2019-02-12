import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from '@storybook/addon-knobs';
import Link from './Link';

storiesOf("Link", module)
    .add("Enabled", () => <Link active={boolean('Desabilitado', false)}>{text('Descrição', 'Link A')}</Link>)
    .add("Disabled", () => <Link active={boolean('Desabilitado', true)}>{text('Descrição', 'Link B')}</Link>);