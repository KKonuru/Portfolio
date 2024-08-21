import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription
} from '@/components/ui/Card';

export default function Research() {
    return (
        <div className="px-5">
            <div className="grid grid-cols-3 gap-4 h-6/10">
                <div className="col-span-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-4 rounded">
                    <h1 className="text-2xl font-semibold">
                        To Cut Or Not To Cut
                    </h1>
                    <p className="text-lg mt-4">
                        In this project, we investigate the use of machine learning (ML) to enhance optimization solvers, specifically for mixed-integer programming (MIP) problems. MIP solvers often 
                        use a technique called "cutting planes" (or "cuts") to tighten problem relaxations, which typically 
                        leads to faster solutions. However, while cuts improve the average solving time, there are instances
                        where disabling cuts actually results in quicker solutions.
                        <br/>
                        <br/>
                        Our research aims to predict when it's beneficial to disable cuts using ML models.
                        This research could lead to smarter optimization solvers that adapt their strategies based on 
                        the specific problem, ultimately saving time and computational resources. 
                    </p>
                </div>
                <div className="col-span-2">
                    <object data="/Kausthubh_Konuru.pdf" type="application/pdf" width="100%" height="100%">
                        <p>Alternative text - include a link <a href="/Kausthubh_Konuru.pdf">to the PDF!</a></p>
                    </object>
                </div>
            </div>
            <div className="py-5">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4" >
                    <Card className="bg-slate-100">
                    <CardHeader>
                            <CardTitle>
                                Research Team
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            This project is conducted at the University of Florida in Department of Industrial and Systems 
                            Engineering.
                            <ul>
                                <li>PI: <a href="https://akazachk.github.io/">Dr. Aleksandr Kazachkov</a></li>
                                <li>Graduate student: <a>Zixuan Feng</a></li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="bg-slate-100"s>
                        <CardHeader>
                            <CardTitle>
                                Responsibilities
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                          
                            As part of conducting this research, I am responsible for:
                            <ul className="list-disc list-inside">
                                <li>Developing ML models to predict the impact of disabling cuts</li>
                                <li>Optimizing the ML models for performance</li>
                                <li>Conducting experiments to evaluate the models</li>
                            </ul>
                          
                        </CardContent>
                    </Card>
                    
                </div>

            </div>
        </div>
    );
}
