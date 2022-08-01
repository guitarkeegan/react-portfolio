import React from 'react';
import profile from '../assets/img/profile_selfie.jpg';

export default function About(){

    const styles = {
        img: {
            maxWidth: "400px",
            border: "solid #B8BFBD 5px"
        }
    }

    return (
        <div className='about-container container mt-5'>
        <div>
            <h1 className='text-center'>About Me</h1>
        </div>
        <div className='about-title-div'>
            <div className='row'>
                <div className='col-12 col-lg-6 text-center p-1'>
                <img style={styles.img} className='img-fluid' src={profile}></img>
                </div>
                <div className='col-12 col-lg-6'>
                <p>I moved to Southern California in 2003 to study jazz guitar at the University of Southern California. Since graduating in 2012 with a Doctorate of Music, I have been teaching a music courses in higher education at colleges throughout Los Angeles.</p>
                <p>I completed a full stack web developement bootcamp through UCLA-Extention on August 9, 2022. I am now interested in taking on a new challege as a full stack web engineer.</p>
                </div>
            </div>
        </div>
        </div>
    )
}