import { useState } from "react"
import { useNavigate } from "react-router-dom"
import schools from "./data/schools.json"

const Home = () => {
    // const recommendations = [
    //     "Amity University", 
    //     "Lovely University",
    //     "University of Delhi",
    //     "IISc",
    //     "Punjab University",
    //     "Computer Science",
    //     "Delhi Technological University",
    //     "B. Tech",
    //     "M. Tech",
    //     "IIITDM",
    //     "MIT School of Management",
    //     "NALSAR University of Law",
    // ]

    const data: string[] = []
    schools.map(item => {
        if(!(item.school_name in data)) {
            data.push(item.school_name)
        }
    })

    const [input, changeInput] = useState("");
    const handleClick = (item: any) => {
        changeInput(item);
    }

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-8">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl dark:text-white">Give a boost to your School hunting Journey. 🚀</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">This is a project built under the participation in <b>HackNITR 4.0</b> 2023. By using this one can find the perfect match of the Courses and School for studying further.</p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <a href="#search_school" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                <span className="text-xl">🔍</span>&nbsp;&nbsp;Search a School
                            </a> 
                            <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <span className="text-xl">📚</span>&nbsp;&nbsp;View Courses
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-3 lg:col-end-12 lg:flex">
                        <img src="/src/assets/5.png" className="dark:hidden" alt="" />
                        <img src="/src/assets/4.png" className="hidden dark:block" alt="" />
                    </div>
                </div>
            </section>

            <section id="search_school" className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                    <div className="max-w-screen-sm mx-auto text-center">
                        <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Search school or courses here. 👇🏻</h2>
                        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try entering the names of courses or school you want to search for...</p>
                        <form>
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" defaultValue={input} id="search" className="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search" required />
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Search</button>
                            </div>
                        </form>
                        <div className="recommendations mt-5">
                            {data.map(item => (
                                <a onClick={() => handleClick(item)} className="inline-flex items-center justify-center px-4 py-2 mb-2 mr-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-200 hover:text-gray-800 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 dark:hover:text-gray-400 dark:hover:bg-gray-700">{item}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
export default Home;