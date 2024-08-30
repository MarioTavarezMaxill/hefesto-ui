import { html } from 'lit-html';
import './button-ui';

export default {
  title: 'Components/Atoms/Button',
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'The text displayed inside the button.',
      control: { type: 'text' },
    },
    gradient: {
      description: 'The gradient style for the button background.',
      options: [
        'blue-pink', 'green-yellow', 'purple-red', 'orange-teal',
        'red-yellow', 'blue-green', 'pink-purple', 'cyan-blue',
        'yellow-orange', 'blue-indigo', 'teal-green', 'golden-pink',
        'violet-indigo', 'magenta-pink', 'orange-red', 'cyan-green',
        'silver-blue', 'maxi-color',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = ({ text, gradient }) => html`
  <button-ui gradient="${gradient}" @onClick=${() => alert('Button clicked!')}>
    ${text}
  </button-ui>
`;

export const BluePink = Template.bind({});
BluePink.args = {
  text: 'Blue Pink',
  gradient: 'blue-pink',
};

export const GreenYellow = Template.bind({});
GreenYellow.args = {
  text: 'Green Yellow',
  gradient: 'green-yellow',
};

export const PurpleRed = Template.bind({});
PurpleRed.args = {
  text: 'Purple Red',
  gradient: 'purple-red',
};

export const OrangeTeal = Template.bind({});
OrangeTeal.args = {
  text: 'Orange Teal',
  gradient: 'orange-teal',
};

export const RedYellow = Template.bind({});
RedYellow.args = {
  text: 'Red Yellow',
  gradient: 'red-yellow',
};

export const BlueGreen = Template.bind({});
BlueGreen.args = {
  text: 'Blue Green',
  gradient: 'blue-green',
};

export const PinkPurple = Template.bind({});
PinkPurple.args = {
  text: 'Pink Purple',
  gradient: 'pink-purple',
};

export const CyanBlue = Template.bind({});
CyanBlue.args = {
  text: 'Cyan Blue',
  gradient: 'cyan-blue',
};

export const YellowOrange = Template.bind({});
YellowOrange.args = {
  text: 'Yellow Orange',
  gradient: 'yellow-orange',
};

export const BlueIndigo = Template.bind({});
BlueIndigo.args = {
  text: 'Blue Indigo',
  gradient: 'blue-indigo',
};

export const TealGreen = Template.bind({});
TealGreen.args = {
  text: 'Teal Green',
  gradient: 'teal-green',
};

export const GoldenPink = Template.bind({});
GoldenPink.args = {
  text: 'Golden Pink',
  gradient: 'golden-pink',
};

export const VioletIndigo = Template.bind({});
VioletIndigo.args = {
  text: 'Violet Indigo',
  gradient: 'violet-indigo',
};

export const MagentaPink = Template.bind({});
MagentaPink.args = {
  text: 'Magenta Pink',
  gradient: 'magenta-pink',
};

export const OrangeRed = Template.bind({});
OrangeRed.args = {
  text: 'Orange Red',
  gradient: 'orange-red',
};

export const CyanGreen = Template.bind({});
CyanGreen.args = {
  text: 'Cyan Green',
  gradient: 'cyan-green',
};

export const SilverBlue = Template.bind({});
SilverBlue.args = {
  text: 'Silver Blue',
  gradient: 'silver-blue',
};

export const MaxiColor = Template.bind({});
MaxiColor.args = {
  text: 'Maxi Color',
  gradient: 'maxi-color',
};

export const BlueGreen2 = Template.bind({});
BlueGreen2.args = {
  text: 'Blue Green 2',
  gradient: 'blue-green-2',
};

export const AstroStyle = Template.bind({});
AstroStyle.args = {
  text: 'Astro Style',
  gradient: 'astro-style',
};

export const AngularStyle = Template.bind({});
AngularStyle.args = {
  text: 'Angular Style',
  gradient: 'Angular-style',
};

export const ReactStyle = Template.bind({});
ReactStyle.args = {
  text: 'React Style',
  gradient: 'react-style',
};
