import React from 'react'
import AllFilterInfo from 'utils/all.json'
function AllFilter() {
    var filters = [{ name: "fikayo", value: "jet" }]; var newFilter;

    function SelectedFilter(e) {
        newFilter = {
            name: e.target.name,
            value: e.target.value
        }
        if (e.target.checked == true) {
            //Check if filter already exists
            for (var i = 0; i < filters.length; i++) {
                if ((filters[i].name === newFilter.name) && (filters[i].value === newFilter.value)) {
                    console.log("exists")
                    break;
                }
                else {
                    filters.push(newFilter)
                    props.filterHandler(filters)
                }
            }
        }
    }
    function ShowOptions(e) {
        e.target.nextSibling.classList.toggle("hidden")
    }
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 space-y-5 space-x-5 mx-auto w-11/12 '>

            {
                AllFilterInfo.map(info => (
                    <div key={info.name} className='flex self-center justify-between ml-5 mt-5 border-b-2 pb-2'>
                        <h1>{info.name}</h1>
                        <div type="checkbox" className='w-1/2 p-1 rounded-lg' >
                            <button onClick={ShowOptions} className='bg-white rounded-lg  py-1 px-2 w-full text-left'> Any</button>
                            <div className='px-6 space-y-2 rounded-lg  hidden  absolute mt-3 bg-white'>
                                <div className='block'>
                                    <input type="checkbox" name="industry" value="Consumer Electronics" className='mr-2' onClick={SelectedFilter} />Biotechnology
                                </div>
                                <div className='block'>
                                    <input type="checkbox" name="industry" value="Semiconductors" className='mr-2' onClick={SelectedFilter} />Semiconductors
                                </div>
                                <div className='block'>
                                    <input type="checkbox" name="industry" value="Internet retail" className='mr-2' onClick={SelectedFilter} />Internet Retail
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default AllFilter