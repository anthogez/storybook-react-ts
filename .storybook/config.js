import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';

import 'antd/dist/antd.css';

addParameters({
	docs: {
		container: DocsContainer,
		page: DocsPage
	}
});

// 'Accessibility Addon'
addDecorator(withA11y);

function loadStories() {
	const req = require.context('../src', true, /\.stories\.(tsx|mdx)$/);
	req.keys().forEach(req);
}

configure(loadStories, module);
