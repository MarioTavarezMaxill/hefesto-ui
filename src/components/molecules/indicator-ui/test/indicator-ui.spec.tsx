import { newSpecPage } from '@stencil/core/testing';
import { IndicatorUi } from '../indicator-ui';

describe('indicator-ui', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IndicatorUi],
      html: `<indicator-ui></indicator-ui>`,
    });
    expect(page.root).toEqualHtml(`
      <indicator-ui>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </indicator-ui>
    `);
  });
});
