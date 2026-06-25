export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: `<section id="news">
  <div class="container">
    <div class="section-label">News &amp; Media</div>
    <h2 class="section-title" lang="hi">ज़मीनी स्तर से ताज़ा ख़बरें</h2>
    <div class="news-controls">
      <button class="filter-btn active" data-cat="all">All</button>
      <button class="filter-btn" data-cat="policy">Policy</button>
      <button class="filter-btn" data-cat="event">Events</button>
      <button class="filter-btn" data-cat="achievement">Achievements</button>
      <button class="filter-btn" data-cat="media">Media</button>
      <div class="news-search">
        <i class="fas fa-magnifying-glass"></i>
        <input type="text" placeholder="Search news..." aria-label="Search news">
      </div>
    </div>
    <div class="news-grid">
      <div class="news-featured reveal">
        <div class="news-featured-img">
          <div class="news-img-overlay"><i class="fas fa-landmark"></i></div>
        </div>
        <div class="news-featured-body">
          <span class="news-tag tag-policy">Policy</span>
          <div class="news-card-title">Chauhan Introduces Landmark Urban Housing Bill in Parliament — 10 Lakh Affordable Homes Pledged</div>
          <p class="news-card-excerpt">The Urban Affordable Housing Acceleration Bill 2025 proposed by Rajendra Singh Chauhan seeks to expedite construction of 10 lakh EWS housing units across Tier-2 cities in the next three years.</p>
          <div class="news-card-meta">
            <i class="fas fa-calendar-alt"></i> June 18, 2025
            <span>·</span>
            <i class="fas fa-clock"></i> 5 min read
          </div>
          <a href="#" class="read-more">Read Full Story <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="news-card reveal" style="transition-delay:0.1s">
        <div class="news-card-img">
          <div class="news-img-overlay"><i class="fas fa-hospital"></i></div>
        </div>
        <div class="news-card-body">
          <span class="news-tag tag-achievement">Achievement</span>
          <div class="news-card-title">New Trauma Centre Opens in Lucknow North</div>
          <p class="news-card-excerpt">State-of-the-art 24/7 trauma and emergency facility inaugurated, bringing critical care capacity to the northern district.</p>
          <div class="news-card-meta"><i class="fas fa-calendar-alt"></i> June 12, 2025</div>
          <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="news-card reveal" style="transition-delay:0.15s">
        <div class="news-card-img">
          <div class="news-img-overlay"><i class="fas fa-users"></i></div>
        </div>
        <div class="news-card-body">
          <span class="news-tag tag-event">Event</span>
          <div class="news-card-title">10,000-Strong Youth Rally Energises Lucknow</div>
          <p class="news-card-excerpt">A historic gathering of young voters and students at Ambedkar Maidan pledged support for the Digital Youth Vision 2030.</p>
          <div class="news-card-meta"><i class="fas fa-calendar-alt"></i> June 5, 2025</div>
          <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="news-card reveal" style="transition-delay:0.2s">
        <div class="news-card-img">
          <div class="news-img-overlay"><i class="fas fa-newspaper"></i></div>
        </div>
        <div class="news-card-body">
          <span class="news-tag tag-media">Media</span>
          <div class="news-card-title">Interview: "India's Growth Must Reach the Villages" — Chauhan on NDTV</div>
          <p class="news-card-excerpt">In a candid interview, Chauhan speaks about his vision for rural transformation and addresses questions on UP's development trajectory.</p>
          <div class="news-card-meta"><i class="fas fa-calendar-alt"></i> May 28, 2025</div>
          <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="news-card reveal" style="transition-delay:0.25s">
        <div class="news-card-img">
          <div class="news-img-overlay"><i class="fas fa-leaf"></i></div>
        </div>
        <div class="news-card-body">
          <span class="news-tag tag-policy">Policy</span>
          <div class="news-card-title">Gomti Clean River Restoration Phase II Launched</div>
          <p class="news-card-excerpt">A ₹450-crore comprehensive river restoration project aims to restore Gomti's biodiversity and improve water quality within 18 months.</p>
          <div class="news-card-meta"><i class="fas fa-calendar-alt"></i> May 20, 2025</div>
          <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</section>
` }} />;
}
