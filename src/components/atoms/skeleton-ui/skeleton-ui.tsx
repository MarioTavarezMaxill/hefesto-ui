import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'skeleton-ui',
	styleUrl: 'skeleton-ui.css',
	shadow: false,
})
export class SkeletonUi {
	@Prop() rows: number = 1;
	@Prop() cols: number = 1;
	@Prop() height: number = 7;
	@Prop() space: number = 10;

	render() {
		const skeletonItems = [];

		for (let i = 0; i < this.rows; i++) {
			skeletonItems.push(
				<div class='flex space-x-3' style={{ marginBottom: `${this.space}px` }}>
					{Array.from({ length: this.cols }).map(() => (
						<div
							class={`w-full bg-gray-200 rounded-lg dark:bg-neutral-700`}
							style={{ height: `${this.height}px` }}></div>
					))}
				</div>
			);
		}

		return <div class='mt-5 animate-pulse'>{skeletonItems}</div>;
	}
}
