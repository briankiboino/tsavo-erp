import React from "react";
import { connect } from "react-redux";
import { Markup } from 'interweave';
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const Tweet = ({
  likes,
  retweets,
  time_parsed,
  username,
  tweet_id,
  likeTweet,
  html,
  avatar,
  name,
  is_verified
}) => {
  return (
    <div className="post">
      <div className="post_avatar">
        <img
          src={avatar}
          alt="user"
        />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_header_text">
            <h3>
             <b>{name}</b>
              <span className="post_header_special">
               {is_verified ?   <span className="material-icons post_badge"> verified </span> : <></>}
                @{username} . <ReactTimeAgo date={new Date(time_parsed)} locale="en-US"/>
              </span>
            </h3>
          </div>
          <div className="post_header_description">
            <span><Markup content={html}/></span>
          </div>
        </div>
        {/* {photos !== "" ? <img src={photos} alt="post" /> : <></>} */}
        <div className="post_footer">
          <span className="item" title="Comments">
            <i className="bx bx-message-rounded"></i>
          </span>
          <span className="item" title="Retweets">
            {" "}
            <i className="bx bx-sync"></i> <span className="value">{retweets}</span>
          </span>
          <span className="item" title="Likes" onClick={() => likeTweet(tweet_id)}>
            {" "}
            <i className="bx bx-heart"></i> <span className="value">{likes}</span>
          </span>
          <span className="item" title="Upload">
            {" "}
            <i className="bx bx-upload"></i>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { type } = state.alert;
  return { type };
};

const mapDispatchToProps = (dispatch) => ({
  likeTweet: (id) => dispatch.tweets.likeTweet(id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
