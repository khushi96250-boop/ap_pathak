export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: `<section id="initiatives">
  <div class="container">
    <div class="initiatives-header">
      <div class="section-label">Key Initiatives</div>
      <h2 class="section-title" lang="hi">हर क्षेत्र का विकास,<br>हर व्यक्ति की प्रगति</h2>
      <p class="section-subtitle">Six pillars of transformative work, grounded in grassroots realities and driven by data-backed governance.</p>
    </div>
    <div class="initiatives-grid">
      <div class="initiative-card reveal">
        <div class="initiative-icon ic-edu"><i class="fas fa-graduation-cap"></i></div>
        <div class="initiative-title">Education &amp; Literacy</div>
        <p class="initiative-desc">Establishing model schools, digital classrooms, and scholarship programs ensuring no child is denied quality education due to economic hardship.</p>
        <div class="initiative-stat"><i class="fas fa-circle-check"></i> 240 schools upgraded · 50,000+ scholarships awarded</div>
      </div>
      <div class="initiative-card reveal" style="transition-delay:0.08s">
        <div class="initiative-icon ic-health"><i class="fas fa-heart-pulse"></i></div>
        <div class="initiative-title">Healthcare Access</div>
        <p class="initiative-desc">Expanding primary health centres, mobile medical units, and telemedicine to bring specialist care to rural doorsteps across the constituency.</p>
        <div class="initiative-stat"><i class="fas fa-circle-check"></i> 3 hospitals built · 80 PHCs upgraded · 2L+ free treatments</div>
      </div>
      <div class="initiative-card reveal" style="transition-delay:0.16s">
        <div class="initiative-icon ic-infra"><i class="fas fa-road"></i></div>
        <div class="initiative-title">Infrastructure &amp; Smart City</div>
        <p class="initiative-desc">Road connectivity, smart drainage, urban mobility upgrades, and affordable housing — building the foundations of a modern, liveable Lucknow.</p>
        <div class="initiative-stat"><i class="fas fa-circle-check"></i> 1,200 km roads · 28,000 smart streetlights installed</div>
      </div>
      <div class="initiative-card reveal" style="transition-delay:0.24s">
        <div class="initiative-icon ic-women"><i class="fas fa-venus"></i></div>
        <div class="initiative-title">Women Empowerment</div>
        <p class="initiative-desc">Self-help groups, legal aid cells, skilling centres, and entrepreneurship incubators creating an ecosystem where women lead, earn, and thrive.</p>
        <div class="initiative-stat"><i class="fas fa-circle-check"></i> 12,000 SHGs formed · 80,000 women skilled &amp; employed</div>
      </div>
      <div class="initiative-card reveal" style="transition-delay:0.32s">
        <div class="initiative-icon ic-youth"><i class="fas fa-bolt"></i></div>
        <div class="initiative-title">Youth Development</div>
        <p class="initiative-desc">Sports academies, entrepreneurship boot camps, coding institutes, and employment drives turning young aspirations into lifelong opportunities.</p>
        <div class="initiative-stat"><i class="fas fa-circle-check"></i> 15,000 youth placed in jobs · 60 sports academies opened</div>
      </div>
      <div class="initiative-card reveal" style="transition-delay:0.4s">
        <div class="initiative-icon ic-env"><i class="fas fa-leaf"></i></div>
        <div class="initiative-title">Environmental Programs</div>
        <p class="initiative-desc">Massive afforestation drives, solar energy rollouts, Gomti riverfront restoration, and zero-waste initiatives for a greener, sustainable constituency.</p>
        <div class="initiative-stat"><i class="fas fa-circle-check"></i> 5 lakh trees planted · 40 MW solar installed · Gomti revived</div>
      </div>
    </div>
  </div>
</section>
` }} />;
}
