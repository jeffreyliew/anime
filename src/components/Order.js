import React, { Component } from "react";
import "../css/order.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Order extends Component {
  constructor(props) {
    super(props);
    this.onOrderChange = this.onOrderChange.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.state = {
      hidden: true
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick);
  }

  // invoke onClick to set order
  onOrderChange(e) {
    e.stopPropagation();
    this.props.onClick(e.target.textContent.replace(/\s/g, ""));
  }

  toggleHide(e) {
    e.stopPropagation();
    this.setState({ hidden: !this.state.hidden });
  }

  handleOutsideClick(e) {
    e.stopPropagation();
    if (
      this.dropdown === e.target ||
      e.target.className.indexOf("order-dropdown__btn") !== -1
    ) {
      return;
    }
    this.setState({ hidden: true });
  }

  render() {
    const { order } = this.props;
    return (
      <div className="order-dropdown" onClick={this.toggleHide}>
        <i
          className="fas fa-sort fa-2x"
          ref={dropdown => (this.dropdown = dropdown)}
        />
        <div
          className="order-dropdown__content"
          style={this.state.hidden ? {} : { display: "block" }}
        >
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
