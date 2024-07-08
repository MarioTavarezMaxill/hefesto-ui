import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'badge-ui',
  styleUrl: 'badge-ui.css',
  shadow: false,
})
export class BadgeUi {
  @Prop() text: string;
  @Prop() colorScheme: 'default' | 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink' = 'red';
  @Prop() variant: 'solid' | 'subtle' | 'outline' = 'solid';
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  private getColorClasses() {
    const colors = {
      default: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
      purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    };
    return colors[this.colorScheme];
  }

  private getSizeClasses() {
    const sizes = {
      xs: 'text-xs px-2 py-0.5',
      sm: 'text-sm px-2.5 py-0.5',
      md: 'text-md px-3 py-1',
      lg: 'text-lg px-3.5 py-1.5',
      xl: 'text-xl px-4 py-2',
    };
    return sizes[this.size];
  }

  private getVariantClasses() {
    switch (this.variant) {
      case 'solid':
        return 'font-bold';
      case 'subtle':
        return 'font-medium';
      case 'outline':
        return 'border border-current';
      default:
        return 'font-medium';
    }
  }

  render() {
    const colorClasses = this.getColorClasses();
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();

    return (
      <span class={`me-2 rounded ${colorClasses} ${variantClasses} ${sizeClasses}`}>
        {this.text}
      </span>
    );
  }
}
