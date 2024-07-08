import { newSpecPage } from '@stencil/core/testing';
import { BadgeUi } from '../badge-ui';

describe('badge-ui', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BadgeUi],
      html: `<badge-ui></badge-ui>`,
    });
    expect(page.root).toEqualHtml(`
      <badge-ui>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </badge-ui>
    `);
  });
});
