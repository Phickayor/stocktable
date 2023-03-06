// Pass from Company filter to Filter to index to Resultttable

import Filter from '@/components/Filter'
import Resulttable from '@/components/Resulttable'
import Head from 'next/head'
import SetFilteredInfo from '@/components/Resulttable'
import { useState } from 'react'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
export default function Home({ filterdetails }) {
  var FiltersForTable = []
  function setFilter(details) {
    FiltersForTable.push(details)
    console.log(FiltersForTable)
    SetFilteredInfo()
  }
  filterdetails = FiltersForTable
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Filter setFilterHandler={setFilter} />
      <Resulttable filterdetails={filterdetails} />
    </>
  )
}
