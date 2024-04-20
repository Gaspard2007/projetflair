import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import { Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@/ui/calendrierPlanningMonth.css';

const Home: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Liste d'exemple d'événements
  const events = [
    {
      title: 'Nom du service',
      start: '2024-04-18T15:00:00',
      end: '2024-04-18T15:45:00',
      status: 'workIn',
      client: 'Miss kitty',
      extendedProps: {
        monthContent: 'Contenu pour la vue mensuelle'
      }
    },
    {
      title: 'Nom du service',
      start: '2024-04-01T08:00:00',
      end: '2024-04-01T09:45:00',
      status: 'finish',
      client:'Aïsha',
      extendedProps: {
        monthContent: 'Contenu pour la vue mensuelle'
      }
    },
    {
      title: 'Nom du service',
      start: '2024-04-17T15:00:00',
      end: '2024-04-17T17:00:00',
      status: 'cancel',
      client:'Eulalie',
      extendedProps: {
        monthContent: 'Contenu pour la vue mensuelle'
      }
    },
    {
      title: 'Nom du service',
      start: '2024-04-18T10:00:00',
      end: '2024-04-18T12:30:00',
      status: 'finish',
      client:'Lila',
      extendedProps: {
        monthContent: 'Contenu pour la vue mensuelle'
      }
    },
    {
      title: 'Nom du service',
      start: '2024-04-18T12:30:00',
      end: '2024-04-18T14:30:00',
      status: 'workIn',
      client:'Jeanne',
      extendedProps: {
        monthContent: 'Contenu pour la vue mensuelle'
      }
    },
    {
      title: 'Nom du service',
      start: '2024-04-18T08:00:00',
      end: '2024-04-18T09:30:00',
      status: 'cancel',
      client:'Aïsha',
      extendedProps: {
        monthContent: 'Contenu pour la vue mensuelle'
      }
    },
    {
      title: 'Nom du service',
      start: '2024-04-19T16:00:00',
      end: '2024-04-19T18:00:00',
      status: 'workIn',
      client:'Violette',
      extendedProps: {
        monthContent: 'Contenu pour la vue mensuelle'
      }
    },
    
  ];

  const handleEventClick = (clickInfo: any) => {
    const { event } = clickInfo;
    const { title, start, end, extendedProps } = event;
    const status = extendedProps.status;
    const nomParticulier = extendedProps.client;

    setSelectedEvent({
      title,
      start,
      end,
      status,
      nomParticulier
    });

    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const renderEventContent = (info: any) => {
    const { view } = info;
    const { title, start, end, extendedProps } = info.event;
    const status = extendedProps.status;
    const nomParticulier = extendedProps.client;
    const formattedStartTime = new Date(start).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

    let eventStyle = {};
    if (status === 'finish') eventStyle = { background: '#C0FFCA', color: '#2DB742' };
    else if (status === 'cancel') eventStyle = { background: '#F6B3B3', color: '#FF0000' };
    else if (status === 'workIn') eventStyle = { background: '#9E99DD', color: '#4C40ED' };
    let eventStyleForWeekSee = {};
    if (status === 'finish') eventStyleForWeekSee = { background: '#2DB742', color:'white' };
    else if (status === 'cancel') eventStyleForWeekSee = { background: '#FF0000', color:'white' };
    else if (status === 'workIn') eventStyleForWeekSee = { background: '#4C40ED', color:'white' };
    if (view.type === 'dayGridMonth') {
      return (
        <div
          style={{ ...eventStyle, borderRadius: '5%' }}
          className="event-month text-sm flex"
          onClick={() => handleEventClick(info)}
        >
          {formattedStartTime}
          <div style={{ marginLeft: '3px' }}>{title}</div>
        </div>
      );
    } else if (view.type === 'timeGridWeek' || view.type === 'timeGridDay') {
      const formattedEndTime = new Date(end).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

      return (
        <div
        className="event-weekday rounded"
        style={{
          ...eventStyleForWeekSee,
          height: '100%',
          scrollBehavior: 'smooth',
          paddingLeft: '2%'
        }}
        onClick={() => handleEventClick(info)}
      >
       <div className='flex items-center'>
        <span
          style={{
            borderRadius: '50%', 
            height: '10px',
            width: '10px',
            background: 'white',
            display: 'flex', 
            marginRight: '5px' 
          }}
        ></span>
        <p className='text-sm'>{title}</p>
        </div>
        <div className="flex items-center">
          <img
            className="h-[39px] w-[39px] relative rounded-[50%] object-cover"
            src={'/profil.avif'}
            alt="Event Image"
          />
          <p className="text-sm" style={{ marginLeft: '7px' }}>
            {nomParticulier}
          </p>
        </div>
        <div className='flex items-center'>
          <img src="/clockWhite.svg" alt="" />
          <p style={{ marginLeft: '5px' }} className="text-sm">
            {formattedStartTime} - {formattedEndTime}
          </p>
        </div>
      </div>
 
      );
    }

    return null;
  };

  return (
    <>
     
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-gray-700">Calendrier</h1>
</nav>

    


      <div>
      <FontAwesomeIcon icon="chevron-left" />
<FontAwesomeIcon icon="chevron-right" />
      <FullCalendar
  plugins={[dayGridPlugin, timeGridPlugin]}
  locale={frLocale}
  headerToolbar={{
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  }}
  initialView="dayGridMonth"
  allDaySlot={false}
  height={'auto'}
  events={events}
  eventContent={renderEventContent}
  buttonIcons={{
    prev: 'chevron-left', 
    next: 'chevron-right' 
  }}
/>

      </div>

 
      {selectedEvent && (
        <Modal
          title="Rendez-vous :"
          visible={isModalOpen}
          onCancel={handleOk}
          footer={null}
        >
          <div>
            <p>Titre : {selectedEvent.title}</p>
            <p>Client : {selectedEvent.nomParticulier}</p>
            <p>Début : {new Date(selectedEvent.start).toLocaleString()}</p>
            <p>Fin : {new Date(selectedEvent.end).toLocaleString()}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Home;
