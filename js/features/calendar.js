/* Add-to-Calendar integration (Google Calendar URL & Apple/Outlook iCal .ics download) */
(function (MI) {
  const { $, $$ } = MI;
  MI.calendar = {
    init() {
      const E = MI.event;
      if (!E) return;

      // Event details: 9 Oct 2026, 09:30 - 13:30 IST (04:00 - 08:00 UTC)
      const title = `${E.title} · AI Pitch & Build Challenge (IEEE CIS)`;
      const details = `${E.title} — an AI pitch-and-build challenge by IEEE CIS, SSN Student Branch.\nSquads of ${E.squadLabel} operatives. Pitch an unconventional AI concept and build a working prototype.\n\nRegister: ${E.registerUrl}\nContact: ${E.contact.name} (${E.contact.phone})`;
      const location = `${E.venue}, Rajiv Gandhi Salai (OMR), Kalavakkam, Chennai, Tamil Nadu 603110`;
      
      const startIso = '20261009T040000Z';
      const endIso = '20261009T080000Z';

      // Google Calendar Link
      const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startIso}/${endIso}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

      $$('[data-cal="google"]').forEach((el) => {
        el.href = gcalUrl;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
      });

      // Apple / Outlook iCalendar (.ics file)
      const icsData = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//IEEE CIS SSN//Mission Impossible 2026//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        'UID:mission-impossible-2026@ssn.edu.in',
        'DTSTAMP:20261004T000000Z',
        `DTSTART:${startIso}`,
        `DTEND:${endIso}`,
        `SUMMARY:${title}`,
        `DESCRIPTION:${details.replace(/\n/g, '\\n')}`,
        `LOCATION:${location}`,
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      $$('[data-cal="ics"]').forEach((el) => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'mission-impossible-2026.ics';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });
      });
    }
  };
})((window.MI = window.MI || {}));
