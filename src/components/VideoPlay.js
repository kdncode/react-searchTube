import React from 'react';

const VideoPlay = (props) => {
    const { id, snippet } = props.video;
    const videoId = id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-container">
            <iframe title="video_yt" src={url} width="700" height="350" />
            <div className="desc">
                <p><b>{snippet.title}</b></p>
                <p>{snippet.description}</p>
                <div>Publish at: {snippet.publishedAt}</div>
            </div>
        </div>
    )
}

export default VideoPlay;