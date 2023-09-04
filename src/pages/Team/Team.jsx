import React from 'react'
import './Team.scss'
import Heading from '../../components/Headings/Heading'
import TeamCard from './TeamCard'

const Team = () => {
  document.title = 'Solucions Tech | Serviços';

  const servicos = [
    {
      name: 'Criação de Sites',
      position: 'Basic',
      image: './img/logo.png',
      about: "Criamos sites com design responsivo, segurança e desempenho. Tire suas idéias do papel, ajudamos você a divulgar seu negócio para o mundo.", 
      value: "Saiba mais ...",
      id: "0"
    },
    {
      name: 'Cátalogo de Produtos',
      position: 'Basic',
      image: './img/logo.png',
      about: ": Uma plataforma digital que organiza, apresenta e facilita a compra de produtos de uma empresa, melhorando a visibilidade e acessibilidade dos produtos aos clientes.", 
      value: "Saiba mais ...",
      id: "1"
    },
    {
      name: 'Data Science',
      position: 'Basic',
      image: './img/logo.png',
      about: "Um campo que utiliza técnicas e algoritmos para coletar, analisar e interpretar grandes volumes de dados, fornecendo insights valiosos e tomadas de decisão informadas para empresas e organizações.", 
      value: "Saiba mais ...",
      id: "2"
    },
    {
      name: 'E-mail Corporativo',
      position: 'Basic',
      image: './img/logo.png',
      about: "Tenha um email próprio para o seu negócio, transmita confiança para os seus clientes enviando emails com a sua marca email@suaempresa.com.br.", 
      value: "Saiba mais ...",
      id: "3"
    },
    {
      name: 'Otimização SEO',
      position: 'Basic',
      image: './img/logo.png',
      about: "Ajudamos você a apareçer nas primeiras posições do Google ® através do serviço de otimização de pesquisa (SEO), saia na frente da concorrência.", 
      value: "Saiba mais ...",
      id: "5"
    },
    {
      name: 'Consultoria em T.I',
      position: 'Basic',
      image: './img/logo.png',
      about: "Estamos aqui para ajudá-lo a lidar com o mundo da tecnologia que as vezes parece muito complicado. Vamos descomplicar, deixe com a gente!", 
      value: "Saiba mais ...",
      id: "6"
    }
    
  ]

  return (
    <div className='pt-16'>
      <Heading heading="Serviços"></Heading>
      <div className='my-20 mx-5 flex flex-wrap gap-10 items-center justify-center' id='team_main'>
        {servicos.map((servico, id) => (
          <TeamCard servico={servico} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Team