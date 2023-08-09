import React from 'react'

const TeamCard = ({ servico }) => {
    return (
        <div data-aos="zoom-in" className='border border-gray-800 bg-[#0f0e0e] hover:bg-[#131212] p-5 rounded-3xl transition-all delay-[30ms] ease-in-out hover:border-gray-700 hover:scale-[101%] border-b-4 border-b-sky-700 hover:border-b-sky-500' id="Team_main_1">
            <div className='flex items-center justify-center my-3'>
                <div>
                    <img className='rounded-full h-[6.7rem] w-[6.7rem]  border-2 border-[#121212] border-y-sky-500 border-r-sky-500 p-1' id='Team_img' src={servico.image} alt={servico.image} />
                </div>
            </div>

            <div className='text-xl'>
                {servico.name}
            </div>
            <div className='text-sky-500 font-medium text-lg'>
                {servico.position}
            </div>
            <div className='text-gray-400 my-3 text-sm'>
                {servico.about}
            </div>
            <div className='py-3'>
                <a href={`mailto:${servico.value}`} >
                    <span className='text-sky-400 px-4 py-1.5 rounded-xl bg-sky-900'>{servico.value}</span>
                </a>
            </div>

        </div>
    )
}

export default TeamCard