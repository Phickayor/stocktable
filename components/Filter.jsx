import React from 'react'

function Filter() {
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
                    <input type="text" placeholder="Find Filter" className="border-2 rounded-xl outline-blue-500 p-2 self-center" />

                </div>
                <div className=' overflow-x-auto '>
                    <tr>
                        <th scope="col" className="px-6 py-3 hover:bg-slate-200">Active</th>
                        <th scope="col" className="px-6 py-3 hover:bg-slate-200">Popular</th>
                        <th scope="col" className="px-6 py-3 hover:bg-slate-200">Company</th>
                        <th scope="col" className="px-6 py-3 hover:bg-slate-200">Financials</th>
                        <th scope="col" className="px-6 py-3 hover:bg-slate-200">Valuation</th>
                        <th scope="col" className="px-6 py-3 hover:bg-slate-200">Dividends</th>
                        <th scope="col" className="px-6 py-3 hover:bg-slate-200">Other</th>
                        <th scope="col" className="px-6 py-3 hover:bg-slate-200">All</th>
                    </tr>
                </div>

            </div>

        </div>
    )
}

export default Filter