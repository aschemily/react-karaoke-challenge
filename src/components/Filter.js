import React, { Component } from 'react';

class Filter extends Component {
  render() {
    //console.log('filter props',this.props)
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input onChange={this.props.filterChange} id="title-filter" type="text" value={this.props.filterTitle} />
      </div>
    );
  }
}

export default Filter;
