import './HomePage.scss'
import Sobre from '../../components/HomePage/Sobre';
import Perguntas from '../../components/HomePage/Perguntas';
import Servicos from '../../components/HomePage/Servicos';
import React from 'react';

const HomePage = () => {
  document.title = 'Solucion Tech | Home';
  return (
    <div className='pt-16 bg-black '>
      <div className='my-[10rem] lg:gap-1 md:gap-2 gap-6 flex-col text-5xl items-center justify-center '>
        <div className="text-grande">
            <h1  data-aos="zoom-in" className=' bg-clip-text bg-gradient-to-r  from-purple-400 to-blue-800'>Seja Líder de </h1>
            <h1 data-aos="zoom-in" className='text-transparent z-10 lg:text-16xl md:text-10xl text-10xl mx-80 bg-clip-text bg-gradient-to-r from-purple-400 to-blue-800'>Mercado! </h1> 
          </div>
          <div class='text-pequeno'>
            <h1 data-aos="zoom-in" >
              Transforme seu negócio com
            </h1>
            <h1 data-aos="zoom-in" >
              recursos modernos e práticos.
            </h1>  
          </div>
          <div data-aos="fade-up" class='imagem'>
            <img data-aos="fade-up" src="./images/fundo2.png" />
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
