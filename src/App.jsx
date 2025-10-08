import React from "react"
import Heater from "./components/layout/Heater"
import Footer from "./components/layout/Footer"
import Outlet from "./components/layout/Outlet"

export default function App() {
  return (
    <div className='min-h-screen flex flex-col bg-base-100'>
      <Heater/>
      <main className="flex-1 container mx auto px-4 py-8">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
