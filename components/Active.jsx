import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Active() {
    // const add = <FontAwesomeIcon icon={faPlus} />
    return (
        <div className='mt-5'>
            <button className='bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold flex w-fit'> Add Filters</button>
        </div>
    )
}

export default Active