import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from './';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number,selectV2 } from '@storybook/addon-knobs/react';
const stories = storiesOf('Button', module);

const label = 'Colors';
const options = {
  primary: 'primary',
  Green: 'rgb(77, 194, 172)',
  Blue: 'rgb(14,45,63)',
  gray: 'gray',
  Rainbow: ['red', 'orange', 'etc'],
  None: "none",
};
const defaultValue = 'none';
const groupId = 'color';

stories.addDecorator(withKnobs);

stories
  .add('with text', () => <Button
   onClick={action('clicked')}
   color={selectV2(label, options, defaultValue, groupId)}
   variant={boolean('fab', "fab")}
   >{text('Label', 'Hi')}</Button>)
  .add('with text primary', () => <Button color="primary" onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  stories.add('as dynamic variables', () => {
    const name = text('Name', 'Arunoda Susiripala');
    const age = number('Age', 89);
  
    const content = `I am ${name} and I'm ${age} years old.`;
    return (<div>{content}</div>);
  });