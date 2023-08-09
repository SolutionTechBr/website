import React from 'react'
import './Team.scss'
import Heading from '../../components/Headings/Heading'
import TeamCard from './TeamCard'

const Team = () => {
  document.title = 'Solucions Tech | Serviços';

  const servicos = [
    {
      name: 'Site Dedicado',
      position: 'Basic',
      image: './img/logo.png',
      about: "Sites dinamicos e estádicos!.", 
      value: "R$120,00",
      id: "0"
    },
    {
      name: 'Site Dedicado',
      position: 'Basic',
      image: './img/logo.png',
      about: "Sites dinamicos e estádicos!.", 
      value: "R$120,00",
      id: "1"
    },
    {
      name: 'Site Dedicado',
      position: 'Basic',
      image: './img/logo.png',
      about: "Sites dinamicos e estádicos!.", 
      value: "R$120,00",
      id: "2"
    },
    {
      name: 'Site Dedicado',
      position: 'Basic',
      image: './img/logo.png',
      about: "Sites dinamicos e estádicos!.", 
      value: "R$120,00",
      id: "3"
    },
    {
      name: 'Site Dedicado',
      position: 'Basic',
      image: './img/logo.png',
      about: "Sites dinamicos e estádicos!.", 
      value: "R$120,00",
      id: "5"
    },
    {
      name: 'Site Dedicado',
      position: 'Basic',
      image: './img/logo.png',
      about: "Sites dinamicos e estádicos!.", 
      value: "R$120,00",
      id: "6"
    },
    {
      name: 'Site Dedicado',
      position: 'Basic',
      image: './img/logo.png',
      about: "Sites dinamicos e estádicos!.", 
      value: "R$120,00",
      id: "7"
    },
    {
      name: 'Site Dedicado',
      position: 'Basic',
      image: './img/logo.png',
      about: "Sites dinamicos e estádicos!.", 
      value: "R$120,00",
      id: "8"
    },
    
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