import React from 'react'
import './Resumecss.css'
import VISHAL_RESUME from './VISHAL_RESUME.pdf'

function ResumeNew() {
  return (
    <div>
      
        <div className='rsmdwn'>
        <a href={VISHAL_RESUME} download='Resume'>
            <button>Download Resume</button>
        </a>
        </div>
    </div>
  )
}

export default ResumeNew
