import React from 'react';
import happyClient from '../../images/Illustration/happy@2x.png';
import projectComplete from '../../images/Illustration/marketing@2x.png';
import runningProject from '../../images/Illustration/surface1@2x.png';
import minds from '../../images/Illustration/transportation@2x.png';
import './Achievement.css';

const Achievement = () => {
    return (
        <section className = 'container achievement'>
            <div className="row">
                <div className="col-md-4">
                    <div className = 'mt-5 pt-2'>
                        <div className = ''>
                            <h1>Our Achievements</h1>
                            <p>It is long established fact that a reader will be distracted by the readable content  of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letter</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-6">
                            <div className = "m-2 p-4 achieves clients">
                                <div className = 'd-flex justify-content-center'>
                                    <div className = 'mr-4'><img src={happyClient} alt=""/></div>
                                    <div>
                                        <h3>700+</h3>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className = 'm-2 p-4 achieves completed'>
                                <div className = 'd-flex justify-content-center'>
                                    <div className = 'mr-4'><img src={projectComplete} alt=""/></div>
                                    <div>
                                        <h3>140+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className = 'm-2 p-4 achieves minds'>
                                <div className = 'd-flex justify-content-center'>
                                    <div className = 'mr-4'><img src={runningProject} alt=""/></div>
                                    <div>
                                        <h3>25+</h3>
                                        <p>Crazy Minds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className = 'm-2 p-4 achieves running'>
                                <div className = 'd-flex justify-content-center'>
                                    <div className = 'mr-4'><img src={minds} alt=""/></div>
                                    <div>
                                        <h3>75+</h3>
                                        <p>Running Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievement;