import React from 'react';
import { Inject, ScheduleComponent, Day, Week, Month, Agenda} from '@syncfusion/ej2-react-schedule';

export default function Calendar(){
  return(
    <ScheduleComponent>
      <Inject services={[Day, Week, Month, Agenda]} />
    </ScheduleComponent>
  )

}

