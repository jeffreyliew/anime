import React from "react";
import "../css/Sorting.css";
import PropTypes from "prop-types";

export default class Sorting extends React.Component {
  constructor(props) {
    super(props);
    this.onOrderChange = this.onOrderChange.bind(this);
  }

  // invoke onClick to set orderState
  onOrderChange(e) {
    this.props.onClick(e.target.name);
  }

  render() {
    return (
      <div className="dropdown">
        {/* fontawesome icon */}
        <i className="fas fa-sort fa-2x" />
        <div className="dropdownContent">
          <button
            className={this.props.orderState === "default" ? "active" : ""}
            onClick={this.onOrderChange}
            name="default"
          >
            Default
          </button>
          <button
            className={this.props.orderState === "ascending" ? "active" : ""}
            onClick={this.onOrderChange}
            name="ascending"
          >
            Score Ascending
          </button>
          <button
            className={this.props.orderState === "descending" ? "active" : ""}
            onClick={this.onOrderChange}
            name="descending"
          >
            Score Descending
          </button>
        </div>
      </div>
    );
  }
}

Sorting.propTypes = {
  orderState: PropTypes.string,
  onClick: PropTypes.func
};
