import React, { Component } from "react";
import "../css/order.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Order extends Component {
  constructor(props) {
    super(props);
    this.onOrderChange = this.onOrderChange.bind(this);
  }

  // invoke onClick to set order
  onOrderChange(e) {
    this.props.onClick(e.target.textContent.replace(/\s/g, ""));
  }

  render() {
    const { order } = this.props;
    return (
      <div className="order-dropdown">
        <i className="fas fa-sort fa-2x" />
        <div className="order-dropdown__content">
          <div
            className={`order-dropdown__btn ${
              order === "Default" ? "active" : ""
            }`}
            onClick={this.onOrderChange}
          >
            Default
          </div>
          <div
            className={`order-dropdown__btn ${
              order === "ScoreAscending" ? "active" : ""
            }`}
            onClick={this.onOrderChange}
          >
            Score Ascending
          </div>
          <div
            className={`order-dropdown__btn ${
              order === "ScoreDescending" ? "active" : ""
            }`}
            onClick={this.onOrderChange}
          >
            Score Descending
          </div>
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
