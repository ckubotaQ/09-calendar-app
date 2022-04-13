import React from 'react'
import { NavBar } from '../ui/NavBar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'moment/locale/es';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import {messages} from '../../helpers/calendarmessages';
import moment from 'moment';

moment.locale('es');
const localizer = momentLocalizer(moment) ;
const  events = [{title:"Cumpleaños", start: moment().toDate(), end: moment().add(2, 'hours').toDate(), bgcolor: '#fafafa'}];
export const CalendarScreen = () => {
    const eventStyleGetter = () => {
    
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
    />
        </div>
    )
}
