import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'indicator-ui',
  styleUrl: 'indicator-ui.css',
  shadow: false,
})
export class IndicatorUi {
  @Prop() text: string;
  @Prop() color: 'blue' | 'green' | 'red' | 'yellow' | 'indigo' | 'purple' | 'pink' = 'blue';
  @Prop() background: boolean = false;

  private getColorClass() {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      red: 'bg-red-500',
      yellow: 'bg-yellow-500',
      indigo: 'bg-indigo-500',
      purple: 'bg-purple-500',
      pink: 'bg-pink-500',
    };
    return colors[this.color];
  }

  private getBackgroundClass() {
    const backgrounds = {
      blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
      purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    };
    return backgrounds[this.color];
  }

  render() {
    const colorClass = this.getColorClass();
    const backgroundClass = this.background ? this.getBackgroundClass() : '';

    return (
      <span class={`inline-flex items-center ${backgroundClass} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
        <span class={`w-2.5 h-2.5 rounded-full me-1 ${colorClass}`}></span>
        {this.text}
      </span>
    );
  }
}
