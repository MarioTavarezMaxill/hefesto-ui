import { html } from 'lit-html';
import './indicator-ui';

export default {
  title: 'Components/Atoms/Indicator',
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'The text displayed next to the indicator.',
      control: { type: 'text' },
    },
    color: {
      description: 'The color of the indicator.',
      options: [
        'blue',
        'green',
        'red',
        'yellow',
        'indigo',
        'purple',
        'pink',
      ],
      control: { type: 'select' },
    },
    background: {
      description: 'Whether the indicator has a background or not.',
      control: { type: 'boolean' },
    },
  },
};

const Template = ({ text, color, background }) => html`
  <indicator-ui
    text="${text}"
    color="${color}"
    background="${background}"></indicator-ui>
`;

export const Blue = Template.bind({});
Blue.args = {
  text: 'Available',
  color: 'blue',
  background: false,
};

export const Green = Template.bind({});
Green.args = {
  text: 'Available',
  color: 'green',
  background: true,
};

export const Red = Template.bind({});
Red.args = {
  text: 'Unavailable',
  color: 'red',
  background: true,
};

export const Yellow = Template.bind({});
Yellow.args = {
  text: 'In Progress',
  color: 'yellow',
  background: true,
};

export const Indigo = Template.bind({});
Indigo.args = {
  text: 'Review',
  color: 'indigo',
  background: true,
};

export const Purple = Template.bind({});
Purple.args = {
  text: 'Completed',
  color: 'purple',
  background: true,
};

export const Pink = Template.bind({});
Pink.args = {
  text: 'Pending',
  color: 'pink',
  background: true,
};
