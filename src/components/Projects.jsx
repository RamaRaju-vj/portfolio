import React from 'react';
import { data } from "../data/data.js";

const Projects = () => {
    return (
        <div name='Projects' className='w-full text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg transition-colors duration-300 pt-16 sm:pt-20'>
            <div className='max-w-[1000px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-center min-h-screen'>
                <div className='pb-6 sm:pb-8 text-center sm:text-left'>
                    <p className='text-3xl sm:text-4xl lg:text-5xl font-bold inline border-b-4 text-light-text dark:text-dark-text border-pink-600 mb-4'>
                        Projects
                    </p>
                    <p className='py-4 sm:py-6 text-light-secondary dark:text-dark-secondary text-sm sm:text-base lg:text-lg'>
                        Check out my projects
                    </p>
                </div>

                {/* Container for projects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* Grid items */}
                    {data.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            className="shadow-lg shadow-light-border dark:shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div border border-light-border dark:border-dark-border transition-all duration-300 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 text-center p-4 sm:p-6 lg:p-8 transition-opacity duration-300">
                                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wider block mb-4">
                                    {item.name}
                                </span>
                                <div className="pt-4 sm:pt-6 lg:pt-8">
                                    {/* Conditional rendering of buttons based on ID */}
                                    {item.id === 1 && (
                                        <>
                                            <a href={item.github1} target="_blank" rel="noopener noreferrer">
                                                <button className="text-center rounded-lg px-3 sm:px-4 py-2 sm:py-3 m-1 sm:m-2 bg-white hover:bg-gray-100 text-gray-700 font-bold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:scale-105 transform">
                                                    Webapp Code
                                                </button>
                                            </a>
                                            <a href={item.github2} target="_blank" rel="noopener noreferrer">
                                                <button className="text-center rounded-lg px-3 sm:px-4 py-2 sm:py-3 m-1 sm:m-2 bg-white hover:bg-gray-100 text-gray-700 font-bold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:scale-105 transform">
                                                    Infra Code
                                                </button>
                                            </a>
                                        </>
                                    )}
                                    {item.id === 2 && (
                                        <>
                                            <a href={item.github1} target="_blank" rel="noopener noreferrer">
                                                <button className="text-center rounded-lg px-3 sm:px-4 py-2 sm:py-3 m-1 sm:m-2 bg-white hover:bg-gray-100 text-gray-700 font-bold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:scale-105 transform">
                                                    EKS Infra Code
                                                </button>
                                            </a>
                                            <a href={item.github2} target="_blank" rel="noopener noreferrer">
                                                <button className="text-center rounded-lg px-3 sm:px-4 py-2 sm:py-3 m-1 sm:m-2 bg-white hover:bg-gray-100 text-gray-700 font-bold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:scale-105 transform">
                                                    AMI Jenkins Code
                                                </button>
                                            </a>
                                            <a href={item.github3} target="_blank" rel="noopener noreferrer">
                                                <button className="text-center rounded-lg px-3 sm:px-4 py-2 sm:py-3 m-1 sm:m-2 bg-white hover:bg-gray-100 text-gray-700 font-bold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:scale-105 transform">
                                                    Microservices Code
                                                </button>
                                            </a>
                                        </>
                                    )}
                                    {item.id === 3 && (
                                        <a href={item.github1} target="_blank" rel="noopener noreferrer">
                                            <button className="text-center rounded-lg px-3 sm:px-4 py-2 sm:py-3 m-1 sm:m-2 bg-white hover:bg-gray-100 text-gray-700 font-bold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:scale-105 transform">
                                                RestAPI Code
                                            </button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
