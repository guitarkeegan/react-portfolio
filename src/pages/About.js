import React from 'react';
import profile from '../assets/img/profile_selfie.jpg';
// page will show a profile picture of me, with some text about me.
export default function About(){
// add inline style to the images
    const styles = {
        img: {
            border: "solid #B8BFBD 5px"
        }
    }

    return (
        <div className='about-container mt-5'>
        <div>
            <h1 className='text-center'>About Me</h1>
        </div>
        <div className='about-title-div container-fluid'>
            <div className='row'>
                <div className='col-12 col-sm-6 col-lg-4 text-center p-1'>
                <img alt="profile image of Keegan Anglim" style={styles.img} className='img-fluid' src={profile}></img>
                </div>
                <div className='col-12 col-sm-6 col-lg-8'>
                <p>Full stack web developer leveraging extensive experience in music to work collaboratively and creatively. Graduate of the University of Southern California with a Doctorate of Musical Arts. Winner of USC’s Order of the Arête leadership award. Recently earned a certificate in full-stack web development from UCLA Extension, with a focus on HTML, JavaScript, JQuery, CSS, handlebars, React, Express, graphQL, sequelize, mongoose, mySQL, MongoDB and other technologies. Achieved a 99.61% overall grade in the bootcamp. Portfolio includes three group projects: Hungry Eyes, Review Flix, Steep Dreams. Prior to the bootcamp, used Python to build simple GUIs with TKinter, backend with Flask, and data analysis and presentation with Jupyter-Notebook.</p>
                </div>
            </div>
        </div>
        </div>
    )
}