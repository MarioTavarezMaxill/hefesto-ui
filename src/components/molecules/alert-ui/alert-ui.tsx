import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'alert-ui',
	styleUrl: 'alert-ui.css',
	shadow: false,
})
export class AlertUi {
	@Prop() addRole: boolean = false;
	@Prop() colorScheme:
		| 'whiteAlpha'
		| 'blackAlpha'
		| 'gray'
		| 'red'
		| 'orange'
		| 'yellow'
		| 'green'
		| 'teal'
		| 'blue'
		| 'cyan'
		| 'purple'
		| 'pink' = 'orange';
	@Prop() size: 'sm' | 'md' | 'lg' = 'sm';
	@Prop() status: 'info' | 'warning' | 'success' | 'error' | 'loading' = 'info';
	@Prop() variant: 'subtle' | 'left-accent' | 'top-accent' | 'solid' = 'subtle';

	private getColorClasses() {
		const colors = {
			whiteAlpha: 'text-white-800 bg-gray-200',
			blackAlpha: 'text-black-800 bg-gray-900',
			gray: 'text-gray-800 bg-gray-100',
			red: 'text-red-800 bg-red-100',
			orange: 'text-orange-800 bg-orange-100',
			yellow: 'text-yellow-800 bg-yellow-100',
			green: 'text-green-800 bg-green-100',
			teal: 'text-teal-800 bg-teal-100',
			blue: 'text-blue-800 bg-blue-100',
			cyan: 'text-cyan-800 bg-cyan-100',
			purple: 'text-purple-800 bg-purple-100',
			pink: 'text-pink-800 bg-pink-100',
		};
		return colors[this.colorScheme];
	}

	private getStatusMessage() {
		const messages = {
			info: 'Info alert!',
			warning: 'Warning alert!',
			success: 'Success alert!',
			error: 'Danger alert!',
			loading: 'Loading alert!',
		};
		return messages[this.status];
	}

	private getVariantClasses() {
		switch (this.variant) {
			case 'left-accent':
				return 'border-l-4';
			case 'top-accent':
				return 'border-t-4';
			case 'solid':
				return 'font-bold';
			case 'subtle':
			default:
				return 'font-medium';
		}
	}

	private getSizeClasses() {
		const sizes = {
			sm: 'text-sm p-4',
			md: 'text-base p-6',
			lg: 'text-lg p-8',
		};
		return sizes[this.size];
	}

	render() {
		const colorClasses = this.getColorClasses();
		const variantClasses = this.getVariantClasses();
		const sizeClasses = this.getSizeClasses();
		const roleAttribute = this.addRole ? { role: 'alert' } : {};

		return (
			<div
				class={`mb-4 rounded-lg ${colorClasses} ${variantClasses} ${sizeClasses}`}
				{...roleAttribute}>
				<span class='font-medium'>{this.getStatusMessage()}</span> Change a few
				things up and try submitting again.
			</div>
		);
	}
}
