import React from 'react';
import './HomeBanner.css'
const HomeBanner = () => {
    return (
        <div className="banner-wrapper">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 banner-detail">
                        <h1 className="display-3">Florence <br/> agency</h1>
                        <p className="text-muted my-4">Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and
scrambled it to make a type specimen book.</p>
<button className="nav-link mr-2 px-4 text-white btn btn-custom" href="#">See Pricing</button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="https://i.ibb.co/L9WQPsW/16-Converted-2x.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;