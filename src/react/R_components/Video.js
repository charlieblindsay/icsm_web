import React from 'react';


const Video = props => {
    const srcFull = 'https://www.youtube.com/embed/' + props.src;

    if (props.external_link_url != null){
        return (
        <div className='video' id={props.src}>
            <h3 className="video-section-title">{props.videoTitle}</h3>
            <div className="iframe-container">
                <iframe type="text/html" frameborder="0" allowfullscreen="" src={srcFull} gesture="media"  allow="encrypted-media" allowfullscreen></iframe>
            </div>
            <div className='video-description'>
                <h3 className='video-section-title'>Useful Links</h3>
                <a href={props.external_link_url} target='_blank' className="video-section-link">{props.external_link_title}</a>
            </div>
        </div>
        );
    }
    else{
        return(
        <div className='video' id={props.src}>
            <h3 className="video-section-title">{props.videoTitle}</h3>
            <div className="iframe-container">
                <iframe type="text/html" frameborder="0" allowfullscreen="" src={srcFull} gesture="media"  allow="encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        );
    }
}

export default Video;