import React from 'react';
import './WhatToDo.css'
const WhatToDo = () => {
    return (
        <div className="todo-wrapper">
            <div className="container my-5 py-5">
                <div className="text-center todo-title">
                    <h2>What we do</h2>
                    <p>Our main focus is to make the User Experience verysimple and easy. Simplicity is our Strength.</p>
                </div>
                <div className="row text-center todo-detail">
                    <div className="col-md-3 todo">
                        <div className="m-4">
                            <img src="https://i.ibb.co/9rZbkJ5/Group-65-2x.png" alt=""/>
                            <h5>Experience Design </h5>
                            <p>The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                    <div className="col-md-3 todo">
                        <div className="m-4">
                            <img src="https://i.ibb.co/ftBcgdS/Group-66-2x.png" alt=""/>
                            <h5>Interface Design </h5>
                            <p>The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                    <div className="col-md-3 todo">
                        <div className="m-4">
                            <img src="https://i.ibb.co/CQ4TgPG/Group-69-2x.png" alt=""/>
                            <h5>Prototyping </h5>
                            <p>The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                    <div className="col-md-3 todo">
                        <div className="m-4">
                            <img src="https://i.ibb.co/kHMF877/Group-72-2x.png" alt=""/>
                            <h5>Illustration</h5>
                            <p>The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatToDo;