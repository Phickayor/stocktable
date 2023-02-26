import React from 'react'

function DividendsFilter() {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 space-y-5 space-x-5 mx-auto w-11/12 '>
            <div className='flex self-center justify-between ml-5 mt-5 border-b-2 pb-2'>
                <h1>Dividend Yield</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Dividend ($)</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Dividend Growth</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Payout Ratio</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div><div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Payout Freq.</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div><div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Buyback Yield</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Shareholder Yield</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Ex-Div Date</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
        </div>
    )
}

export default DividendsFilter