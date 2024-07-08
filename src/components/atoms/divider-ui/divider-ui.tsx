import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'divider-ui',
  styleUrl: 'divider-ui.css',
  shadow: false,
})
export class DividerUi {
  @Prop() size: string = '3';
  @Prop() variant: 'solid' | 'dashed' = 'solid';


  render() {
    const dividerClass = `${this.variant === 'dashed' ? 'border-dashed' : 'border-solid'}`;

    return (
      <div
        class={`flex items-center text-sm leading-5 ${dividerClass}`}
        style={{
          height: `${this.size}px`,
          borderTopWidth: `${this.size}px`,
        }}
      >
        <div class={`w-full border-t rounded-lg bg-gray-300`}></div>
      </div>
    );
  }
}
