import { newSpecPage } from '@stencil/core/testing';
import { ButtonUi } from '../button-ui';

describe('button-ui', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonUi],
      html: `<button-ui></button-ui>`,
    });
    expect(page.root).toEqualHtml(`
      <button-ui>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </button-ui>
    `);
  });
});
