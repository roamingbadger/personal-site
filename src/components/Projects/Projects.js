import React, { Component } from 'react';
import './Projects.css';
import Portfolio from './Portfolio/Portfolio';
// import  from './Navbar/Navbar';

class Projects extends Component {

    componentDidMount() {
        
    }
    render() {
        return (
            <section id='projects-section'>
                <h2>
                    My work
                </h2>
                <Portfolio />
            </section>
        )
    }
};

export default Projects;
