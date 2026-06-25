export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: `<section id="achievements">
  <div class="hero-bg-pattern"></div>
  <div class="container">
    <div class="achievements-header">
      <div class="section-label">Achievements</div>
      <h2 class="section-title" lang="hi">उपलब्धियाँ जो स्वयं<br>बोलती हैं</h2>
      <p class="section-subtitle">Measured impact, not empty promises — every number represents a life touched, a family lifted, a community transformed.</p>
    </div>
    <div class="counters-grid">
      <div class="counter-card reveal">
        <i class="fas fa-school counter-icon"></i>
        <div class="counter-num" data-target="240">0</div>
        <div class="counter-label">Schools Upgraded</div>
      </div>
      <div class="counter-card reveal" style="transition-delay:0.08s">
        <i class="fas fa-users counter-icon"></i>
        <div class="counter-num" data-target="3000000" data-suffix="M+">0</div>
        <div class="counter-label">Lives Impacted</div>
      </div>
      <div class="counter-card reveal" style="transition-delay:0.16s">
        <i class="fas fa-road counter-icon"></i>
        <div class="counter-num" data-target="1200">0<span>km</span></div>
        <div class="counter-label">Roads Constructed</div>
      </div>
      <div class="counter-card reveal" style="transition-delay:0.24s">
        <i class="fas fa-award counter-icon"></i>
        <div class="counter-num" data-target="48">0</div>
        <div class="counter-label">National Awards</div>
      </div>
    </div>
    <div class="milestones-grid">
      <div class="milestone-card reveal">
        <div class="milestone-icon-wrap"><i class="fas fa-hospital"></i></div>
        <div>
          <div class="milestone-title">500-Bed Super Specialty Hospital</div>
          <div class="milestone-desc">Inaugurated in 2023 — serving over 2 lakh patients annually, with advanced cardiac and oncology wings funded from MPLAD.</div>
        </div>
      </div>
      <div class="milestone-card reveal" style="transition-delay:0.08s">
        <div class="milestone-icon-wrap"><i class="fas fa-book-open"></i></div>
        <div>
          <div class="milestone-title">Medhavi Scholarship Yojna</div>
          <div class="milestone-desc">50,000+ scholarships distributed to meritorious students from Below Poverty Line families since 2015.</div>
        </div>
      </div>
      <div class="milestone-card reveal" style="transition-delay:0.16s">
        <div class="milestone-icon-wrap"><i class="fas fa-city"></i></div>
        <div>
          <div class="milestone-title">Smart City Lucknow Award 2023</div>
          <div class="milestone-desc">Lucknow ranked #2 in Smart City rankings, backed by infrastructure investments driven by Chauhan's parliamentary advocacy.</div>
        </div>
      </div>
      <div class="milestone-card reveal" style="transition-delay:0.24s">
        <div class="milestone-icon-wrap"><i class="fas fa-seedling"></i></div>
        <div>
          <div class="milestone-title">Harit Lucknow Mission</div>
          <div class="milestone-desc">5 lakh trees planted in three years; Lucknow's green cover increased by 18% — one of UP's largest urban afforestation drives.</div>
        </div>
      </div>
      <div class="milestone-card reveal" style="transition-delay:0.32s">
        <div class="milestone-icon-wrap"><i class="fas fa-solar-panel"></i></div>
        <div>
          <div class="milestone-title">Solar Village Programme</div>
          <div class="milestone-desc">40 MW solar energy deployed across 120 villages, bringing 24-hour clean electricity to 1.2 lakh rural households for the first time.</div>
        </div>
      </div>
      <div class="milestone-card reveal" style="transition-delay:0.4s">
        <div class="milestone-icon-wrap"><i class="fas fa-briefcase"></i></div>
        <div>
          <div class="milestone-title">Rozgar Mela — 15,000 Placements</div>
          <div class="milestone-desc">Annual job fairs matching youth with employers; 15,000 young people placed in formal employment over five consecutive years.</div>
        </div>
      </div>
    </div>
    <div class="awards-row reveal" style="margin-top:20px">
      <div class="award-badge"><i class="fas fa-trophy"></i> Best MP Award 2024 — Lokmat</div>
      <div class="award-badge"><i class="fas fa-medal"></i> Sansad Ratna Award 2023</div>
      <div class="award-badge"><i class="fas fa-star"></i> Public Service Excellence Award 2022</div>
      <div class="award-badge"><i class="fas fa-certificate"></i> National Water Mission Commendation</div>
      <div class="award-badge"><i class="fas fa-crown"></i> Best Constituency Development — IAS Assoc.</div>
      <div class="award-badge"><i class="fas fa-shield-halved"></i> Governance Champion — Times Now Summit 2023</div>
    </div>
  </div>
</section>
` }} />;
}
