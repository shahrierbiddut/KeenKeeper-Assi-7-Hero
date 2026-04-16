import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            {/* Top Section */}
            <div className='flex flex-col items-center justify-center md:mt-20 mt-10'>
                <h2 className='font-bold md:text-4xl text-3xl'>
                    Friends to keep close in your life
                </h2>

                <p className='max-w-120 text-center text-gray-500 md:my-6 my-3'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <button className='flex items-center gap-2 px-6 py-3 bg-[#244D3F] text-white font-semibold rounded-lg transition-all duration-300 
                hover:bg-[#1a3a2f] 
                hover:scale-[1.03] 
                hover:shadow-xl'>
                    <FaPlus />
                    Add a Friend
                </button>
            </div>

            {/* Cards Section */}
            <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-4 grid-cols-2 gap-8 my-10 '>
                
                {/* Card 1 */}
                <div className='rounded-xl shadow-md ring-1 ring-black/5 
                text-center py-6 px-4 
                transition-all duration-300 
                hover:-translate-y-1 
                hover:shadow-xl 
                hover:ring-[#244D3F]/30'>
                    <h2 className='font-semibold text-2xl'>12</h2>
                    <p className='font-semibold text-gray-500'>Total Friends</p>
                </div>

                {/* Card 2 */}
                <div className='rounded-xl shadow-md ring-1 ring-black/5 
                text-center py-6 px-4 
                transition-all duration-300 
                hover:-translate-y-1 
                hover:shadow-xl 
                hover:ring-green-400/40'>
                    <h2 className='font-semibold text-2xl'>4</h2>
                    <p className='font-semibold text-gray-500'>On Track</p>
                </div>

                {/* Card 3 */}
                <div className='rounded-xl shadow-md ring-1 ring-black/5 
                text-center py-6 px-4 
                transition-all duration-300 
                hover:-translate-y-1 
                hover:shadow-xl 
                hover:ring-yellow-400/40'>
                    <h2 className='font-semibold text-2xl'>8</h2>
                    <p className='font-semibold text-gray-500'>Need Attention</p>
                </div>

                {/* Card 4 */}
                <div className='rounded-xl shadow-md ring-1 ring-black/5 
                text-center py-6 px-4 
                transition-all duration-300 
                hover:-translate-y-1 
                hover:shadow-xl 
                hover:ring-blue-400/40'>
                    <h2 className='font-semibold text-2xl'>12</h2>
                    <p className='font-semibold text-gray-500'>
                        Interactions This Month
                    </p>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-6 border-b border-gray-200 my-6'></div>
        </div>
    );
};

export default Banner;