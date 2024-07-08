import { newSpecPage } from '@stencil/core/testing';
import { AlertUi } from '../alert-ui';

describe('alert-ui', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AlertUi],
      html: `<alert-ui></alert-ui>`,
    });
    expect(page.root).toEqualHtml(`
      <alert-ui>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </alert-ui>
    `);
  });
});
