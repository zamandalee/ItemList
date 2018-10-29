import React from 'react';

class ItemDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  // format the timestamp to be more readable
  formatTime(str) {
    const yr = str.slice(0, 4);
    const month = str.slice(4, 6);
    const day = str.slice(6, 8);
    const hrs = str.slice(8, 10);
    const mins = str.slice(10);

    return `${month}-${day}-${yr} ${hrs}:${mins}`;
  }

  render() {
    let { key, timelabel, destination, status, dataStats } = this.props.description;
    timelabel = this.formatTime(timelabel);

    // to render a circle, colored depending on the status
    let statusColor = status === "stared" ? "yellow" : "red";
    let statusClass = `status-circle ${statusColor}`;

    return (
      <li className="description-li" id={key}>
        <div className="top-details">
          <div className="key-time">
            <div className="key">{key}</div> {timelabel}
          </div>

          <div className="status">
            {status}
            <div className={statusClass}></div>
          </div>
        </div>
        <div className="bottom-details">
          {destination}, size {dataStats.dataSize}, {dataStats.numRows} rows
        </div>
      </li>
    );
  }
}

export default ItemDescription;
