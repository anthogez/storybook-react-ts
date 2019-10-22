import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

const stories = storiesOf('/Components/Storybook Knobs', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// Knobs for React props
stories.add('with a button', () => (
	<div>{text('Label', 'Hello Storybook')}</div>
));

// Knobs as dynamic variables.
stories.add('as dynamic variables', () => {
	const name = text('Name', 'Moshe');
	const age = number('Age', 50);

	const content = `I am ${name} and I'm ${age} years old.`;
	return <div>{content}</div>;
});
