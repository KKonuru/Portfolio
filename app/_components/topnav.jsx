"use client";
import {useRouter} from 'next/navigation';
export function TopNav() {
    const router = useRouter();
    return (
        <nav className="py-10 px-5 mb-12 flex justify-between">
            <h1 className="text-xl font-semibold dark:text-white" style={{cursor:'pointer'}} onClick={()=>{router.push("/")}}>Kausthubh Konuru</h1>
            <div className="">
            <ul className="flex items-cente">
                <li>
                    <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"  style={{cursor:'pointer'}} onClick={()=>{router.push("/")}}>
                        About
                    </a>
                </li>
                <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"  style={{cursor:'pointer'}} onClick={()=>{router.push("/Research")}}>
                        Research
                    </a>
                </li>
                <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"  style={{cursor:'pointer'}} onClick={()=>{router.push("/Projects")}}>
                        Projects
                    </a>
                </li>
                <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"  style={{cursor:'pointer'}} onClick={()=>{router.push("/Coursework")}}>
                        Coursework
                    </a>
                </li>
                <li>
                    <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" style={{cursor:'pointer'}} onClick={()=>{router.push("/CV")}}>
                        CV
                    </a>
                </li>
            </ul>
            </div>
        </nav>
    );
}