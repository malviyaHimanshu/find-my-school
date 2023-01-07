import { useState } from "react";
import { useParams } from "react-router-dom";
import schools from "./data/schools.json";


const SchoolDetails = () => {
    const { id } = useParams();
    const data = schools.filter(item => item.school_number === id)[0];

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-20 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white capitalize">{ data.school_name }</h2>
                            <p className="mb-2 font-light lg:text-xl lowercase">{data.ph_no}, {data.email}</p>
                            <p className="my-2 font-light lg:text-xl capitalize">{ data.address }, {data.city}, {data.pin_code}</p>
                            <div className="flex items-baseline my-2">
                                <span className="mr-2 text-2xl font-extrabold text-gray-300">₹{ parseInt(data.fees).toLocaleString() }</span>
                                <span className="text-gray-500 dark:text-gray-400">/sem</span>
                            </div>
                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                {data.courses.map(course => (
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white capitalize">{course}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                        </div>
                        {/* <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/feature-1.png" alt="dashboard feature image" /> */}
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default SchoolDetails;