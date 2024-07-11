import { html } from 'lit-html';
import './alert-ui';

export default {
	title: 'Components/Molecules/Alert',
	tags: ['autodocs'],
	argTypes: {
		addRole: {
			description: 'Whether to add the "role" attribute or not.',
			control: { type: 'boolean' },
		},
		colorScheme: {
			description: 'The visual color appearance of the component.',
			options: [
				'whiteAlpha',
				'blackAlpha',
				'gray',
				'red',
				'orange',
				'yellow',
				'green',
				'teal',
				'blue',
				'cyan',
				'purple',
				'pink',
			],
			control: { type: 'select' },
		},
		size: {
			description: 'The size of the Alert.',
			options: ['sm', 'md', 'lg'],
			control: { type: 'select' },
		},
		status: {
			description: 'The status of the alert.',
			options: ['info', 'warning', 'success', 'error', 'loading'],
			control: { type: 'select' },
		},
		variant: {
			description: 'The variant of the Alert.',
			options: ['subtle', 'left-accent', 'top-accent', 'solid'],
			control: { type: 'radio' },
		},
		fullWidth: {
			description: 'Whether the alert should occupy the full width.',
			control: { type: 'boolean' },
		},
	},
};

const Template = ({
	addRole,
	colorScheme,
	size,
	status,
	variant,
	fullWidth,
}) => html`
	<alert-ui
		addRole="${addRole}"
		colorScheme="${colorScheme}"
		size="${size}"
		status="${status}"
		variant="${variant}"
		fullWidth="${fullWidth}"></alert-ui>
`;

export const Info = Template.bind({});
Info.args = {
	addRole: false,
	colorScheme: 'blue',
	size: 'sm',
	status: 'info',
	variant: 'subtle',
	fullWidth: false,
};

export const Danger = Template.bind({});
Danger.args = {
	addRole: true,
	colorScheme: 'red',
	size: 'sm',
	status: 'error',
	variant: 'solid',
	fullWidth: false,
};

export const Success = Template.bind({});
Success.args = {
	addRole: true,
	colorScheme: 'green',
	size: 'sm',
	status: 'success',
	variant: 'subtle',
	fullWidth: false,
};

export const Warning = Template.bind({});
Warning.args = {
	addRole: true,
	colorScheme: 'yellow',
	size: 'sm',
	status: 'warning',
	variant: 'subtle',
	fullWidth: false,
};

export const Dark = Template.bind({});
Dark.args = {
	addRole: true,
	colorScheme: 'gray',
	size: 'sm',
	status: 'info',
	variant: 'subtle',
	fullWidth: false,
};

export const LargeInfo = Template.bind({});
LargeInfo.args = {
	addRole: true,
	colorScheme: 'blue',
	size: 'lg',
	status: 'info',
	variant: 'subtle',
	fullWidth: false,
};

export const FullWidthInfo = Template.bind({});
FullWidthInfo.args = {
	addRole: true,
	colorScheme: 'blue',
	size: 'md',
	status: 'info',
	variant: 'subtle',
	fullWidth: true,
};
