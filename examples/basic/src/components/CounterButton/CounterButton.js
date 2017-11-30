import React, { Component } from 'react';

/**
 * Button that counts how many times it was pressed and exposes a `@public` method to reset itself.
 */
export default class CounterButton extends Component {
	state = {
		value: 0,
		size: 'small',
	}

	constructor() {
		super();
		console.log(this.props)
	}

	/**
	 * Sets the counter to a particular value.
	 *
	 * @public
	 * @version 1.0.5
	 * @param {Number} newValue New value for the counter
	 * @returns {string} Test
	 */

	setSize(newValue) {
		this.setState({
			size: `button ${newValue}`,
		});
	}

	set(newValue) {
		this.setState({
			value: parseInt(newValue, 10),
		});
	}

	/**
	 * Increments the counter. This method is not marked @public and is not visible in the styleguide.
	 */
	increment() {
		this.setState({
			value: this.state.value + 1,
		});
	}

	render() {
		// console.log('----')
		// console.log(this.state)
		// console.log(this.props)
		// console.log('----')
		return (
			<span>
				<button className={this.state.size} onClick={this.increment.bind(this)}>
					{this.state.value}
				</button>
				<select onChange={e => this.setSize(e.target.value)}>
					<option value="small">Small</option>
					<option value="normal">Normal</option>
					<option value="large">Large</option>
				</select>
				{/* <button onClick={() => this.setSize('small')}>Small</button>
				<button onClick={() => this.setSize('normal')}>Medium</button>
				<button onClick={() => this.setSize('large')}>Large</button> */}
			</span>
		);
	}
}

