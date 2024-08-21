import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card"
  
  export default function Coursework() {

    return (
        <div className="w-full px-10">
            
           
            <div className="flex flex-rows gap-4 text-xl py-5">
                <div>
                <Card className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-4">
                    <CardHeader>
                        <CardTitle>Pursuing at the University of Florida</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-xl text-white p-4">
                            Major: Computer Science
                            <br/>
                            Minor: Statistics
                            <br/>
                            Minor: Mathematics
                        </CardDescription>
                    </CardContent>
                </Card>
                </div>
                <div>
                <Card className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-4">
                    <CardHeader>
                        <CardTitle>Awards and Distinction</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-xl text-white p-4">
                            National Merit Scholar - 2022
                            <br/>
                            Benaquisto Scholarship Recipient - 2022
                            <br/>
                            University Scholars Program - 2024
                        </CardDescription>
                    </CardContent>
                </Card>
                </div>
            </div>
          
            
            <div className="w-full flex flex-rows gap-4 text-xl py-5">
            <Card className="w-full bg-slate-100">
                    <CardHeader>
                        <CardTitle>Courses Completed @ University of Florida</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xl py-5">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Computer Science Courses</CardTitle>

                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            <ul>
                                                <li>COP 3504c - Advanced Programming Fundamentals</li>
                                                <li>COP 3530 - Data Structures</li>
                                                <li>COP 4600 - Operating Systems</li>
                                                <li>COP 4331 - Object Oriented Programming</li>
                                                <li>CEN 3031 - Introduction to Software Engineering</li>
                                            </ul>
                                        </CardDescription>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Statistics Courses</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            <ul>
                                                <li>STA 3032 - Engineering Statistics</li>
                                                <li>STA 4321 - Intro to Probability</li>
                                                <li>STA 4210 - Regression Analysis</li>
                                            </ul>
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Mathematics Courses</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            <ul>
                                                <li>MAC 2313 - Calculus 3</li>
                                                <li>MAP 2302 - Elementary Differential Equations</li>
                                                <li>MHF 3202 - Sets and Logic</li>
                                            </ul>
                                        </CardDescription>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Machine Learning and AI</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            <ul>
                                                <li>EEL 5840 - Fundamentals of Machine Learning</li>
                                                <li>CAP 4641 - Natual Language Processing</li>
                                            </ul>
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>


            
        </div>
    )
}