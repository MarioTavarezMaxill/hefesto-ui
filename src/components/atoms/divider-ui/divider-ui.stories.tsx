import { html } from 'lit-html';
import './divider-ui';

export default {
  title: 'Components/Atoms/Divider',
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'The size of the Divider.',
      control: { type: 'text' },
    },
    variant: {
      description: 'The variant of the Divider. Options are "solid" and "dashed".',
      options: ['solid', 'dashed'],
      control: { type: 'radio' },
    },
  },
};

const Template = ({ size, variant }) => html`
  <divider-ui
    size="${size}"
    variant="${variant}"
  ></divider-ui>
`;

export const Default = Template.bind({});
Default.args = {
  size: '4',
  variant: 'solid',
};
