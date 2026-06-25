export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: `<section id="hero">
  <div class="hero-bg-pattern"></div>
  <div class="hero-glow"></div>
  <div class="hero-glow-2"></div>
  <div class="hero-content">
    <div>
      <div class="hero-eyebrow reveal"><i class="fas fa-star"></i> <span lang="hi">सांसद · 2019 से अब तक</span></div>
      <h1 class="hero-name reveal" lang="hi" style="transition-delay:0.1s">
        राजेन्द्र सिंह
        <span>चौहान</span>
      </h1>
      <p class="hero-tagline reveal" lang="hi" style="transition-delay:0.2s">"सेवा, समर्पण, समृद्धि — राष्ट्र सर्वोपरि"</p>
      <p class="hero-desc reveal" style="transition-delay:0.3s">
        Dedicated to building a stronger, inclusive India — championing development, education, healthcare, and opportunity for every citizen of Lucknow and beyond.
      </p>
      <div class="hero-btns reveal" style="transition-delay:0.4s">
        <a href="#getinvolved" class="btn btn-primary"><i class="fas fa-users"></i> Join the Movement</a>
        <a href="#getinvolved" class="btn btn-outline"><i class="fas fa-hands-helping"></i> Volunteer</a>
        <a href="#getinvolved" class="btn btn-outline"><i class="fas fa-envelope"></i> Contact Us</a>
      </div>
      <div class="hero-stats reveal" style="transition-delay:0.5s">
        <div class="hero-stat-item">
          <div class="hero-stat-num">25+</div>
          <div class="hero-stat-lbl">Years in Public Service</div>
        </div>
        <div class="hero-stat-item">
          <div class="hero-stat-num">500+</div>
          <div class="hero-stat-lbl">Development Projects</div>
        </div>
        <div class="hero-stat-item">
          <div class="hero-stat-num">3M+</div>
          <div class="hero-stat-lbl">Lives Impacted</div>
        </div>
        <div class="hero-stat-item">
          <div class="hero-stat-num">48</div>
          <div class="hero-stat-lbl">National Awards</div>
        </div>
      </div>
    </div>
    <div class="hero-portrait-wrap">
      <div class="hero-portrait-ring"></div>
      <div class="hero-portrait-ring-2"></div>
      <div class="hero-portrait">
        <div class="hero-portrait-placeholder">
          <div class="portrait-initials"><div class="portrait-initials-text">RSC</div></div>
          <div class="hero-portrait-person">
            <div class="person-silhouette"></div>
          </div>
        </div>
        <div class="hero-portrait-badge">Member of Parliament</div>
      </div>
    </div>
  </div>
  <div class="hero-tricolor"><span></span><span></span><span></span></div>
</section>
<div id="ticker">
  <div class="ticker-inner container-wide">
    <div class="ticker-label"><i class="fas fa-bullhorn"></i> Latest</div>` }} />;
}
