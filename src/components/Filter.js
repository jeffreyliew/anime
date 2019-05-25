import React from "react";
import "../css/Filter.css";
import PropTypes from "prop-types";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
    this.filterChange = this.filterChange.bind(this);
  }

  filterChange(e) {
    const evt = e.target.value;
    this.setState({ filter: evt });
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.props.onFilterChange(evt);
    }, 180);
  }

  render() {
    return (
      <input
        className="filter"
        type="text"
        name="search"
        value={this.state.filter}
        onChange={this.filterChange}
        placeholder="Search"
      />
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func
};
