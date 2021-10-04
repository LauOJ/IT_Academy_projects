import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([ 
  interactionPlugin,
  dayGridPlugin,
  timeGridPlugin
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {

      Events: Object[] = [];
      calendarOptions: CalendarOptions;
      
    // calendarOptions: CalendarOptions = {
    //   initialView: 'dayGridMonth',
    //       dateClick: this.onDateClick.bind(this),
    //       events: this.Events,
    //       plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    //       headerToolbar: {
    //         left: 'prev,next today',
    //         center: 'title',
    //         right: 'dayGridMonth,timeGridWeek,timeGridDay'          },
    // };

       constructor(private httpClient: HttpClient) { }


    onDateClick(res: any) {
      alert('You clicked on : ' + res.dateStr)
    }

    ngOnInit(){
      setTimeout(() => {
        return this.httpClient.get('http://localhost/events.php')
          .subscribe(res => {
              this.Events.push(res);
              console.log(this.Events);
          });
      }, 1200);

      setTimeout(() => {
        this.calendarOptions = {
          initialView: 'dayGridMonth',
          dateClick: this.onDateClick.bind(this),
          events: 'http://localhost/events.php',
          plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'          },

        };
      }, 3500);

      
          
      }  
}