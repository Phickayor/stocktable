import React from 'react'

function companyFilter() {
    return (

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 space-y-5 space-x-5 mx-auto w-11/12 '>
            <div className='flex self-center justify-between ml-5 mt-5 border-b-2 pb-2'>
                <h1>Industry</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Exchange</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Sector</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Country</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div><div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Employees</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div><div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Founded</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>IPO Date</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Earnings Date</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Is SPAC</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>In Index</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
        </div>
    )
}

export default companyFilter