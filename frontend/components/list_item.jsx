import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { clicked: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: 'clicked' });
  }

  render() {
    const className = `item-li ${this.state.clicked}`;
    return (
      <li className={ className } onClick={ this.handleClick }>
        {this.props.item}
      </li>
    );
  }
}

export default ListItem;
