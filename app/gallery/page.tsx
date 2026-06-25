export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: `<section id="gallery">
  <div class="container">
    <div class="section-label">Photo &amp; Video Gallery</div>
    <h2 class="section-title" lang="hi">जनआंदोलन के<br>अनमोल क्षण</h2>
    <div class="gallery-controls">
      <button class="filter-btn active">All Albums</button>
      <button class="filter-btn">Rallies</button>
      <button class="filter-btn">Community Visits</button>
      <button class="filter-btn">Social Programs</button>
      <button class="filter-btn">Public Meetings</button>
    </div>
    <div class="gallery-grid">
      <div class="gallery-item span-2 reveal" onclick="openLightbox('Grand Rally — Lucknow 2025','A 50,000-strong rally at Ramabai Ambedkar Maidan','fas fa-users')">
        <div class="gallery-item-bg"></div>
        <i class="fas fa-users gallery-icon"></i>
        <div class="gallery-label">Grand Rally · Lucknow 2025</div>
        <div class="gallery-hover-overlay"><i class="fas fa-expand"></i></div>
      </div>
      <div class="gallery-item reveal" style="transition-delay:0.05s" onclick="openLightbox('School Inauguration','Upgraded Model School in Gomti Nagar','fas fa-school')">
        <div class="gallery-item-bg"></div>
        <i class="fas fa-school gallery-icon"></i>
        <div class="gallery-label">School Inauguration</div>
        <div class="gallery-hover-overlay"><i class="fas fa-expand"></i></div>
      </div>
      <div class="gallery-item reveal" style="transition-delay:0.1s" onclick="openLightbox('Free Health Camp','Medical camp serving 3,000+ patients','fas fa-heart-pulse')">
        <div class="gallery-item-bg"></div>
        <i class="fas fa-heart-pulse gallery-icon"></i>
        <div class="gallery-label">Free Health Camp</div>
        <div class="gallery-hover-overlay"><i class="fas fa-expand"></i></div>
      </div>
      <div class="gallery-item span-r2 reveal" style="transition-delay:0.15s" onclick="openLightbox('Women\'s SHG Conclave','12,000 women entrepreneurs gathered in Lucknow','fas fa-venus')">
        <div class="gallery-item-bg"></div>
        <i class="fas fa-venus gallery-icon"></i>
        <div class="gallery-label">Women's SHG Conclave</div>
        <div class="gallery-hover-overlay"><i class="fas fa-expand"></i></div>
      </div>
      <div class="gallery-item reveal" style="transition-delay:0.2s" onclick="openLightbox('Tree Plantation Drive','Harit Lucknow — 5 lakh trees planted','fas fa-tree')">
        <div class="gallery-item-bg"></div>
        <i class="fas fa-tree gallery-icon"></i>
        <div class="gallery-label">Harit Lucknow Drive</div>
        <div class="gallery-hover-overlay"><i class="fas fa-expand"></i></div>
      </div>
      <div class="gallery-item reveal" style="transition-delay:0.25s" onclick="openLightbox('Youth Job Fair 2025','15,000 youth placed in formal employment','fas fa-briefcase')">
        <div class="gallery-item-bg"></div>
        <i class="fas fa-briefcase gallery-icon"></i>
        <div class="gallery-label">Rozgar Mela 2025</div>
        <div class="gallery-hover-overlay"><i class="fas fa-expand"></i></div>
      </div>
      <div class="gallery-item reveal" style="transition-delay:0.3s" onclick="openLightbox('Parliament Session','Presenting the Urban Housing Bill in Lok Sabha','fas fa-landmark')">
        <div class="gallery-item-bg"></div>
        <i class="fas fa-landmark gallery-icon"></i>
        <div class="gallery-label">Parliament Session</div>
        <div class="gallery-hover-overlay"><i class="fas fa-expand"></i></div>
      </div>
      <div class="gallery-item reveal" style="transition-delay:0.35s" onclick="openLightbox('Solar Village Inauguration','40 MW solar energy powering 120 villages','fas fa-solar-panel')">
        <div class="gallery-item-bg"></div>
        <i class="fas fa-solar-panel gallery-icon"></i>
        <div class="gallery-label">Solar Village Launch</div>
        <div class="gallery-hover-overlay"><i class="fas fa-expand"></i></div>
      </div>
    </div>
    <div class="video-section">
      <div class="video-title-row">
        <h3 style="font-family:var(--ff-display);font-size:1.3rem;font-weight:700;color:var(--navy)">Video Gallery</h3>
        <a href="#" class="read-more">View All Videos <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="video-grid">
        <div class="video-card" onclick="openLightbox('Address at Lucknow University','Annual Convocation Address 2025 — Full Speech','fas fa-play')">
          <div class="video-thumb" style="background:linear-gradient(135deg,#1A3A5C,#0D2137)">
            <div class="play-btn"><i class="fas fa-play"></i></div>
          </div>
          <div class="video-info">
            <div class="video-info-title">Annual Convocation Address — Lucknow University 2025</div>
            <div class="video-info-meta"><i class="fas fa-clock"></i> 28 min · 1.2M views</div>
          </div>
        </div>
        <div class="video-card" onclick="openLightbox('NDTV Interview','The future of urban India — Full Interview','fas fa-microphone')">
          <div class="video-thumb" style="background:linear-gradient(135deg,#0F4C2F,#1A7A4A)">
            <div class="play-btn"><i class="fas fa-play"></i></div>
          </div>
          <div class="video-info">
            <div class="video-info-title">NDTV Interview: India's Urban Future &amp; Affordable Housing</div>
            <div class="video-info-meta"><i class="fas fa-clock"></i> 45 min · 870K views</div>
          </div>
        </div>
        <div class="video-card" onclick="openLightbox('Campaign Speech','Main Campaign Address — Lucknow West 2024','fas fa-bullhorn')">
          <div class="video-thumb" style="background:linear-gradient(135deg,#4A2010,#8B3A1A)">
            <div class="play-btn"><i class="fas fa-play"></i></div>
          </div>
          <div class="video-info">
            <div class="video-info-title">Campaign Address — Vikas Ki Awaaz, Lucknow Ki Pehchaan</div>
            <div class="video-info-meta"><i class="fas fa-clock"></i> 1hr 12 min · 3.4M views</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
` }} />;
}
