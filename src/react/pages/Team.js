import React from 'react';


{/* ONLY SEEMS TO WORK WITH SQUARE IMAGES */}


function Team(){
    return(

        

        <div className='photo-section'>
            <div className="photo-container">
                <img src="https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/alicesidebaroption--tojpeg_1552996095111_x2.jpg" className="team-image"/>
                <h3 className="secondary-title">Alice Gast</h3>
                <h3 className="tertiary-title">3rd Year Medic</h3>
            </div>
            <div className="photo-container">
                <img src="https://blog.hubspot.com/hs-fs/hubfs/an%20image%20centered%20horizontally%20with%20the%20CSS%20flex%20property-1.png?width=650&name=an%20image%20centered%20horizontally%20with%20the%20CSS%20flex%20property-1.png" className="team-image"/>
                <h3 className="secondary-title">Galaxy man</h3>
                <h3 className="tertiary-title">3rd Year Medic</h3>
            </div>
            <div className="photo-container">
                <img src="https://mcusercontent.com/23aa4540effb748800e9fd704/images/0ddf600f-b772-6d0e-1192-7918323c580c.png" className="team-image"/>
                <h3 className="secondary-title">CODER</h3>
                <h3 className="tertiary-title">3rd Year Medic</h3>
            </div>
            <div className="photo-container">photo</div>
            <div className="photo-container">photo</div>
            <div className="photo-container">photo</div>
        </div>
    );
}

export default Team;