import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'skeleton-ui',
	styleUrl: 'skeleton-ui.css',
	shadow: false,
})
export class SkeletonUi {
	@Prop() loading: boolean = false;
	@Prop() rows: number = 1;
	@Prop() cols: number = 1;
	@Prop() height: number = 8;
	@Prop() space: number = 7;

	render() {
		console.log(`space-y-${this.space}`);
		if (!this.loading) {
			return <slot />;
		}

		const skeletonItems = [];

		for (let i = 0; i < this.rows; i++) {
			skeletonItems.push(
				<div class='flex space-x-3'>
					{Array.from({ length: this.cols }).map(() => (
						<div
							class={`w-full h-${this.height} bg-gray-200 rounded-full dark:bg-neutral-700`}></div>
					))}
				</div>
			);
		}

		return (
			<div class={`mt-5 space-y-${this.space} animate-pulse`}>
				{skeletonItems}
			</div>
		);
	}
}
