/* eslint-disable */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Search from "../search";
import SkeletonTrend from "../skeletons/trend";

function Trending({ trends, getTrends, loading, tweets }) {
  useEffect(() => {
    getTrends();
  }, []);

  const SingleTrend = ({ title }) => (
    <div className="single_trend">
      <span className="single_trend_header">
        <span className="single_trend_location">Trending in Kenya</span>
        <span className="icon" href="#" data-bs-toggle="dropdown">
          <i className="bx bx-dots-horizontal-rounded"></i>
        </span>
      </span>
      <span className="single_trend_title">{title}</span>
      <br />
      <span className="single_trend_location">13.9k Tweets</span>
    </div>
  );

  return (
    <div className="widgets">
      <Search />
      <div className="widgets_widget_container">
        <h2>Trends for you</h2>
        {!tweets ? (
          <SkeletonTrend />
        ) : (
          <React.Fragment>
            {trends &&
              trends
                .slice(0, 10)
                .map((item, index) => <SingleTrend key={index} title={item} />)}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const loading = state.loading.models.tweets;
  const { trends, tweets } = state.tweets;
  return { loading, trends, tweets };
};

const mapDispatchToProps = (dispatch) => ({
  getTrends: () => dispatch.tweets.getTrends(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
