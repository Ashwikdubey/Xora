import React from 'react'
import { Element } from 'react-scroll'
import { details, features } from '../constants'
import Button from './Button'

const Features = () => {
  return (
    <section>
        <Element name="features">
            <div className="container">
                <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s2 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
                    {features.map((f)=>(
                        <div className='relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:rounded-3xl max-md:border-s3 max-md:flex-320' key={f.id}>
                            <div className='w-full flex justify-start items-start'>
                                <div className='-ml-3 mb-12 flex flex-col items-center justify-center'>
                                    <div className='w-0.5 h-16 bg-s4'/>
                                    <img src={f.icon} className='size-28 object-contain' alt="icon" />
                                </div>
                            </div>
                            <p className='caption mb-5 max-md:mb-6'>{f.caption}</p>
                            <h2 className='max-w-400 mb-7 h3 text-p4  max-md:h5 max-md:mb-6'>{f.title}</h2>
                            <p className='mb-11 body-1 max-md:mb-8 max-md:body-3'>{f.text}</p>
                            <Button icon={f.button.icon}>{f.button.title}</Button>
                        </div>
                    ))}
                    <ul className='relative flex justify-around flex-grow max-md:hidden px-[5%] border-2 border-s3 rounded-7xl'>
                        <div className='absolute left-0 right-0 top-[38%] w-full h-[1px] z-10 bg-s3/20'/>
                        {details.map((d)=>(
                            <li className='relative pt-16 px-4 pb-14' key={d.id}>
                                <div className='absolute top-0 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10'/>
                                <div className='flex items-center justify-center mx-auto mb-3 border-2 rounded-full border-s2 hover:border-s4 transition-all duration-500 hover:shadow-500 size-20'>
                                    <img src={d.icon} className='size-17/20 object-contain z-20' alt={d.title} />
                                </div>
                                <h3 className='relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercaee'>{d.title}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Element>
    </section>
  )
}
export default Features