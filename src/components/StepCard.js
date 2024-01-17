import React from 'react'

export default function StepCard() {
    // fot push code
    return (
        <div class="max-w-[300px] md:max-w-sm  step-card mx-auto text-white  rounded-2xl overflow-hidden shadow-lg ">
            <h1 className=' mt-10 text-3xl font-bold text-center'>Step Login And </h1>
            <p className=' text-9xl font-extrabold text-center p-3'>1</p>
            {/* <img class="w-full h-48 object-cover" src="https://placekitten.com/600/400" alt="Card Image" /> */}
            <div class="p-6">
                <h2 class="text-xl font-semibold mb-2">Card Title</h2>
                <p class="text-gray-300 text-1xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="mt-4">
                    <a href="#" class="text-blue-500">Read more</a>
                </div>
            </div>
        </div>

    )
}
