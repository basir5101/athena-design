import React, { useState } from 'react';
import './Team.css'

const Team = () => {
    const [basicButtonShow, setBasicButtonShow] = useState(false);
    const [preferredButtonShow, setPreferredButtonShow] = useState(false);
    const [eliteButtonShow, setEliteButtonShow] = useState(false);
    return (
        <section style = {{minHeight: '900px'}} className = 'container teams mb-5 pt-4 text-center'>
            <h3 className = 'text-center m-5 p-5'>Choose Your Dedicated Team</h3>
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className = 'team p-4 mb-5 m-3' onMouseEnter = {() => setBasicButtonShow(true)} onMouseLeave = {() => setBasicButtonShow(false)}  >
                            <div className = 'm-4'>
                                <h2>$199</h2>
                                <p>For Basic</p>
                                <hr/>
                                <p>Homepage</p>
                                <p>4 Inner pages</p>
                                <p>Asset file</p>
                                <p>Source file</p>
                                <p>Free Stock Photos</p>
                                <p>20 Days Free Support</p>
                                <p>24/7 Support</p>
                                {
                                    basicButtonShow && <button>Order Now</button>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className = 'team p-4 mb-5 m-3' onMouseEnter = {() => setPreferredButtonShow(true)} onMouseLeave = {() => setPreferredButtonShow(false)}>
                            <div className = 'm-4'>
                                <h2>$399</h2>
                                <p>For Preferred</p>
                                <hr/>
                                <p>Homepage</p>
                                <p>4 Inner pages</p>
                                <p>Asset file</p>
                                <p>Source file</p>
                                <p>Free Stock Photos</p>
                                <p>20 Days Free Support</p>
                                <p>24/7 Support</p>
                                {
                                    preferredButtonShow && <button>Order Now</button>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className = 'team p-4 mb-5 m-3' onMouseEnter = {() => setEliteButtonShow(true)} onMouseLeave = {() => setEliteButtonShow(false)}>
                            <div className = 'm-4'>
                                <h2>$599</h2>
                                <p>For Elite</p>
                                <hr/>
                                <p>Homepage</p>
                                <p>4 Inner pages</p>
                                <p>Asset file</p>
                                <p>Source file</p>
                                <p>Free Stock Photos</p>
                                <p>20 Days Free Support</p>
                                <p>24/7 Support</p>
                                {
                                    eliteButtonShow && <button>Order Now</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;