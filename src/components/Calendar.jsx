import React, {useState, useEffect}from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)

export default function Calendar(){

  const [trainings, setTrainings] = useState([]);

  useEffect(() => fetchData(),[]);

  const fetchData = () => {
      fetch('https://customerrestservice-personaltraining.rahtiapp.fi/gettrainings')
      .then(response => response.json())
      .then(data => setTrainings(data))
  }

  const events = trainings.map(trainings => ({
      title: trainings.activity,
      start: moment(trainings.date).toDate(),
      end: moment(trainings.date).add(trainings.duration, 'minutes').toDate()
    }));

  return(
    <>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{height: 600}}
      />
    </>
  )

}
 
