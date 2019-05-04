import React from "react";
import "../css/Sorting.css";
import PropTypes from "prop-types";

export default class Sorting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e.target.name);
  }

  render() {
    return (
      <div className="dropdown">
        <i className="fas fa-bars fa-2x" />
        <div className="dropdownContent">
          <button
            className={this.props.orderState === "default" ? "active" : ""}
            onClick={this.handleClick}
            name="default"
          >
            Default
          </button>
          <button
            className={this.props.orderState === "ascending" ? "active" : ""}
            onClick={this.handleClick}
            name="ascending"
          >
            Score Ascending
          </button>
          <button
            className={this.props.orderState === "descending" ? "active" : ""}
            onClick={this.handleClick}
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
