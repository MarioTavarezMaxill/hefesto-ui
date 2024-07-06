// Component
import './skeleton-ui';

export default {
	title: 'Components/Atoms/Skeleton',
	tags: ['autodocs'],
	argTypes: {
		loading: {
			description:
				'Determines if the skeleton loader is active. When set to true, the skeleton loader is displayed, indicating content is loading.',
			control: {
				type: 'boolean',
			},
		},
		rows: {
			description:
				'Specifies the number of rows the skeleton loader will display. Useful for simulating the loading state of list or table-like structures.',
			control: {
				type: 'number',
			},
		},
		cols: {
			description:
				'Specifies the number of columns the skeleton loader will display within each row. This is helpful for simulating grid or table layouts.',
			control: {
				type: 'number',
			},
		},
		space: {
			description:
				"Defines the vertical space between each row of the skeleton loader, allowing for customization of the loader's appearance.",
			control: {
				type: 'number',
			},
		},
		height: {
			description:
				'Sets the height of each skeleton loader block. This can be used to match the height of the content being simulated.',
			control: {
				type: 'number',
			},
		},
	},
};

const Template = ({ loading, rows, cols, space, height }) =>
	`<skeleton-ui loading="${loading}" rows="${rows}" cols="${cols}" space="${space}" height="${height}"></skeleton-ui>`;

export const Default = Template.bind({});
Default.args = {
	loading: true,
	rows: 3,
	cols: 3,
	space: 3,
	height: 8,
};
