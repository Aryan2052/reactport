import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaCloud } from 'react-icons/fa';

const projectsData = [
    { icon: <FaLaptopCode />, name: 'Web Development', description: 'A full-stack web development project using React and Node.js.' },
    { icon: <FaMobileAlt />, name: 'Mobile App', description: 'A cross-platform mobile app built with React Native.' },
    { icon: <FaDatabase />, name: 'Database Management', description: 'A database management system project using MongoDB.' },
    { icon: <FaCloud />, name: 'Cloud Integration', description: 'A cloud service integration project with AWS.' }
];

const Projects = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
            {projectsData.map((project, index) => (
                <div 
                    key={index}
                    style={{ 
                        background: '#f9f9f9', 
                        border: '1px solid #e1e1e1', 
                        borderRadius: '8px', 
                        padding: '20px', 
                        margin: '10px', 
                        textAlign: 'center', 
                        width: '200px', 
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <div style={{ fontSize: '40px', marginBottom: '10px', color: '#333' }}>
                        {project.icon}
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;
