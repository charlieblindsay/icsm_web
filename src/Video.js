import React from 'react';

const Video = props => {
    return (
        <section className='video'>
            <h3 className="tertiary-title">Section 1</h3>
            <h2 className="secondary-title margin-small">Variables, printing, conditionals</h2>
            <h3 className="tertiary-title">1.1 Printing to the console</h3>
            <div className="iframe-container">
                <iframe type="text/html" frameborder="0" allowfullscreen="" src={props.src} data-youtubeid="G4doTGQPRPw" data-translatedyoutubeid="G4doTGQPRPw" tabindex="0" allow="autoplay"></iframe>
             </div>
        </section>
    );
}

export default Video;