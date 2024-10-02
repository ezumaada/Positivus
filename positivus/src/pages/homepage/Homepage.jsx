import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Logos from '../../components/logos/Logos';
import Services from '../../components/services/Services';
import Proposal from '../../components/proposal/Proposal';
import Cases from '../../components/cases/Cases';

const Homepage = () => {
  return (
    <div className='mx-[5vw]'>
        <Navbar/>
        <Header/>
        <Logos/>
        <Services/>
        <Proposal/>
        <Cases/>
      

      <section id="pricing" className="h-screen bg-gray-400">
        <h1>Pricing Section</h1>
        <p>Content for the Pricing section...</p>
      </section>

      <section id="help" className="h-screen bg-gray-500">
        <h1>Help Section</h1>
        <p>Content for the Help section...</p>
      </section>

      <section id="quote-request" className="h-screen bg-gray-600">
        <h1>Request a Quote Section</h1>
        <p>Content for the Request a Quote section...</p>
      </section>
    </div>
  )
}

export default Homepage