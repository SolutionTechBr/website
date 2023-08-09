import React from 'react';
import Heading1 from '../Headings/Heading1';
import { EventCard } from '../Cards/Card';
import { Link } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';

const Event = () => {
  const events = [
    {
      id: 0,
      name: "Tecnologia Blockchain para Aplicações de Próxima Geração",
      tag: "Blockchain",
      description: 'Programa de Desenvolvimento Docente sobre "Tecnologia Blockchain para Aplicações de Próxima Geração"',
      date: "19 a 24 de junho de 2023",
      time: "10:00",
      venue: "Vishwesharaiya Hall"
    },
    {
      id: 1,
      name: "Acampamento de Algoritmos",
      tag: "Blockchain",
      description: "Um workshop de 3 dias sobre Tecnologia Blockchain pela Fundação Algorand.",
      date: "25 de janeiro de 2023",
      time: "10:00",
      venue: "Meghnad Saha Hall"
    },
    {
      id: 2,
      name: "Sessão de Informações do EduDAO",
      tag: "Tecnologia",
      description: "Uma sessão de informações sobre o EduDAO, um DAO para estudantes feito por estudantes.",
      date: "2 de maio de 2023",
      time: "17:00",
      venue: "Meghnad Saha Hall"
    }
  ];

  return (
    <div>
      <Heading1 details={"Experimente nossos eventos exclusivos, workshops, sessões com especialistas e valiosas oportunidades de networking. Fique atento para atualizações sobre os próximos eventos!"} text1={"Nossos"} text2={"Eventos Exclusivos"} />
      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        {events.map((event) => (
          <EventCard data={event} key={event.id} />
        ))}
      </div>

      <Link
        data-aos="zoom-in"
        style={{ textDecoration: "none" }}
        to="/events"
        className='bg-sky-600 absolute lg:right-32 md:right-16 right-10 hover:bg-sky-500 text-white visited:text-white font-semi-bold py-2.5 px-5 rounded-full flex items-center -mt-10'
      >
        <button className="mr-2 text-white text-sm">
          Ver Todos
        </button>
        <RxArrowRight size={18} />
      </Link>
    </div>
  );
};

export default Event;
