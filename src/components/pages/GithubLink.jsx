import React from 'react'
import { Link } from 'react-router-dom'

const GithubLink = () => {
    return (
        <div className='min-h-[90vh] bg-black flex justify-center items-center border-b border-white/40'>
            <Link to="https://github.com/sandeep-luhaniwal/upskill-react/tree/dom" target='_blank' className='text-2xl hover:text-red duration-300 text-white'>Github Link is here</Link>
        </div>
    )
}

export default GithubLink
