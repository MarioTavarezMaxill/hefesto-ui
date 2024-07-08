import { html } from 'lit-html';
import './badge-ui';

export default {
	title: 'Components/Atoms/Badge',
	tags: ['autodocs'],
	argTypes: {
		text: {
			description: 'The text displayed inside the Badge.',
			control: { type: 'text' },
		},
		colorScheme: {
			description: 'The color scheme of the Badge.',
			options: [
				'default',
				'dark',
				'red',
				'green',
				'yellow',
				'indigo',
				'purple',
				'pink',
			],
			control: { type: 'select' },
		},
		variant: {
			description:
				'The variant of the Badge. Options are "solid", "subtle", and "outline".',
			options: ['solid', 'subtle', 'outline'],
			control: { type: 'radio' },
		},
		size: {
			description:
				'The size of the Badge. Options are "xs", "sm", "md", "lg", and "xl".',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			control: { type: 'select' },
		},
	},
};

const Template = ({ text, colorScheme, variant, size }) => html`
	<badge-ui
		text="${text}"
		colorScheme="${colorScheme}"
		variant="${variant}"
		size="${size}"></badge-ui>
`;

export const Default = Template.bind({});
Default.args = {
	text: 'Default',
	colorScheme: 'default',
	variant: 'subtle',
	size: 'md',
};

export const Dark = Template.bind({});
Dark.args = {
	text: 'Dark',
	colorScheme: 'dark',
	variant: 'solid',
	size: 'md',
};

export const Red = Template.bind({});
Red.args = {
	text: 'Red',
	colorScheme: 'red',
	variant: 'outline',
	size: 'md',
};

export const Green = Template.bind({});
Green.args = {
	text: 'Green',
	colorScheme: 'green',
	variant: 'solid',
	size: 'md',
};

export const Yellow = Template.bind({});
Yellow.args = {
	text: 'Yellow',
	colorScheme: 'yellow',
	variant: 'subtle',
	size: 'md',
};

export const Indigo = Template.bind({});
Indigo.args = {
	text: 'Indigo',
	colorScheme: 'indigo',
	variant: 'outline',
	size: 'md',
};

export const Purple = Template.bind({});
Purple.args = {
	text: 'Purple',
	colorScheme: 'purple',
	variant: 'solid',
	size: 'md',
};

export const Pink = Template.bind({});
Pink.args = {
	text: 'Pink',
	colorScheme: 'pink',
	variant: 'subtle',
	size: 'md',
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
	text: 'XS',
	colorScheme: 'default',
	variant: 'subtle',
	size: 'xs',
};

export const Small = Template.bind({});
Small.args = {
	text: 'Small',
	colorScheme: 'default',
	variant: 'subtle',
	size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
	text: 'Large',
	colorScheme: 'default',
	variant: 'subtle',
	size: 'lg',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
	text: 'XL',
	colorScheme: 'default',
	variant: 'subtle',
	size: 'xl',
};
