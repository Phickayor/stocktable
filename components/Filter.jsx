import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Active from './Active'
import CompanyFilter from './CompanyFilter'
import DividendsFilter from './DividendsFilter'
function Filter() {
    const [content, SetContent] = useState(<Active />)
    // const padlock = <FontAwesomeIcon icon={faLock} />
    return (
        <div className="w-11/12 mx-auto my-5">
            <h1 className='inline-block text-[#111827] text-3xl font-semibold'>Stock Screener</h1>
            <b className="inline font-semibold mx-2">6006 matches</b>
            <div className='flex space-x-10 my-4'>
                <div className='w-1/2 border-2 self-center p-2 rounded-xl'>
                    {/* <label>Preset Screens</label> */}
                    <select className='w-full outline-none'>
                        <option>Top Gainers (1D)</option>
                        <option>Top Gainers (1Y)</option>
                        <option>Dividend Growth</option>
                        <option>Monthly Dividends</option>
                        <option>Strong Cash Flow</option>
                        <option>IPO This Year</option>
                        <option>IPO Last Year</option>
                    </select>
                </div>

                <div className='w-1/2 border-2  rounded-xl'>
                    {/* <label>Preset Screens</label> */}
                    {/* <select className='w-full outline-none'> */}
                    <div>
                        <div className='border-b flex justify-between'>
                            <input type="text" className='w-full p-2 outline-none' placeholder="Enter screen name" />
                            <button className="text-white rounded-tr-xl px-6 bg-slate-500">Save</button>
                        </div>
                        <p className="p-2">
                            No screens have been saved yet.
                            Choose some filters,
                            then enter a screen name and click Save.
                        </p>
                    </div>
                    {/* </select> */}
                </div>
            </div>
            <div className='bg-[#F9FAFB] p-2 w-full'>
                <div className='flex justify-between w-full border-b-2 py-3'>
                    <h1 className='text-[#111827] text-2xl font-semibold'>Filters</h1>
                    {/* repeat */}
                    <div className=' overflow-x-auto lg:block hidden mx-10'>
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 hover:bg-slate-200 cursor-pointer"
                                onClick={() => SetContent(<Active />)}
                                style={(content.type.name === "Active") ? { backgroundColor: "#e5e7eb" } : { backgroundColor: "none" }}
                            >
                                Active
                            </th>
                            <th scope="col" className="px-6 py-3 hover:bg-slate-200 cursor-pointer">Popular</th>
                            <th scope="col"
                                className="px-6 py-3 hover:bg-slate-200 cursor-pointer"
                                onClick={() => SetContent(<CompanyFilter />)}
                                style={(content.type.name === "companyFilter") ? { backgroundColor: "#e5e7eb" } : { backgroundColor: "none" }}
                            >
                                Company
                            </th>
                            <th scope="col" className="px-6 py-3 hover:bg-slate-200 cursor-pointer">Financials</th>
                            <th scope="col" className="px-6 py-3 hover:bg-slate-200 cursor-pointer">Valuation</th>
                            <th scope="col"
                                className="px-6 py-3 hover:bg-slate-200 cursor-pointer"
                                onClick={() => SetContent(<DividendsFilter />)}
                                style={(content.type.name === "DividendsFilter") ? { backgroundColor: "#e5e7eb" } : { backgroundColor: "none" }}
                            >
                                Dividends
                            </th>
                            <th scope="col" className="px-6 py-3 hover:bg-slate-200 cursor-pointer">Other</th>
                            <th scope="col" className="px-6 py-3 hover:bg-slate-200 cursor-pointer">All</th>
                        </tr>
                    </div>


                    <input type="text" placeholder="Find Filter" className="border-2 rounded-xl outline-blue-500 p-2 self-center" />

                </div>
                <div className='lg:hidden overflow-x-auto '>
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 hover:bg-slate-200 cursor-pointer"
                            onClick={() => SetContent(<Active />)}
                            style={(content.type.name === "Active") ? { backgroundColor: "#e5e7eb" } : { backgroundColor: "none" }}
                        >
                            Active
                        </th>
                        <th scope="col" className="px-6 py-3 hover:bg-slate-200 cursor-pointer">Popular</th>
                        <th scope="col"
                            className="px-6 py-3 hover:bg-slate-200 cursor-pointer"
                            onClick={() => SetContent(<CompanyFilter />)}
                            style={(content.type.name === "companyFilter") ? { backgroundColor: "#e5e7eb" } : { backgroundColor: "none" }}
                        >
                            Company
                        </th>
                        <th scope="col" className="px-6 py-3 hover:bg-slate-200 cursor-pointer">Financials</th>
                        <th scope="col" className="px-6 py-3 hover:bg-slate-200 cursor-pointer">Valuation</th>
                        <th scope="col"
                            className="px-6 py-3 hover:bg-slate-200 cursor-pointer"
                            onClick={() => SetContent(<DividendsFilter />)}
                            style={(content.type.name === "DividendsFilter") ? { backgroundColor: "#e5e7eb" } : { backgroundColor: "none" }}
                        >
                            Dividends
                        </th>                        <th scope="col" className="px-6 py-3 hover:bg-slate-200 cursor-pointer">Other</th>
                        <th scope="col" className="px-6 py-3 hover:bg-slate-200 cursor-pointer">All</th>
                    </tr>
                </div>
                <div className='my-5'>
                    {content}
                </div>
            </div>

        </div >

    )
}

export default Filter