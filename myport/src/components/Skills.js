import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
import './About.css';  // Separate CSS file for styling

const skillsData = [
    { icon: <FaReact />, name: 'React', description: 'A library for building user interfaces.' },
    { icon: <FaNodeJs />, name: 'Node.js', description: 'JavaScript runtime for server-side development.' },
    { icon: <FaCss3Alt />, name: 'CSS3', description: 'Style sheet language for web pages.' },
    { icon: <FaHtml5 />, name: 'HTML5', description: 'Markup language for structuring web content.' },
    { icon: <FaJs />, name: 'JavaScript', description: 'Programming language for interactive web pages.' }
];

const Skills = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
            {skillsData.map((skill, index) => (
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
                        {skill.icon}
                    </div>
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Skills;
