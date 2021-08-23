import React from 'react';

const Video = props => {
    return (
        <div className='video'>
            <h3 className="tertiary-title">{props.videoTitle}</h3>
            <div className="iframe-container">
                <iframe type="text/html" frameborder="0" allowfullscreen="" src={props.src} data-youtubeid="G4doTGQPRPw" data-translatedyoutubeid="G4doTGQPRPw" tabindex="0"></iframe>
            </div>
            <div className='video-description'>
                <h3 className='tertiary-title'>Exercise</h3>
                <a href="https://replit.com/@CodingICSM/Accessing-Individual-Elements#main.py" target='_blank'>Repl</a>
            </div>
        </div>
    );
}

export default Video;