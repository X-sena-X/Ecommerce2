/*
import React, { useState, useEffect } from 'react';
import './SoonPage.css';

export default function ComingSoon() {
  const deadlineDate = new Date('July 20, 2023 23:59:59').getTime();

  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const distance = deadlineDate - currentDate;

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [deadlineDate]);

  return (
    <div className="wrapper">
      <header>
        
      </header>

      <main className="content">
        <h1>COMING SOON!</h1>

        <div className="countdown_Container">
          <div className="countdown__days">
            <div className="number">{countdown.days}</div>
            <span className="">{countdown.days === '01' ? 'Day' : 'Days'}</span>
          </div>

          <div className="countdown__hours">
            <div className="number">{countdown.hours}</div>
            <span className="">{countdown.hours === '01' ? 'Hour' : 'Hours'}</span>
          </div>

          <div className="countdown__minutes">
            <div className="number">{countdown.minutes}</div>
            <span className="">{countdown.minutes === '01' ? 'Minute' : 'Minutes'}</span>
          </div>

          <div className="countdown__seconds">
            <div className="number">{countdown.seconds}</div>
            <span className="">{countdown.seconds === '01' ? 'Second' : 'Seconds'}</span>
          </div>
        </div>

        <p>
          Our website is under construction. We'll be here soon
          <br />
          with our new awesome site. Subscribe to be notified.
        </p>

        
      </main>

      <footer>
        <ul className="footer__links">
          <li>
            <a href="https://www.senaabhishek.com">
              <span className="fa fa-google-plus"></span>
            </a>
          </li>
          <li>
            <a href="https://github.com/X-sena-X">
              <span className="fa fa-github"></span>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
*/

import React from 'react'
import './SoonPage.css';

export default function ComingSoon() {
    return (
        <div className="soon_container">
            <div className="soon_wrapper">
                <div className="soon_content">
                    <div className="soon_item">
                        
                        <h1>COMING SOON</h1>
                        <p>This website is under construction.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}