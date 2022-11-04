/* eslint-disable */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Search = ({ getTweets }) => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    keyword: "",
  });

  useEffect(() => {
    getTweets(filters);
  }, [filters.keyword]);

  return (
    <div className="widgets_input">
      <span className="material-icons widgets_search_icon"> search </span>
      <input
        type="text"
        placeholder="Search Twitter"
        value={filters.keyword}
        onChange={(e) =>
          setFilters((prevState) => ({ ...prevState, keyword: e.target.value }))
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getTweets: (filters) => dispatch.tweets.getTweets(filters),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
