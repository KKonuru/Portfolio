import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription
} from '../../components/ui/card';
import Image from 'next/image';
import gallery from '../../public/gallery.png';
import { AiFillGithub} from 'react-icons/ai';
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
function Website(){
    return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
    );
}

export default function Projects(){
    return (
        <div className="font-sans text-base">
            <div className="mx-auto w-11/12  bg-cyan-500 border border-cyan-500 rounded-lg">
                <h1 className="text-4xl text-white text-center p-4">Projects</h1>
                <p className="text-lg text-white text-center p-4">Here are some of the projects I have worked on ranging from web
                    development to machine learning and data science.
                </p>
            </div>
            <div className="gap-4 p-5">
                <Card className="p-5">
                    <CardTitle>
                        Image Gallery
                        <CardDescription>
                            <br/>
                            A simple image gallery built using Next.JS. It allows users to sign into their accounts, create albums, and upload images for those albums. It also displays public albums created by users.
                            <br/><br/>
                            

                        </CardDescription>
                        <div className="flex justify-left text-gray dark:text-white">
                                    <a 
                                        href="https://t3gallery-roan-two.vercel.app/"  
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="Visit Website"
                                    >
                                        <CgWebsite className="text-3xl" />
                                    </a>
                                    <a 
                                        href="https://github.com/KKonuru/gallery" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="View on GitHub"
                                    >
                                        <AiFillGithub className="ml-4 text-3xl" />
                                    </a>
                                </div>
                    </CardTitle>
                    <CardContent>
                        <div className="flex justify-center py-5">
                            <Image src={gallery} width={500} height={500} className='w-160 h-160 md:h-240 md:w-240'/>
                        </div>
                        <div className="">
                            <p className="text-gray ">This project was made using the following:</p>
                            
                        </div>
                        <ul className="list-disc  list-inside">
                                <li>Next.JS</li>
                                <li>Tailwind</li>
                                <li>Shadcn ui</li>
                                <li>Postgres</li>
                                <li>Drizzle-orm</li>
                                <li>Clerk Authentication</li>
                                <li>Sentry</li>
                        </ul>
                        <p className="text-gray">To view a demo of the project visit the video in the github repository's readme.<br/> The website blocks all new users for uploading images for security. </p>
                    </CardContent>
                </Card>
                    
                <Card className="p-5 flex-shrink-0"> 
                    <CardTitle>
                        Math Symbol Classifier
                        <CardDescription>
                            <br/>
                            A computer vision project that classifies images of handwritten math symbols. It was tested on a set of 10 classes where it predicts one of the 10 symbols or unknown.
                            <br/><br/>
                            To read the full report on the project and to receive the source code, please contact me at the email below.
                        </CardDescription>
                        <div className="flex justify-left text-gray dark:text-white">
                                    <a 
                                       href="mailto:kausthubhkonuru@ufl.edu"
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       aria-label="mailto:kausthubhkonuru@ufl.edu"
                                   >
                                       <MdEmail className="text-3xl" />
                                   </a>
                        </div>
                        
                    </CardTitle>
                    <CardContent>
                            <div className="flex justify-center py-5">
                                <p>
                                This project aims to classify images of 10 different types of math symbols. The dataset is a collection of handwriten math symbols created by peers in the Fundamentals of Machine Learning course at the University of Florida. 
                                At first we aimed to use Support Vector Classifier by using the scikit-image and opencv to perform image processing. Using a pipeline of image processing, principle component analysis, support vector classifier yielded 82.8% accuracy.
                                I proposed using convolutional neural networks to improve the accuracy of the model. We used the tensorflow keras model to use ResNet50 to utilize transfer learning.

                                <br/><br/>
                                We performed experiments on the hipergator using 2 NVIDIA A100 GPUs and 16GB of RAM. We used grid search to determine the best number of neural network layers to add upon the ResNet50 model. Also, we tuned the various hyperparameters for the layers, the learning rate, optimizer, and epochs.

                                <br/><br/>
                                The final model yielded an accuracy of 94.82%.
                                </p>
                            </div>
                        </CardContent>
                </Card>

                <Card className="p-5">
                    <CardTitle>
                        Formula 1 Dashboard 
                        <CardDescription>
                        <br/>
                            A dashboard that displays dynamic graphs and statistics for many Formula 1 seasons. Compare the driver's and teams performance over the years by using interactive plots of the gear shifts and speed at each race track.
                            <br/><br/>
                            To view the code and demo please visit the github repository.
                        </CardDescription>
                        <div className="flex justify-left text-gray dark:text-white">
                                    <a 
                                        href="https://github.com/KKonuru/F1Stats" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="View on GitHub"
                                    >
                                        <AiFillGithub className="ml-4 text-3xl" />
                                    </a>
                                </div>
                    </CardTitle>
                    <CardContent>
                    <div className="flex justify-center py-5">
                        <video width="720" controls>
                            <source src="/demo/F1-Dashboard-Demo.mp4" type="video/mp4" />
                                 Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="flex justify-center py-5">
                                <p>
                                This project is a web-based dashboard that provides insights into Formula 1 racing statistics. The dashboard was built using Python, Flask, Plotly, and Dash. The data is scraped from the official Formula 1 website using Beautiful Soup. The driver data for each race
                                is obtained from the FastF1 api. 
                                The dashboard was built using Flask to serve the data and render interactive visualizations using Plotly and Dash. I used 
                                Flask to define routes for the app to also serve bio data on each driver in addition to the dashboard. This bio data is scrapped using Beautiful Soup from the official Formula 1 website.
                                It uses the FastF1 api to fetch the driver's speed and gear shifts over the race track. The data is then visualized using Plotly's interactive graphs.
                                The dashboard includes features such as:
                                <br/>
                                - Interactive graphs showing driver and team performance over the season.
                                <br/>
                                - Dynamic filtering options to compare specific drivers or teams.
                                <br/>
                                - Visualizations of gear shifts, and speed at various tracks.
                                <br/>
                                The project demonstrates the integration of web scraping, data processing, and interactive visualization to create an engaging user experience.
                                </p>
                            </div>         
                   
                    </CardContent>
                </Card>
                
            </div>
        </div>
    );
}