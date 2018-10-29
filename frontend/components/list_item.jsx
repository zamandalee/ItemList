

import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  resetClassNames() {
    // iterate through all items and descriptions and set their class
    // to only "item-li" or "description-li"
    const allItems = document.getElementsByClassName('item-li');
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].className = "item-li";
    }

    const allDetails = document.getElementsByClassName("description-li");
    for (let i = 0; i < allDetails.length; i++) {
      allDetails[i].className = "description-li";
    }
  }

  handleClick(e) {
    this.resetClassNames();

    // add "clicked" to the classlist of the clicked item to change its color
    e.target.className = "item-li clicked";
    const clickedDetail = document.getElementById(e.target.textContent);
    clickedDetail.className = "description-li clicked";

    // scroll to corresponding detail box
    clickedDetail.scrollIntoView();
  }

  render() {
    return (
      <li className="item-li" onClick={ this.handleClick }>
        {this.props.item}
      </li>
    );
  }
}

export default ListItem;
