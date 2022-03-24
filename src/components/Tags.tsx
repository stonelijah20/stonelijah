import React from 'react'
import { alltags } from '../files/Data'
import './Tags.css'

const Tags = () => {
  return (
    <div className='tags-section'>
        <div className='tags-section-center'>
            {
            alltags.map((tags, index) => {
                return(
                    <div className='tags' key={index}>
                        <div className='tagbtns'>
                            {tags}
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Tags