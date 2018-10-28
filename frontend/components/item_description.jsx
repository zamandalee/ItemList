import React from 'react';

class ItemDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  formatTime(str) {
    const yr = str.slice(0, 4);
    const month = str.slice(4, 6);
    const day = str.slice(6, 8);
    const hrs = str.slice(8, 10)
    const mins = str.slice(10);

    return new Date(yr, month, day, hrs, mins);
  }

  render() {
    let { key, timelabel, destination, status, dataStats } = this.props.description;
    timelabel = this.formatTime(timelabel);

    return (
      <li className="description-li">
        <div>
          <div>{this.props.description.key}</div>
        </div>
      </li>
    );
  }
}

export default ItemDescription;
