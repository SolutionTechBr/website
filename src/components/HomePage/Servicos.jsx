import React from 'react'
import Heading1 from '../Headings/Heading1'
import { Link } from 'react-router-dom'

const Servicos = () => {

    const Servicoss = [
        {
            name: "Site Dedicado",
            icon: "./images/blockchain.png"
        },
        {
            name: "Cátalogo de Produto",
            icon: "./images/electrical.png"
        },
        {
            name: "Data Science",
            icon: "./images/web.png"
        },
        {
            name: "Domínio Personalizado",
            icon: "./images/content.png"
        },
        {
            name: "Número Virtual",
            icon: "./images/marketing.png"
        },
        {
            name: "E muito mais ...",
            icon: "./images/social.png"
        }
    ]
    return (
        <div className='pt-10'>
            <Heading1 details={"Descubra como alavancar seu negócio com facilidade! Você já imaginou ter todas as ferramentas necessárias para vender seus produtos e expandir seu alcance ?"} text1={"Serviços para o seu"} text2={"negocio"} />
            <div className='flex items-center lg:flex-row md:flex-row flex-col justify-center lg:gap-x-16 md:gap-x-8 w-full mt-0'>
                <div className='flex flex-col items-center justify-center gap-5 mt-5'>
                    {Servicoss.slice(0, 3).map((Servicos, idx) => <div data-aos="zoom-in" key={idx} className='flex lg:w-96 md:w-80 w-72 items-center bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border p-2.5 rounded-2xl gap-4'>
                        <div className='bg-gray-900 p-1.5 rounded'>
                            <img src={Servicos.icon} alt="blockchain" className='h-8 w-8' />
                        </div>
                        <div>
                            <p className='lg:text-xl md:text-xl text-lg text-gray-200 font-semibold pr-10'>{Servicos.name} </p>
                        </div>
                    </div>)}
                </div>

                <div className='flex flex-col items-center justify-center gap-5 mt-5'>
                    {Servicoss.slice(3, 8).map((Servicos, idx) => <div data-aos="zoom-in" key={idx} className='flex lg:w-96 md:w-80 w-72 items-center bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border p-2.5 rounded-2xl gap-4'>
                        <div className='bg-gray-900 p-1.5 rounded'>
                            <img src={Servicos.icon} alt="blockchain" className='h-8 w-8' />
                        </div>
                        <div>
                            <p className='lg:text-xl md:text-xl text-lg text-gray-200 font-semibold pr-10'>{Servicos.name} </p>
                        </div>
                    </div>)}
                </div>
            </div>

            <div data-aos="zoom-in" className='flex items-center justify-center mt-5'>
            <Link to='/Servicos'>
                <button className='border-sky-500 text-sky-500 border hover:bg-sky-500 px-8 py-2 rounded-full font-medium ease-in transition-all delay-[10ms] hover:text-white'>
                    Conheça todos os nossos Serviços
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Servicos