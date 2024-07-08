import { newSpecPage } from '@stencil/core/testing';
import { SkeletonUi } from '../skeleton-ui';

describe('skeleton-ui', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SkeletonUi],
      html: `<skeleton-ui></skeleton-ui>`,
    });
    expect(page.root).toEqualHtml(`
      <skeleton-ui>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </skeleton-ui>
    `);
  });
});
