import React from "react";
import "../css/Filter.css";
import PropTypes from "prop-types";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.filterChange = this.filterChange.bind(this);
  }

  filterChange(e) {
    this.props.onFilterChange(e.target.value);
  }

  render() {
    return (
      <input
        className="filter"
        type="text"
        name="search"
        value={this.props.filter}
        onChange={this.filterChange}
        placeholder="Search"
      />
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func
};
