import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'button-ui',
  styleUrl: 'button-ui.css',
  shadow: false,
})
export class ButtonUi {
  @Prop() gradient: string = 'blue-pink';
  @Event() onClick: EventEmitter<void>;

  /**
   * Handles the click event for the button.
   * Emits the `onClick` event.
   */
  handleOnClick() {
    this.onClick.emit();
  }

  private getGradientClasses() {
    const gradients = {
      'blue-pink': 'bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]',
      'green-yellow': 'bg-gradient-to-r from-[#00FF00] via-[#FFFF00] to-[#FF4500]',
      'purple-red': 'bg-gradient-to-r from-[#6A0DAD] via-[#FF00FF] to-[#FF4500]',
      'orange-teal': 'bg-gradient-to-r from-[#FFA500] via-[#40E0D0] to-[#FF4500]',
      'red-yellow': 'bg-gradient-to-r from-[#FF0000] via-[#FFFF00] to-[#FF8C00]',
      'blue-green': 'bg-gradient-to-r from-[#00BFFF] via-[#00FF7F] to-[#228B22]',
      'pink-purple': 'bg-gradient-to-r from-[#FF1493] via-[#DA70D6] to-[#8A2BE2]',
      'cyan-blue': 'bg-gradient-to-r from-[#00FFFF] via-[#1E90FF] to-[#00008B]',
      'yellow-orange': 'bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500]',
      'blue-indigo': 'bg-gradient-to-r from-[#4169E1] via-[#4B0082] to-[#8B0000]',
      'teal-green': 'bg-gradient-to-r from-[#008080] via-[#3CB371] to-[#006400]',
      'golden-pink': 'bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#FF4500]',
      'violet-indigo': 'bg-gradient-to-r from-[#EE82EE] via-[#4B0082] to-[#8B0000]',
      'magenta-pink': 'bg-gradient-to-r from-[#FF00FF] via-[#FF1493] to-[#C71585]',
      'orange-red': 'bg-gradient-to-r from-[#FF4500] via-[#FF6347] to-[#FF0000]',
      'cyan-green': 'bg-gradient-to-r from-[#00FFFF] via-[#7FFFD4] to-[#008000]',
      'silver-blue': 'bg-gradient-to-r from-[#C0C0C0] via-[#00BFFF] to-[#0000FF]',
      'maxi-color': 'bg-gradient-to-r from-[#4266B2] via-[#5B95E6] to-[#6EC323]',
    };
    return gradients[this.gradient] || gradients['blue-pink'];
  }

  render() {
    const gradientClasses = this.getGradientClasses();

    return (
      <div
        class="relative inline-flex group mt-6"
        onClick={() => this.handleOnClick()}
      >
        <div
          class={`absolute transition-all duration-1000 opacity-70 -inset-px ${gradientClasses} rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt`}
        ></div>
        <a
          title="Get started"
          class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          <slot></slot>
        </a>
      </div>
    );
  }
}
