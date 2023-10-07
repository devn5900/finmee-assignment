import React from 'react'
import { data } from '../utills/data'
import InfoCards from './InfoCards'

const Home = () => {
  return (
    <div className='w-[90%] m-auto my-10'>
        <div className='flex flex-col gap-16'>
            {
                data.map((el,i)=>{
                    return <InfoCards key={i} {...el} i={i} />
                })
            }
        </div>
    </div>
  )
}

export default Home