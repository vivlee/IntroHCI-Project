$(document).ready(function () {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var lastView;
    var daySource = new Object();
    daySource.title = 'DAY'; // this should be string
    daySource.start = new Date(y, m, d); // this should be date object
    daySource.end = new Date(y, m, d);

    var day = new Array();
    day[0] = daySource;

    var monthSource = new Object();
    monthSource.title = 'MONTH'; // this should be string
    monthSource.start = new Date(y, m, d); // this should be date object
    monthSource.end = new Date(y, m, d);

    var month = new Array();
    month[0] = monthSource;

    $('#calendar').fullCalendar({
    	dayClick: function(date) {
    		alert('day clicked');
    		var myEvent = {
  				title:"my new event",
  				allDay: true,
  				start: date,
  				end: date
			};
			$('#calendar').fullCalendar('renderEvent', myEvent);

    	},
    	eventClick: function() {
    		alert('event clicked');
    	},
    	eventMouseover: function()  {
    		alert('event mouseover');
    	},   
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        columnFormat: {
            month: 'ddd',
            week: 'ddd d/M',
            day: 'dddd d/M'
        },
        viewDisplay: function (view) {
            if (lastView == 'undefined') {
                lastView = 'firstRun';
            }
            if (view.name !== lastView) {
                if (view.name == 'agendaWeek') {
                    $('#calendar').fullCalendar('addEventSource', month);
                    $('#calendar').fullCalendar('removeEventSource', day);
                    $('#calendar').fullCalendar('removeEventSource', day);
                    $('#calendar').fullCalendar('renderEvents');
                }
                if (view.name == 'agendaDay') {
                    $('#calendar').fullCalendar('addEventSource', day);
                    $('#calendar').fullCalendar('removeEventSource', month);
                    $('#calendar').fullCalendar('removeEventSource', month);
                    $('#calendar').fullCalendar('renderEvents');
                }
                if (view.name == 'month') {
                    $('#calendar').fullCalendar('addEventSource', month);
                    $('#calendar').fullCalendar('removeEventSource', day);
                    $('#calendar').fullCalendar('removeEventSource', day);
                    $('#calendar').fullCalendar('renderEvents');
                }
                lastView = view.name;
            }
        },
        timeFormat: { // for event elements
            agendaDay: '',
            agendaWeek: '',
            month: '',
                '': 'h(:mm)t' // default
        }
    });
    $('#calendar').fullCalendar('addEventSource', month);
    
    $('#calendar').fullCalendar({
    dayClick: function(date, allDay, jsEvent, view) {

        if (allDay) {
            // Clicked on the entire day 

            if ($(jsEvent.target).is('div.fc-day-number')) {      
                // Clicked on the day number 

                $('#calendar') 
                    .fullCalendar('changeView', 'agendaDay'/* or 'basicDay' */) 
                    .fullCalendar('gotoDate', date.getFullYear(), date.getMonth(), date.getDate()); 
            }
        }
    }
});
    

    $('#calendar').fullCalendar('rerenderEvents');
});