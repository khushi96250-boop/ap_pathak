export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: `<section id="getinvolved">
  <div class="container">
    <div class="section-label">Get Involved</div>
    <h2 class="section-title" lang="hi">श्रेष्ठ भारत के निर्माण में<br>सहभागी बनें</h2>
    <p class="section-subtitle" style="margin-bottom:48px">Your energy, your ideas, your commitment — together we build the nation we deserve.</p>
    <div class="involved-grid">
      <div class="form-card reveal-left">
        <div class="form-card-title">Volunteer Registration</div>
        <div class="form-card-subtitle">Join thousands of dedicated citizens driving change in their communities. Every contribution — big or small — matters.</div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">First Name</label>
            <input type="text" class="form-input" placeholder="Rahul">
          </div>
          <div class="form-group">
            <label class="form-label">Last Name</label>
            <input type="text" class="form-input" placeholder="Sharma">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Mobile Number</label>
          <input type="tel" class="form-input" placeholder="+91 98765 43210">
        </div>
        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input type="email" class="form-input" placeholder="rahul@example.com">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">District</label>
            <select class="form-select">
              <option>Lucknow</option>
              <option>Pratapgarh</option>
              <option>Rae Bareli</option>
              <option>Unnao</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Area of Interest</label>
            <select class="form-select">
              <option>Event Management</option>
              <option>Outreach &amp; Campaign</option>
              <option>Education Programs</option>
              <option>Healthcare Drives</option>
              <option>Social Media</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Why do you want to volunteer?</label>
          <textarea class="form-textarea" placeholder="Share your motivation..."></textarea>
        </div>
        <button class="form-submit" onclick="handleFormSubmit(this,'volunteer')">
          <i class="fas fa-handshake-angle"></i> Join as Volunteer
        </button>
        <div class="volunteer-perks">
          <div class="perk-item">
            <div class="perk-icon"><i class="fas fa-certificate"></i></div>
            <div>
              <div class="perk-title">Official Volunteer Certificate</div>
              <div class="perk-desc">Receive a nationally recognized participation certificate after completing 20 hours of service.</div>
            </div>
          </div>
          <div class="perk-item">
            <div class="perk-icon"><i class="fas fa-network-wired"></i></div>
            <div>
              <div class="perk-title">Leadership Network Access</div>
              <div class="perk-desc">Connect with policymakers, NGO leaders, and community organizers across Uttar Pradesh.</div>
            </div>
          </div>
          <div class="perk-item">
            <div class="perk-icon"><i class="fas fa-award"></i></div>
            <div>
              <div class="perk-title">Annual Seva Samman Award</div>
              <div class="perk-desc">Top volunteers are recognized at the annual public felicitation ceremony.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="reveal-right">
        <div class="form-card" style="margin-bottom:24px">
          <div class="form-card-title">Contact Us</div>
          <div class="form-card-subtitle">For press inquiries, official matters, or citizen grievances — we respond to every message within 48 hours.</div>
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-input" placeholder="Your Name">
          </div>
          <div class="form-group">
            <label class="form-label">Email or Phone</label>
            <input type="text" class="form-input" placeholder="email@example.com or 98765-XXXXX">
          </div>
          <div class="form-group">
            <label class="form-label">Subject</label>
            <select class="form-select">
              <option>General Inquiry</option>
              <option>Press / Media</option>
              <option>Citizen Grievance</option>
              <option>Official Correspondence</option>
              <option>Partnership / NGO</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Message</label>
            <textarea class="form-textarea" placeholder="Your message here..."></textarea>
          </div>
          <button class="form-submit" onclick="handleFormSubmit(this,'contact')">
            <i class="fas fa-paper-plane"></i> Send Message
          </button>
        </div>
        <div class="form-card" style="background:linear-gradient(135deg,var(--navy),#1A4A74);border:none">
          <div style="font-family:var(--ff-display);font-size:1.1rem;font-weight:700;color:var(--white);margin-bottom:16px">Membership Signup</div>
          <p style="font-size:0.85rem;color:rgba(255,255,255,0.65);line-height:1.7;margin-bottom:20px">Become an official member of the Rashtriya Vikas Dal. Members receive exclusive updates, early event access, and a voice in the party's grassroots programs.</p>
          <div class="form-group">
            <label class="form-label" style="color:rgba(255,255,255,0.7)">Full Name</label>
            <input type="text" class="form-input" placeholder="Your full name" style="background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.15);color:var(--white)">
          </div>
          <div class="form-group">
            <label class="form-label" style="color:rgba(255,255,255,0.7)">Mobile</label>
            <input type="tel" class="form-input" placeholder="+91 XXXXX XXXXX" style="background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.15);color:var(--white)">
          </div>
          <button class="form-submit" style="background:var(--saffron)" onclick="handleFormSubmit(this,'member')">
            <i class="fas fa-id-card"></i> Become a Member
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
` }} />;
}
