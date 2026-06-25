export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: `<section id="testimonials">
  <div class="container">
    <div class="testimonials-header">
      <div class="section-label">Testimonials</div>
      <h2 class="section-title" lang="hi">जनता की आवाज़</h2>
      <p class="section-subtitle">The true measure of leadership — what the people say when they speak from the heart.</p>
    </div>
    <div class="testimonials-grid">
      <div class="testimonial-card reveal">
        <div class="testimonial-stars">★★★★★</div>
        <span class="testimonial-quote">"</span>
        <p class="testimonial-text">My daughter received a scholarship under the Medhavi Yojna and is now studying engineering at a top college. Before this, we had no hope. Rajendra ji made it possible — he changed our family's fate forever.</p>
        <div class="testimonial-author">
          <div class="author-avatar">RD</div>
          <div>
            <div class="author-name">Ramesh Devi</div>
            <div class="author-role">Farmer, Pratapgarh District</div>
          </div>
        </div>
      </div>
      <div class="testimonial-card reveal" style="transition-delay:0.1s">
        <div class="testimonial-stars">★★★★★</div>
        <span class="testimonial-quote">"</span>
        <p class="testimonial-text">Our village had no road for 40 years. Within one year of Chauhan ji becoming our MP, we had a paved road, a school building, and a primary health centre. This is the change we voted for.</p>
        <div class="testimonial-author">
          <div class="author-avatar">SK</div>
          <div>
            <div class="author-name">Suresh Kumar</div>
            <div class="author-role">Village Pradhan, Itaunja Block</div>
          </div>
        </div>
      </div>
      <div class="testimonial-card reveal" style="transition-delay:0.2s">
        <div class="testimonial-stars">★★★★★</div>
        <span class="testimonial-quote">"</span>
        <p class="testimonial-text">I am a small entrepreneur. The women's skill centre trained me in garment stitching, and the SHG gave me a loan of ₹50,000. Today I run a unit employing 12 women. I owe this life to the programme he built.</p>
        <div class="testimonial-author">
          <div class="author-avatar">PP</div>
          <div>
            <div class="author-name">Poonam Pandey</div>
            <div class="author-role">Entrepreneur, Rae Bareli Road</div>
          </div>
        </div>
      </div>
      <div class="testimonial-card reveal" style="transition-delay:0.3s">
        <div class="testimonial-stars">★★★★★</div>
        <span class="testimonial-quote">"</span>
        <p class="testimonial-text">As a doctor at the newly built hospital, I can say this facility is world-class. The equipment, the capacity, the staff — this is what public healthcare in India should look like everywhere. Chauhan ji made it real here.</p>
        <div class="testimonial-author">
          <div class="author-avatar">DM</div>
          <div>
            <div class="author-name">Dr. Meena Srivastava</div>
            <div class="author-role">Senior Physician, Lucknow North Hospital</div>
          </div>
        </div>
      </div>
      <div class="testimonial-card reveal" style="transition-delay:0.4s">
        <div class="testimonial-stars">★★★★★</div>
        <span class="testimonial-quote">"</span>
        <p class="testimonial-text">He attended our street meeting personally, listened to every complaint about drainage and streetlights, and within three months everything was fixed. You rarely see an MP who actually shows up and follows through.</p>
        <div class="testimonial-author">
          <div class="author-avatar">AV</div>
          <div>
            <div class="author-name">Anjali Verma</div>
            <div class="author-role">Resident Welfare Association, Vikas Nagar</div>
          </div>
        </div>
      </div>
      <div class="testimonial-card reveal" style="transition-delay:0.5s">
        <div class="testimonial-stars">★★★★★</div>
        <span class="testimonial-quote">"</span>
        <p class="testimonial-text">The solar project transformed our village. We hadn't had reliable electricity in 30 years. Children can study at night. Women feel safer. Our farmer's pump runs on clean energy. This is true development.</p>
        <div class="testimonial-author">
          <div class="author-avatar">BL</div>
          <div>
            <div class="author-name">Brijlal Yadav</div>
            <div class="author-role">Farmer &amp; Social Worker, Bakshi Ka Talab</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
` }} />;
}
