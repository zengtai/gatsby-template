import * as React from "react"
import axios from "axios"
import { ADS_SLOT_ID } from "../lib/constants"
import Banner from "../components/banner"

const HomePage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-sky-500">
        <header className="h-20 bg-black/10">Test for Adsense</header>
        <main className="grow bg-black/20">
          <Banner
            className={`banner`}
            style={{ display: "block" }}
            slot={ADS_SLOT_ID.home}
            responsive="false"
          />
        </main>
        <footer className="h-20 bg-black/10"></footer>
      </div>
    </>
  )
}

export default HomePage
