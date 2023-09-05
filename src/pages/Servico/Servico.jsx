import React from 'react'
import './ServicoStyle.scss'
import Heading from '../../components/Headings/Heading'
import ServicoCard from './ServicoCard'
import { BsCheck } from 'react-icons/bs'

const Servico = () => {
  document.title = 'Solucions Tech | Serviços';

  const servicos = [
    {
      name: 'Criação de Sites',
      image: 'images/globo.png',
      about: "Criamos sites com design responsivo, segurança e desempenho. Tire suas idéias do papel, ajudamos você a divulgar seu negócio para o mundo.", 
      value: "Saiba mais ...",
      icon1: "Domínio",
      icon2: "Hospedagem",
      icon3: "Design Personalizado",
      icon4: "Responsivo",
      icon5: "Certificado SSL",
      id: "0"
    },
    {
      name: 'Cátalogo de Produtos',
      image: 'images/lista.png',
      about: "Uma plataforma digital que organiza, apresenta e facilita a compra de produtos de uma empresa, melhorando a visibilidade e acessibilidade dos produtos aos clientes.", 
      value: "Saiba mais ...",
      icon1: "Apresentação Visual",
      icon2: "Facilidade de Pesquisa",
      icon3: "Preços e Disponibilidade",
      icon4: "Organização",
      icon5: "Otimização",
      id: "1"
    },
    {
      name: 'Data Science',
      image: 'images/datascience.png',
      about: "Um campo que utiliza técnicas e algoritmos para coletar, analisar e interpretar grandes volumes de dados, fornecendo insights valiosos e tomadas de decisão informadas para empresas e organizações.", 
      value: "Saiba mais ...",
      icon1: "Favorece o marketing",
      icon2: "Previsão de demandas",
      icon3: "Aperfeiçoar tomadas de decisões",
      icon4: "Melhorar o desempenho",
      icon5: "Mantenha mais clientes",
      id: "2"
    },
    {
      name: 'E-mail Corporativo',
      image: 'images/e-mail.png',
      about: "Tenha um email próprio para o seu negócio, transmita confiança para os seus clientes enviando emails com a sua marca email@suaempresa.com.br.", 
      value: "Saiba mais ...",
      icon1: "Domínio",
      icon2: "Hospedagem",
      icon3: "Configuração",
      icon4: "Backup",
      icon5: "E-Mail Profissional",
      id: "3"
    },
    {
      name: 'Otimização SEO',
      image: 'images/lupa.png',
      about: "Ajudamos você a apareçer nas primeiras posições do Google ® através do serviço de otimização de pesquisa (SEO), saia na frente da concorrência.", 
      value: "Saiba mais ...",
      icon1: "Consultoria",
      icon2: "Programação SEO-Friendly",
      icon3: "Google Analytics ®",
      icon4: "Google Search Console ®",
      icon5: "Apareça Primeiro na Pesquisa",
      id: "5"
    },
    {
      name: 'Consultoria em T.I',
      image: 'images/maleta.png',
      about: "Estamos aqui para ajudá-lo a lidar com o mundo da tecnologia que as vezes parece muito complicado. Vamos descomplicar, deixe com a gente!", 
      value: "Saiba mais ...",
      icon1: "Para Empresas",
      icon2: "Governança de TI",
      icon3: "Gestão de TI",
      icon4: "Consultoria de Sistemas",
      icon5: "Para Pequenas Empresas",
      id: "6"
    }
    
  ]

  return (
    <div className='pt-16'>
      <Heading heading="Serviços"></Heading>
      <div className='my-20 mx-5 flex flex-wrap gap-10 items-center justify-center' id='Servico_main'>
        {servicos.map((servico, id ) => (
          <ServicoCard icon={<BsCheck className='text-sky-500' size={30} />} servico={servico} key={id}/>
        ))}
      </div>
    </div>
  )
}

export default Servico