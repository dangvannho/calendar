import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import viLocale from "@fullcalendar/core/locales/vi";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./Calendar.css";

function Calendar() {
  const events = [
    {
      title: "Sân số 1",
      start: "2024-10-26T05:30:00",
      end: "2024-10-26T06:30:00",
      extendedProps: {
        price: "300.000đ",
      },
    },
    {
      title: "Sân số 2",
      start: "2024-10-26T07:00:00",
      end: "2024-10-26T08:30:00",
      extendedProps: {
        price: "500.000đ",
      },
    },
    {
      title: "Sân số 3",
      start: "2024-10-26T09:00:00",
      end: "2024-10-26T09:00:00",
      extendedProps: {
        price: "700.000đ",
      },
    },
    {
      title: "Sân số 4",
      start: "2024-10-26",
      end: "2024-10-26",
      extendedProps: {
        price: "700.000đ",
      },
    },
  ];
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        height={"900px"}
        headerToolbar={{
          start: "today prev, next",
          center: "title",
          end: "dayGridMonth, timeGridWeek, timeGridDay",
        }}
        events={events}
        locale={viLocale}
        editable={true}
        eventResizableFromStart={true}
        eventContent={(arg) => {
          // Chuyển đổi thời gian thành định dạng dễ đọc
          const startTime = new Date(arg.event.start).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          const endTime = new Date(arg.event.end).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <Tippy
              content={arg.event.extendedProps.price} // Nội dung tooltip
              placement="top" // Vị trí tooltip
              arrow={true} // Hiện mũi tên
            >
              <div>
                <b>{arg.event.title}</b>
                <div>
                  {startTime} - {endTime}
                </div>
                <div>{arg.event.extendedProps.price}</div>
              </div>
            </Tippy>
          );
        }}
      />
    </div>
  );
}

export default Calendar;
