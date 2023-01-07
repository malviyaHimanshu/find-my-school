import { useEffect } from "react";
import { Link } from "react-router-dom";
import schools from "./data/schools.json";

const Schools = () => {
    console.log(schools);
    
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-20 mx-auto lg:py-24 lg:px-6">
                    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Popular Colleges 🎓</h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here is the list of trending schools.</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {schools.map((item) => (
                            <Link to={"/college/" + item.school_number}>
                                <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-800 transition-all duration-300 ease dark:hover:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                    <h3 className="mb-4 text-2xl font-extrabold capitalize">{item.school_name}</h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 capitalize">{item.address}, {item.city}, {item.pin_code}</p>
                                    <div className="flex items-baseline justify-center my-2">
                                        <span className="mr-2 text-2xl font-extrabold">₹{ parseInt(item.fees).toLocaleString() }</span>
                                        <span className="text-gray-500 dark:text-gray-400">/sem</span>
                                    </div>
                                    <ul role="list" className="my-8 mt-4 space-y-4 text-left">
                                        {item.courses.map(course => (
                                            <li className="flex items-center space-x-3">
                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                <span className="capitalize">{course}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to={"/college/" + item.school_number} className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">View More</Link>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        
        </>
    );
}
 
export default Schools;