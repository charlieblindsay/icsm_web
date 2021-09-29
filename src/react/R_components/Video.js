import React from 'react';


const Video = props => {
    const srcFull = 'https://www.youtube.com/embed/' + props.src;

    if (props.external_link_dict != null){
        const externalLinkList = props.external_link_dict.map(e => <a href={e.url} target='_blank' className="video-section-link">{e.title}</a>);
        return (
        <div className='video' id={props.src}>
            <h3 className="video-section-title">{props.videoTitle}</h3>
            <div className="iframe-container">
                <iframe type="text/html" frameborder="0" allowfullscreen="" src={srcFull} gesture="media"  allow="encrypted-media" frameborder="2" allowfullscreen="allowfullscreen" webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
            </div>
            <div className='video-description'>
                <h3 className='video-section-title'>Useful Links</h3>
                {externalLinkList}
            </div>
        </div>
        );
    }
    else{
        return(
        <div className='video' id={props.src}>
            <h3 className="video-section-title">{props.videoTitle}</h3>
            <div className="iframe-container">
                <iframe type="text/html" frameborder="0" allowfullscreen="" src={srcFull} gesture="media"  allow="encrypted-media" frameborder="2" allowfullscreen="allowfullscreen" webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
            </div>
        </div>
        );
    }
}

export default Video;