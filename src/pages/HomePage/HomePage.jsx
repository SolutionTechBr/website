import React from 'react';
import './HomePage.scss'
import Sobre from '../../components/HomePage/Sobre';
import Perguntas from '../../components/HomePage/Perguntas';
import Servicos from '../../components/HomePage/Servicos';
import backgroundImg from '../../assets/images/fundo8.jpg'; 
import backgroundSeta from '../../assets/images/seta1.png';

const HomePage = () => {
  document.title = 'Solucion Tech | Home';
  return (
    <div>
      <div className='justify-center flex items-center my-[11rem] lg:gap-1 md:gap-2 gap-6 flex-col text-5xl font-bold '>
        <h1 data-aos="zoom-in" className='z-30 font-extrabold text-center text-transparent lg:text-8xl md:text-6xl text-5xl mx-8 bg-clip-text bg-gradient-to-r from-sky-500 to-sky-500'>Seja Líder de Mercado!</h1>
        <h1 data-aos="zoom-in" className='z-30 font-bold text-center text-transparent lg:text-4xl md:text-3xl text-3xl mx-5 bg-clip-text bg-gradient-to-b from-gray-100 to-gray-300 my-3'> Transforme seu negócio com recursos modernos e práticos.</h1>
        <img data-aos="fade-up" src={backgroundImg} className='z-0 blur-sm absolute inset-0 w-full h-full object-cover' alt="fundo-home" />
        
        <div className="flex flex-col z-30 lg:my-16 md:my-10"  alt="arrows-container">
          <img data-aos="fade-up" className="animate-bounce  h-[3rem] w-[5rem] transition-opacity  mx-8 mb-2" src={backgroundSeta} alt="arrows1"></img>
          <img data-aos="fade-up" className="animate-bounce  h-[3rem] w-[5rem] transition-opacity  mx-8 mb-2" src={backgroundSeta} alt="arrows2"></img>
          <img data-aos="fade-up" className="animate-bounce  h-[3rem] w-[5rem] transition-opacity  mx-8 mb-2" src={backgroundSeta} alt="arrows3"></img>
        </div>
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
