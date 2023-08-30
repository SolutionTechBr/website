import React from 'react'
import Heading1 from '../Headings/Heading1'
import { Card1, Card2, HighlightCard } from '../Cards/Card'
import { BsFillPeopleFill, BsFillCalendarEventFill } from 'react-icons/bs'
import { RiProjector2Fill } from 'react-icons/ri'
import { AiFillProject } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Sobre = () => {
  const SobreData = [
    {
      id: "0",
      title: "Almente a visibilidade do seu negocio",
      description: "Amplie a visibilidade doseu negocio com diversas ferramentas e estrategias propostas pela Solution Tech e seus parceiros. .",
      image: "/images/img1234.jpg",
    },
    {
      id: "1",
      title: "Otimize seus processos.",
      description: "Temos ferramentas para otimizar o processo de venda, envio de mensagem entre outras soluções.",
      image: "/images/img1234.jpg",
    },
    {
      id: "2",
      title: "Serviço personalizado",
      description: "Diante de analise podemos desenvolcer ferramentas personalizadas para o seu negocio, o processo de crescimento não precisa ser arduo, nunca foi tão facil trabalhar.",
      image: "./images/img1234.jpg",
    }
]


  return (
    <div>
      <div className='my-20'>
        <Heading1 details={"Bem-vindo à Solucion Tech, a parceira ideal para impulsionar seu negócio! Nossa softhouse oferece soluções tecnológicas personalizadas para microempresários."} text1={"Na Solucions Tech"} text2={"Contruimos Sonhos"} />
      </div>
      <div className='my-32 flex flex-wrap gap-10 items-center justify-evenly'>
        <HighlightCard icon={<BsFillPeopleFill className='text-sky-500' size={30} />} type={"Sonhos sendo realizados"} data={100} />
        <HighlightCard icon={<BsFillCalendarEventFill className='text-sky-500' size={30} />} type={"Cidades"} data={10} />
        <HighlightCard icon={<RiProjector2Fill className='text-sky-500' size={30} />} type={"Parceiros Chave"} data={20} />
        <HighlightCard icon={<AiFillProject className='text-sky-500' size={30} />} type={"Sonhos concluidos"} data={10} />
      </div>

      <div className='my-10'>
       <Heading1 details={"Entenda a importância de simplificar a sua jornada de microempreendedor."} text1={"Entenda as"} text2={" Vantangens"}  />
       </div>
      <div className='my-10 flex flex-wrap gap-10 items-center justify-evenly'>
        {SobreData.map((data) => (
          <Card1 key={data.id} title={data.title} description={data.description} image={data.image} />
        ))}
      </div>

      <Heading1 text1={"Aprenda com as"} text2={" Grandes Empresas"} details={"Também conhecidas como 'Big Techs', são corporações de destaque no setor tecnológico, com alcance global e influência significativa em diversas áreas."} />
      <div data-aos="zoom-in" className='flex items-center justify-center mt-5'>
            <Link to='/Servicos'>
                <button className='border-sky-500 text-sky-500 border hover:bg-sky-500 px-8 py-2 rounded-full font-medium ease-in transition-all delay-[10ms] hover:text-white'>
                Conheça mais sobre as Big Techs e suas soluções 
                </button>
            </Link>
      </div>
      <div className='justify-center items-center my-20 flex flex-wrap gap-10  '>
        <Card2 title="Google" company={"Busca Inteligente e Assistente Virtual"} image={"./images/google.jpg"}/>
        <Card2 title="Amazon" company={"Inteligência Artificial e Entrega Avançada"} image={"./images/amazon.jpg"} />
        <Card2 title="Microsoft" company={"Inovação Tecnológica e Soluções Empresariais"} image={"./images/microsoft.png"} />
      </div>
    </div>
  )
}

export default Sobre
