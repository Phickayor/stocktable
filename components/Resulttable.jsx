import React, { useState } from 'react'
import infos from "../utils/info.json"
function Resulttable() {
    var background; var percentcolor;
    return (
        <div className="mx-auto w-11/12 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-lg text-black bg-white ">
                    <tr>
                        <th scope="col" className="px-6 py-3">Symbol</th>
                        <th scope="col" colSpan="2" className="px-6 py-3">Company Name</th>
                        <th scope="col" className="px-6 py-3">Market Cap</th>
                        <th scope="col" className="px-6 py-3">Stock Price</th>
                        <th scope="col" className="px-6 py-3">% Change</th>
                        <th scope="col" colSpan="2" className="px-6 py-3">Industry</th>
                        <th scope="col" className="px-6 py-3">Volume</th>
                        <th scope="col" className="px-6 py-3">PE Ratio</th>
                    </tr>
                </thead>
                <tbody className="text-[#111827] font-sans ">
                    {infos.map((info, index) => {
                        if (index % 2 != 0) {
                            background = "white"
                        }
                        else if (index % 2 == 0) {
                            background = "#F6F7F8"
                        }
                        if (info.percentChange > 0) {
                            percentcolor = "green"
                        }
                        else {
                            percentcolor = "red"
                        }
                        return (
                            <tr key={index} className={`bg-[${background}]`}>

                                <td className="px-6 py-4 text-blue-700">{info.symbol}</td>
                                <td colSpan="2" className="px-6 py-4 font-medium">
                                    {info.name}
                                </td>
                                <td className="px-6 py-4">{info.marketcap}B</td>
                                <td className="px-6 py-4">{info.stockprice}</td>
                                <td className="px-6 py-4" style={{ color: percentcolor }}>{info.percentChange}%</td>
                                <td colSpan="2" className="px-6 py-4 font-medium">
                                    {info.industry}
                                </td>
                                <td className="px-6 py-4">{info.volume}</td>
                                <td className="px-6 py-4">{info.peRatio}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Resulttable