import React from 'react'
import StepCard from '../../components/StepCard'

export default function SetpSection() {
    return (
        <div className=' w-full h-[100%] mt-20'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
                <h1 className='main-heading text-4xl font-extrabold text-center'>How IT'S Work</h1>
                <p className='sub-heading text-center mt-5'>Embrace the future of wedding invitations. While maintaining the charm of traditional craftsmanship, our platform adds a digital touch. Share your creations effortlessly and provide couples with a modern, eco-friendly alternative.</p>
                <div className=' flex-wrap mt-5 md:mt-12 flex justify-center items-center gap-4'>

                    <StepCard />
                    <StepCard />
                    <StepCard />
                    <StepCard />
                    <StepCard />
                    <StepCard />

                </div>
            </div>

        </div>
    )
}
