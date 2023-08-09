import React from 'react'
import Heading1 from '../Headings/Heading1'
import Heading2 from '../Headings/Heading2'
import { Card1, Card2, HighlightCard } from '../Cards/Card'
import { BsFillPeopleFill, BsFillCalendarEventFill } from 'react-icons/bs'
import { RiProjector2Fill } from 'react-icons/ri'
import { AiFillProject } from 'react-icons/ai'

const About = () => {
  const aboutData = [
    {
      id: "0",
      title: "Potencialize sua Identidade Visual e Acessibilidade.",
      description: "Criamos uma identidade visual personalizada para a sua empresa, além de implantar ferramentas que garantem que seus clientes tenham acesso prático e rápido aos seus produtos e serviços.",
      image: "/images/img1234.jpg",
    },
    {
      id: "1",
      title: "Desvende o verdadeiro potencial do seu negócio.",
      description: "Através de uma consulta inicial, proporcionamos uma visão ampla do potencial de crescimento da sua empresa, identificando oportunidades estratégicas e oferecendo insights valiosos para alcançar o sucesso.",
      image: "/images/img1234.jpg",
    },
    {
      id: "2",
      title: "Conecte-se à Inovação",
      description: "Descubra como obter retornos financeiros de forma mais eficiente, sem se sobrecarregar com excesso de trabalho. Na Solucion Tech, oferecemos uma incrível oportunidade para você se conectar à inovação e explorar novas abordagens tecnológicas para impulsionar o seu negócio..",
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
        {aboutData.map((data) => (
          <Card1 key={data.id} title={data.title} description={data.description} image={data.image} />
        ))}
      </div>

      <Heading2 text1={"Aprenda com as"} text2={" Grandes Empresas"} />
      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        <Card2 title="Google" company={"Busca Inteligente e Assistente Virtual"} image={"./images/google.jpg"}/>
        <Card2 title="Amazon" company={"Inteligência Artificial e Entrega Avançada"} image={"./images/amazon.jpg"} />
        <Card2 title="Microsoft" company={"Inovação Tecnológica e Soluções Empresariais"} image={"./images/microsoft.png"} />
      </div>
    </div>
  )
}

export default About
