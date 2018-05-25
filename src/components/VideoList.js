import React from 'react';

const VideoList = (props) => {
    const videos = props.videos;
    const videoItem = Object.keys(videos).map(key => {
        // console.log(videos[key])
        const video = videos[key];
        const imgUrl = video.snippet.thumbnails.default.url;
        const title = video.snippet.title;

        return <div key={key} onClick={ () => props.selectItem(video) }>
            <figure>
                <img src={imgUrl} alt="" />
                <figcaption>{title}</figcaption>
            </figure>
        </div>
    });
    return videoItem;
}

export default VideoList;