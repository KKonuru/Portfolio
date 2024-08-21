import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription
} from '../../components/ui/card';

export default function CV() {
    return (
        <div>
            
            <div className="flex flex-row justify-between items-center border-b-4 border-cyan-500 px-20 py-4">
                <h1 className="font-semibold text-3xl">
                    CV/Resume
                </h1>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="/Kausthubh_Konuru_Resume.pdf" download>
                    Download CV
                </a>
            </div>

            
            <div className="flex flex-col gap-4 py-5 px-5">
                <Card className="bg-slate-100">
                    <CardHeader>
                        <CardTitle>Experience</CardTitle>
                    </CardHeader>
                    <CardContent>
                            <div className="">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Florida Blue</CardTitle>
                                        <CardDescription>
                                            Data Science Intern
                                            <br/>
                                            May 2024 - August 2024
                                        
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-lg">
                                            <ul className="list-disc list-inside">
                                                <li>Developed a Retrieval-Augmented Generation (RAG) internal application, enabling users to query data from a warehouse using in-house language models</li>
                                                <li>Architected the application with LangChain, MySQL, and SQLAlchemy for metadata management, and FastAPI for endpoint creation</li>
                                                <li>Created unit tests using Poetry to test a package that simplifies data scientists' access to the data warehouse</li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>University of Florida</CardTitle>
                                        <CardDescription>
                                            Undergraduate Researcher
                                            <br/>
                                            August 2023 - Present
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-lg">
                                            <ul className="list-disc list-inside">
                                                <li>Built a data pipeline on a Linux-based University of Florida supercomputer, HiPerGator, to create the feature dataset for developing classification machine learning models</li>
                                                <li>Developing classification machine learning models to fine-tune the performance of a Constraint Integer Program solver, reducing the processing time through strategic parameter optimization</li>
                                                <li>Tested the classification machine learning models and the computation time of the solver improved by 10%</li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-4">
                    <CardHeader>
                        <CardTitle>Teaching</CardTitle>
                    </CardHeader>
                    <CardContent>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>COP 4600 Operating Systems @ University of Florida</CardTitle>
                                        <CardDescription>
                                            Peer Mentor
                                            <br/>
                                            August 2024 - Present
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-lg">
                                            <ul className="list-disc list-inside">
                                                <li>Lead discussion sections involving administering quizzes, and reviewing lectures, exercises, and projects</li>
                                                <li>Host office hours to assist students with projects, grade student work, and develop quizzes and exams</li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            MAC 2311 Calculus 1 @ University of Florida
                                        </CardTitle>
                                        <CardDescription>
                                           Learning Assistant
                                            <br/>
                                            August 2023 - December 2023
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-lg">
                                            <ul className="list-disc list-inside">
                                                <li>Assisted the professor with the Calculus 1 lectures by coordinating and preparing for lessons</li>
                                                <li>Facillitated interactive classroom sessions, guiding students through completion of daily worksheets and
                                                fostering a dynamic learning environment </li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Stanford Code in Place
                                    </CardTitle>
                                    <CardDescription>
                                        Section Leader
                                        <br/>
                                        May 2023 - June 2023
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-lg">
                                        <ul className="list-disc list-inside">
                                            <li>Led weekly interactive sessions with a group of 12 students, fostering a collaborative environment to enhance learning in hour-long classes</li>
                                            <li>Reviewed key concepts from Stanford’s CS106A curriculum, focusing on topics such as graphical programming and fundamental data structures to strengthen students’ foundational understanding</li>
                                            <li>Assisted students in tackling weekly programming challenges and guided them through their projects, offering
                                            tailored help to improve coding skills and project outcomes</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </CardContent> 
                </Card>

                <Card className="bg-slate-100">
                    <CardHeader>
                        <CardTitle>Involvements</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Card>
                            <CardHeader>
                                <CardTitle>Statistics Club</CardTitle>
                                <CardDescription>
                                    Workshop Director
                                    <br/>
                                    August 2023 - Present
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>GAITOR Club</CardTitle>
                                <CardDescription>
                                    Member
                                    <br/>
                                    August 2022 - Present
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Association of Computer Engineers</CardTitle>
                                <CardDescription>
                                    Member
                                    <br/>
                                    August 2022 - Present
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-4">
                    <CardHeader>
                        <CardTitle>Presentations</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Card>
                            <CardHeader>
                                <CardTitle>To Cut Or Not To Cut</CardTitle>
                                <CardDescription>MIP Workshop 2024 - June 2024</CardDescription>
                            </CardHeader>
                            <CardContent>
                                
                                <a href="https://www.mixedinteger.org/2024/posters/Kausthubh_Konuru.pdf">
                                View the poster presented at the MIP Workshop 2024
                                </a>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Introduction to R</CardTitle>
                                <CardDescription>Statistics Club - September 2023</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <a href="https://github.com/KKonuru/R_Workshop">
                                View the workshop materials on GitHub
                                </a>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Introduction to Data Visualization</CardTitle>
                                <CardDescription>Statistics Club - March 2024</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <a href="https://github.com/KKonuru/VizWorkshop23">
                                View the workshop materials on Github
                                </a>
                            </CardContent>
                        </Card>
                    </CardContent>

                </Card>
            </div>
        </div>
    );
}
