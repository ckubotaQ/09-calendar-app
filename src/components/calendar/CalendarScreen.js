import React from 'react'
import { NavBar } from '../ui/NavBar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'moment/locale/es';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import {messages} from '../../helpers/calendarmessages';
import moment from 'moment';
import {CalendarEvents} from '../calendar/CalendarEvents';
import { useState } from 'react';
import { CalendarModal } from './CalendarModal';
moment.locale('es');
const localizer = momentLocalizer(moment) ;
const  events = [{title:"Cumpleaños", 
start: moment().toDate(), 
end: moment().add(2, 'hours').toDate(), 
bgcolor: '#fafafa',
notes:"Comprar chupe",
user:{
    _id:'123',
    name:"Carlos",
}
}];
export const CalendarScreen = () => {
    const [lastView, setlastView] = useState( localStorage.getItem('lastView') || 'month');
    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#901199',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white',

        }
        return {
            style
        }
    }
    //Functions to events
    const onDoubleClickEvent = (e) => {
        console.log({e})
    
    }
    const onSelectEvent = (e) => {
        console.log({e})
    }
    const onViewChanges = (e)   => {
        localStorage.setItem('lastView', e);
        setlastView(e);
    }


    
    return (
        <div
        className="calendar-screen"
        >
            <NavBar/>
            <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      messages={messages}
      eventPropGetter={eventStyleGetter}
      components={{
          event: CalendarEvents
      }}
      view={lastView}
      onDoubleClickEvent={onDoubleClickEvent}
      onSelectEvent={onSelectEvent}
      onView={onViewChanges}
    />
    <CalendarModal/>
        </div>
    )
}
