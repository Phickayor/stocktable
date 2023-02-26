import React from 'react'

function ValuationFilter() {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 space-y-5 space-x-5 mx-auto w-11/12 '>
            <div className='flex self-center justify-between ml-5 mt-5 border-b-2 pb-2'>
                <h1>Market Cap</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Enterprise Value</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Stock Price</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Forward PE</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div><div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>PE Ratio</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div><div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>PS Ratio</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Forward PS</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>PB Ratio</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>P/FCF Ratio</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>PEG Ratio</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>EV/Sales</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Forward EV/Sales</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>EV/Earnings</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>EV/EBITDA</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>EV/EBIT</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>EV/FCF</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Earnings Yield</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>FCF Yield</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>
            <div className='flex self-center justify-between border-b-2 pb-2'>
                <h1>Market Cap Group</h1>
                <select className='w-1/2 p-1 rounded-lg'>
                    <option>Any</option>
                </select>
            </div>

        </div>
    )
}

export default ValuationFilter