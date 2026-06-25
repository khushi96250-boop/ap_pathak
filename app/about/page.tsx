export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: `<section id="about">
  <div class="container">
    <div class="about-grid">
      <div class="about-portrait-card reveal-left">
        <div class="about-portrait-img">
          <div class="about-portrait-img-inner">
            <div class="about-avatar">APP</div>
          </div>
        </div>
        <div class="about-card-info">
          <div class="about-card-name">ए० पी० पाठक</div>
          <div class="about-card-role">ADG (अतिरिक्त सचिव स्तर), सड़क परिवहन एवं राजमार्ग मंत्रालय</div>
          <div class="about-social">
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div class="about-content reveal-right">
        <div class="section-label">About the Leader</div>
        <h2 class="section-title">भारत सरकार की सेवा में<br>समर्पित एक प्रशासक</h2>
        <p class="bio-text">
          ए० पी० पाठक भारत सरकार के 1984 बैच के वरिष्ठ अलाइड सर्विस अधिकारी हैं, जिन्होंने अपने सुदीर्घ प्रशासनिक करियर में सड़क परिवहन, गृह, वित्त, सूचना एवं प्रसारण, ग्रामीण विकास तथा भारी उद्योग जैसे अत्यंत महत्वपूर्ण मंत्रालयों में अपनी सेवाएं दी हैं। वर्तमान में वे सड़क परिवहन एवं राजमार्ग मंत्रालय में ADG (अतिरिक्त सचिव स्तर) के पद पर कार्यरत हैं।
        </p>
        <p class="bio-text">
          अपने करियर के दौरान उन्होंने माननीय मंत्रियों के OSD के रूप में नीति-निर्माण, कैडर प्रबंधन, मीडिया समन्वय एवं संसदीय संपर्क में महत्वपूर्ण भूमिका निभाई है। RITES में अभियंता से लेकर अतिरिक्त सचिव स्तर तक की उनकी यात्रा, अनुशासन, दूरदृष्टि और देशसेवा की प्रतिबद्धता का जीवंत प्रमाण है।
        </p>

        <div class="journey-timeline">
          <div class="timeline-item">
            <div class="timeline-dot">1</div>
            <div class="timeline-body">
              <div class="timeline-year">जनवरी 1983 – दिसंबर 1984</div>
              <div class="timeline-title">प्रबंधक (सिविल), रेल मंत्रालय — RITES</div>
              <div class="timeline-desc">रेल इंडिया तकनीकी एवं आर्थिक सेवाएं (RITES) में परिवहन एवं निर्माण क्षेत्र में भारतीय अंतर्राष्ट्रीय कंसल्टेंसी सेवाएं। भारत और विदेशों में सड़क एवं पुल परियोजनाओं की योजना, डिजाइन और पर्यवेक्षण।</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">2</div>
            <div class="timeline-body">
              <div class="timeline-year">1995 – 1999</div>
              <div class="timeline-title">निदेशक (प्रशासन एवं वित्त), सूचना एवं प्रसारण मंत्रालय</div>
              <div class="timeline-desc">AIR एवं दूरदर्शन के सभी इंजीनियरिंग संवर्गों का कैडर प्रबंधन, ऑल इंडिया रेडियो का सामान्य प्रशासन एवं वित्तीय प्रबंधन, और संपूर्ण AIR नेटवर्क का मंत्रालय के साथ समन्वय।</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">3</div>
            <div class="timeline-body">
              <div class="timeline-year">जनवरी 2000 – मई 2002</div>
              <div class="timeline-title">OSD, भारी उद्योग एवं सार्वजनिक उपक्रम मंत्री</div>
              <div class="timeline-desc">मंत्री कार्यालय का समग्र प्रशासन। मीडिया की योजना एवं समन्वय। विनिवेश नीति, सार्वजनिक उपक्रमों के पुनरुद्धार तथा ऑटो नीति के निर्माण में सहयोग।</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">4</div>
            <div class="timeline-body">
              <div class="timeline-year">सितंबर 2006 – मार्च 2007</div>
              <div class="timeline-title">निदेशक, ग्रामीण विकास मंत्रालय</div>
              <div class="timeline-desc">देश में भूमि संसाधनों के संबंध में वाटर शेड क्षेत्र विकास कार्यक्रम और नीतियों का निर्माण एवं क्रियान्वयन।</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">5</div>
            <div class="timeline-body">
              <div class="timeline-year">मार्च 2007 – मार्च 2009</div>
              <div class="timeline-title">OSD, माननीय गृह मंत्री</div>
              <div class="timeline-desc">लोकसभा, राज्यसभा एवं जनप्रतिनिधियों के साथ समन्वय। राज्य सरकारों व केंद्रशासित प्रदेशों से संपर्क। देश में आंतरिक सुरक्षा की स्थिति के आकलन में सहयोग।</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">6</div>
            <div class="timeline-body">
              <div class="timeline-year">मार्च 2009 – दिसंबर 2010</div>
              <div class="timeline-title">निदेशक (CBDT &amp; COFEPOSA), वित्त मंत्रालय</div>
              <div class="timeline-desc">IRS (आयकर) अधिकारियों का कैडर प्रबंधन तथा COFEPOSA के अंतर्गत अपराधियों के मामलों की समीक्षा एवं प्रशासन।</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">7</div>
            <div class="timeline-body">
              <div class="timeline-year">वर्तमान</div>
              <div class="timeline-title">ADG (अतिरिक्त सचिव स्तर), सड़क परिवहन एवं राजमार्ग मंत्रालय</div>
              <div class="timeline-desc">भारत के राष्ट्रीय राजमार्ग नेटवर्क के विकास एवं आधुनिकीकरण में नीतिगत एवं प्रशासनिक नेतृत्व, देश के परिवहन अवसंरचना को सुदृढ़ बनाने में सक्रिय भूमिका।</div>
            </div>
          </div>
        </div>

        <div class="vision-box">
          <div class="vision-box-title"><i class="fas fa-compass"></i> दृष्टि एवं मिशन</div>
          <p>एक सशक्त, पारदर्शी और उत्तरदायी प्रशासन का निर्माण, जहाँ नीतियाँ जन-जन तक पहुँचें, संसाधनों का सदुपयोग हो और भारत की विकास-यात्रा में हर नागरिक की भागीदारी सुनिश्चित हो। अनुभव, निष्ठा और सेवा-भाव के साथ राष्ट्रनिर्माण में योगदान।</p>
        </div>
      </div>
    </div>
  </div>
</section>
` }} />;
}
