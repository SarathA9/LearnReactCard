import React from 'react';
import './StudentDetails.css';
import std_img from './image/1678076712285-01.jpeg'
import Header from './component/header';
import { div } from './component/Exp';

const StudentDetails = () => {
    return (
        <div>
            <Header/>
            <div className="root">
            <div className="center-div">
                <div className="top-div">
                    <div className="background-image">
                        <img 
                            src={std_img}
                            alt="Student" 
                            className="student-photo"
                        />
                    </div>
                    <h1 className="student-name">Sarath A</h1>
                </div>
                <div className="details-div">
                    <p><strong>Roll Number:</strong> 210956</p>
                    <p><strong>Address:</strong> Kuttikol Kasaragod Kerala</p>
                    <p><strong>Email:</strong> sarathofficial920@gmail.com</p>
                    <p><strong>Phone:</strong> +91 9207518115</p>
                </div>
            </div>
        </div>
        </div>

    );
};

export default StudentDetails;
