import React, { Component } from "react";
import "../css/Order.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Order extends Component {
  constructor(props) {
    super(props);
    this.onOrderChange = this.onOrderChange.bind(this);
  }

  // invoke onClick to set order
  onOrderChange(e) {
    this.props.onClick(e.target.name);
  }

  render() {
    const { order } = this.props;
    return (
      <div className="dropdown">
        {/* fontawesome icon */}
        <i className="fas fa-sort fa-2x" />
        <div className="dropdownContent">
          <button
            className={order === "default" ? "active" : ""}
            onClick={this.onOrderChange}
            name="default"
          >
            Default
          </button>
          <button
            className={order === "ascending" ? "active" : ""}
            onClick={this.onOrderChange}
            name="ascending"
          >
            Score Ascending
          </button>
          <button
            className={order === "descending" ? "active" : ""}
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

Order.propTypes = {
  order: PropTypes.string,
  onClick: PropTypes.func
};

export default connect(state => ({
  order: state.order
}))(Order);
