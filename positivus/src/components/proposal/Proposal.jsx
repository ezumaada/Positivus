import React from 'react'
import spidey from '../../assets/images/spidey.png'

const Proposal = () => {
  return (
    <div className='bg-slate-200 rounded-md flex flex-row justify-between items-center'>
        <div>
            <h1 className='font-semibold text-2xl'>Let's make things happen</h1>
            <p>Contact us today to learn more about our digital marketing services can help boost your business grow and succeed online.</p>
            <button className='bg-black px-4 py-2 text-white my-5'>Get your free Proposal</button>
        </div>
        <div>
            <img src={spidey} alt="spidey" />
        </div>
    </div>
  )
}

export default Proposal