import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import YouTubeChannel from 'react-youtube-playlist';
import youtubeKey from '../../../../config.js'

export default class VideoFact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
      <YouTubeChannel
      width={'85%'}
      height={390}
      api_key={youtubeKey.api_key}
      playlist_id='fdaAogiAw-igfBt_uIBuO3uewbsPENzw'
      show_thumbnails
    />
    );
  }
}

VideoFact.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
};
//<YouTube videoId="5CypGcJiGik" opts={opts} onReady={this._onReady} />
