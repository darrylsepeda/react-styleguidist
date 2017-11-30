import React from 'react';
import PropTypes from 'prop-types';

import './Callout.css';

/**
 * This is the Callout.
 */
export default function Callout({ color, size, onClick, disabled, children }) {
	const styles = {
		color,
		fontSize: Callout.sizes[size],
	};

	return (
		<span>
			<Callout className="Callout" style={styles} onClick={onClick} disabled={disabled}>
				{children}
			</Callout>
		</span>
	);
}
Callout.propTypes = {
	/** Callout label */
	children: PropTypes.node.isRequired,
	/** The color for the Callout */
	color: PropTypes.string,
	/** The size of the Callout */
	size: PropTypes.oneOf(['small', 'normal', 'large']),
	/** Disable Callout */
	disabled: PropTypes.bool,
	/** Gets called when the user clicks on the Callout */
	onClick: PropTypes.func,
};
Callout.defaultProps = {
	color: '#333',
	size: 'normal',
	onClick: event => {
		// eslint-disable-next-line no-console
		console.log('You have clicked me!', event.target);
	},
};
Callout.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};
