import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';

export default class Wrapper extends Component {
  state = {
    size: 'small'
  }
  setSize(newValue) {
    this.setState({
      size: `${newValue}`,
    });
  }

  renderChild() {
    // console.log('=================')
    // console.log(this.props.children)
    // console.log(React.cloneElement(this.props.children, {data: this.state}))
    // console.log('=================')
    // React.Children.map(this.props.children, child => {
    //   if (child.type === 'IntlProvider') {
    //     return React.cloneElement(child, {
    //       data: this.state
    //     })
    //   } else {
    //     return child
    //   }
    // });
    return React.cloneElement(this.props.children, {data: this.state})
  }

  render() {
    return (
      <span>
        <span style={{float: 'right'}}>
          <select onChange={e => this.setSize(e.target.value)}>
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
          </select>
        </span>
        <br/>
        <IntlProvider locale="en">
          {this.renderChild()}
        </IntlProvider>
      </span>
    );
  }
}