import './HomePage.scss'
import Sobre from '../../components/HomePage/Sobre';
import Perguntas from '../../components/HomePage/Perguntas';
import Servicos from '../../components/HomePage/Servicos';
import React from 'react';
import backgroundImg from '../../assets/images/tela2.jpg'; 


const HomePage = () => {
  document.title = 'Solucion Tech | Home';
  return (
    <div>
      <div className='relative lg:top-28 sm:top-52 z-10 px-4 py-5 flex text-center lg:gap-1 md:gap-2 gap-6 flex-col text-5xl font-extrabold'>
        <h1 data-aos="zoom-in" className='z-10 text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-300 to-sky-500'>Abra caminho para o novo!</h1>
      </div>
      <div data-aos="fade-up" className='z-0'>
        <img data-aos="fade-up" className='z-0' src={backgroundImg} />
      </div>
      <div className='lg:mx-[4rem] md:mx-[3rem] mx-[2rem]'>
        <Sobre/>
        <Servicos/>
        <Perguntas/>
      </div>
    </div>
  )
}

export default HomePage
