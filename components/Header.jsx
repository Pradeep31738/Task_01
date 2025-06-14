import React from 'react';

export default function Header() {
    const openHours = [ { day: 'Mon - Thur', time: '9am to 9pm' }, { day: 'Fri', time: '9am to 5:30pm' } ];
    const closedDays = 'Saturday - Sunday';

    return (
        <header className="header">
            <div className="topBar">
                <div className="logo">HOMELEW</div>
                <div className="contactDetails">
                    <div className="contactInfo">
                        <p>Open Hours: {openHours.map(({ day, time }) => `${day} ${time}`).join(' | ')}</p>
                        <p>Closed: {closedDays}</p>
                    </div>

                    <div className="callNow">
                        <a href="tel:01234567891">
                            📞 01234567891<br />
                            <span>Call Free now on</span>
                        </a>
                    </div>
                </div>
            </div>

        </header>
    );
}
