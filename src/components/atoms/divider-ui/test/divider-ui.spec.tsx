import { newSpecPage } from '@stencil/core/testing';
import { DividerUi } from '../divider-ui';

describe('divider-ui', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DividerUi],
      html: `<divider-ui></divider-ui>`,
    });
    expect(page.root).toEqualHtml(`
      <divider-ui>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </divider-ui>
    `);
  });
});
