import { Component, h } from '@stencil/core';

@Component({
  tag: 'divider-ui',
  styleUrl: 'divider-ui.css',
  shadow: true,
})
export class DividerUi {
  render() {
    return <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />;
  }
}
