export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: `<section id="events">
  <div class="container">
    <div class="section-label">Events &amp; Rallies</div>
    <h2 class="section-title" lang="hi">आगामी कार्यक्रम</h2>
    <div class="events-layout">
      <div>
        <div class="events-list">
          <div class="event-card reveal">
            <div class="event-date-box">
              <div class="event-day">15</div>
              <div class="event-month">Jul</div>
            </div>
            <div class="event-body">
              <div class="event-type"><i class="fas fa-bullhorn"></i> Grand Rally</div>
              <div class="event-name">Vikas Sankalp Mahasabha — Lucknow</div>
              <div class="event-details">
                <span><i class="fas fa-map-marker-alt"></i> Ramabai Ambedkar Maidan</span>
                <span><i class="fas fa-clock"></i> 4:00 PM onwards</span>
                <span><i class="fas fa-users"></i> 50,000+ expected</span>
              </div>
            </div>
            <div class="event-cta">
              <button class="event-reg-btn">Register</button>
            </div>
          </div>
          <div class="event-card reveal" style="transition-delay:0.08s">
            <div class="event-date-box">
              <div class="event-day">22</div>
              <div class="event-month">Jul</div>
            </div>
            <div class="event-body">
              <div class="event-type"><i class="fas fa-handshake"></i> Community Visit</div>
              <div class="event-name">Jan Samvad — Gomti Nagar Ward Meetings</div>
              <div class="event-details">
                <span><i class="fas fa-map-marker-alt"></i> Gomti Nagar Community Hall</span>
                <span><i class="fas fa-clock"></i> 10:00 AM – 2:00 PM</span>
                <span><i class="fas fa-users"></i> Open for residents</span>
              </div>
            </div>
            <div class="event-cta">
              <button class="event-reg-btn">Register</button>
            </div>
          </div>
          <div class="event-card reveal" style="transition-delay:0.16s">
            <div class="event-date-box">
              <div class="event-day">5</div>
              <div class="event-month">Aug</div>
            </div>
            <div class="event-body">
              <div class="event-type"><i class="fas fa-graduation-cap"></i> Social Program</div>
              <div class="event-name">Medhavi Scholarship Award Ceremony 2025</div>
              <div class="event-details">
                <span><i class="fas fa-map-marker-alt"></i> Raj Bhavan Convention Centre</span>
                <span><i class="fas fa-clock"></i> 11:00 AM</span>
                <span><i class="fas fa-users"></i> 2,000 awardees &amp; families</span>
              </div>
            </div>
            <div class="event-cta">
              <button class="event-reg-btn">Register</button>
            </div>
          </div>
          <div class="event-card reveal" style="transition-delay:0.24s">
            <div class="event-date-box">
              <div class="event-day">18</div>
              <div class="event-month">Aug</div>
            </div>
            <div class="event-body">
              <div class="event-type"><i class="fas fa-briefcase"></i> Youth Event</div>
              <div class="event-name">Rozgar Mela — Annual Job Fair &amp; Skill Showcase</div>
              <div class="event-details">
                <span><i class="fas fa-map-marker-alt"></i> Indira Gandhi Pratishthan</span>
                <span><i class="fas fa-clock"></i> 9:00 AM – 5:00 PM</span>
                <span><i class="fas fa-users"></i> 300+ companies participating</span>
              </div>
            </div>
            <div class="event-cta">
              <button class="event-reg-btn">Register</button>
            </div>
          </div>
        </div>
      </div>
      <div class="events-sidebar">
        <div class="mini-calendar reveal">
          <div class="cal-header">
            <div class="cal-month">July 2025</div>
            <div class="cal-nav">
              <button>‹</button>
              <button>›</button>
            </div>
          </div>
          <div class="cal-grid">
            <div class="cal-day-name">Su</div><div class="cal-day-name">Mo</div>
            <div class="cal-day-name">Tu</div><div class="cal-day-name">We</div>
            <div class="cal-day-name">Th</div><div class="cal-day-name">Fr</div>
            <div class="cal-day-name">Sa</div>
            <div class="cal-day"></div><div class="cal-day">1</div>
            <div class="cal-day">2</div><div class="cal-day">3</div>
            <div class="cal-day">4</div><div class="cal-day">5</div>
            <div class="cal-day">6</div><div class="cal-day">7</div>
            <div class="cal-day">8</div><div class="cal-day">9</div>
            <div class="cal-day">10</div><div class="cal-day">11</div>
            <div class="cal-day">12</div><div class="cal-day">13</div>
            <div class="cal-day">14</div><div class="cal-day event-day">15</div>
            <div class="cal-day">16</div><div class="cal-day">17</div>
            <div class="cal-day">18</div><div class="cal-day">19</div>
            <div class="cal-day">20</div><div class="cal-day event-day">22</div>
            <div class="cal-day">23</div><div class="cal-day today">24</div>
            <div class="cal-day">25</div><div class="cal-day">26</div>
            <div class="cal-day">27</div><div class="cal-day">28</div>
            <div class="cal-day">29</div><div class="cal-day">30</div>
            <div class="cal-day">31</div>
          </div>
        </div>
        <div class="past-events reveal">
          <div class="past-events-title">Recent Highlights</div>
          <div class="past-event-item">
            <div class="past-event-dot"></div>
            <div>
              <div class="past-event-name">Hospital Inauguration — Lucknow North</div>
              <div class="past-event-date">June 10, 2025</div>
            </div>
          </div>
          <div class="past-event-item">
            <div class="past-event-dot"></div>
            <div>
              <div class="past-event-name">Youth Conference — IIT Lucknow</div>
              <div class="past-event-date">May 25, 2025</div>
            </div>
          </div>
          <div class="past-event-item">
            <div class="past-event-dot"></div>
            <div>
              <div class="past-event-name">Women's Day SHG Felicitation</div>
              <div class="past-event-date">March 8, 2025</div>
            </div>
          </div>
          <div class="past-event-item">
            <div class="past-event-dot"></div>
            <div>
              <div class="past-event-name">Harit Lucknow Tree Drive</div>
              <div class="past-event-date">February 14, 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
` }} />;
}
