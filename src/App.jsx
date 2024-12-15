import React from "react";
import "./App.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";

function App() {
  return (
    <div dir="rtl">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src="data:image/png;base64,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" />
          <span>W</span>onderful
        </div>
        <nav className="nav-links">
          <a href="#home">الرئيسية</a>

          <a href="#services">الخدمات</a>
          <a href="#portfolio">أعمالنا</a>
          <a href="#contact">تواصل معنا</a>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="hero" id="home">
        <img src="https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/470189242_122247735428003042_7374849419843370150_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=_F_rwtktp6UQ7kNvgEvZuJB&_nc_zt=23&_nc_ht=scontent-pmo1-1.xx&_nc_gid=AqDr0aBMAl0PNEGlxmnbTob&oh=00_AYAAA9O6p-s8GvysjtmYPB1cSP6_0cW32ZpLxuU6eQgjIA&oe=6763C358" />
        <div>
          <h1>مرحبًا بكم في WONDERFUL</h1>
          <p>نقدم لك أفضل تصميمات الجرافيك والإعلانات التي تناسب احتياجاتك.</p>
          <a
            href="https://wa.me/249124442391"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cta-button">اطلب الان</button>
          </a>
          <div className="social-links">
            <a
              href="mailto:wonderfulsudan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/wonderfulsudan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/wonderfulsudan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://fb.me/wonderfulsudan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="services" id="services">
        <h1>خدماتنا</h1>
        <div className="cards-section">
          <img
            src="https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-1/467881261_122242988462003042_7065995097198332898_n.jpg?stp=c23.0.1110.1110a_dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=iL0kg-oSX6IQ7kNvgFPFvWS&_nc_zt=24&_nc_ht=scontent-pmo1-1.xx&_nc_gid=AvnVaOGs2bEJAn0PGGZay9m&oh=00_AYCyq5VflDlNe0UUyavjxW0OLfG420MmBxJuA7T18aYjzA&oe=6763B980"
            alt="Profile"
          />

          <div className="service-cards">
            <div className="service-card">
              <i className="fas fa-paint-brush"></i>
              <h3>تصميم الجرافيك</h3>
              <p>تصميمات إبداعية تناسب احتياجاتك المختلفة.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-bullhorn"></i>
              <h3>الإعلانات</h3>
              <p>إعلانات احترافية تساعد في تحسين عملك.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-image"></i>
              <h3>البوسترات</h3>
              <p>بوسترات جذابة لأي مناسبة.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-signature"></i>
              <h3>تصاميم الشعارات</h3>
              <p>شعارات مميزة تمثل هوية علامتك التجارية.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-id-card"></i>
              <h3>تصميم الهوية البصرية</h3>
              <p>تصميم كروت عمل، ختم، دفاتر فواتير وأعمال، وستاند رول.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-share-alt"></i>
              <h3>تصاميم السوشيال ميديا</h3>
              <p>دعوات، تهنئات، تعزيات، صور يوتيوب مصغرة وإعلانات.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-keyboard"></i>
              <h3>خدمة التايبست</h3>
              <p>كتابة وتنسيق النصوص على الوورد، الإكسل، والباوربوينت.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-language"></i>
              <h3>الترجمة الاحترافية</h3>
              <p>ترجمات دقيقة تلبي احتياجاتك.</p>
            </div>

            <div className="service-card">
              <i className="fas fa-print"></i>
              <h3>تصميم المطبوعات</h3>
              <p>
                تصميم ستيكرات، إعلانات، بوسترات، لافتات، مطويات، وسيرة ذاتية.
              </p>
            </div>

            <div className="service-card">
              <i className="fas fa-chart-line"></i>
              <h3>إدارة الصفحات والتسويق الإلكتروني</h3>
              <p>إدارة احترافية لحساباتك وتحقيق أفضل النتائج.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <h1>أعمالنا</h1>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img
              src="https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/448737316_122104901444362793_2764076092764678581_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lIkSeL9US-8Q7kNvgGKXKgi&_nc_zt=23&_nc_ht=scontent-pmo1-1.xx&_nc_gid=Aionr_mxJRjsijC7O8OWUWN&oh=00_AYC8zRvbDTHwHUW2IwPyj6QDkGO5kc4vOwdo3VSRfX640g&oe=6763BFF5"
              alt="شعار شركة"
            />
            <div className="caption">تصميم شعار إبداعي</div>
          </div>
          <div className="portfolio-item">
            <img
              src="https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/448314610_122206325594003042_4432779909246081603_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ci3V4gUtcR8Q7kNvgFjTyZ0&_nc_zt=23&_nc_ht=scontent-pmo1-1.xx&_nc_gid=AGXyMwbm7C5KRyG_5n77GDx&oh=00_AYA2ybLl0n1ijv3ViHooFavEHNM2kE8784tf__79lseoTQ&oe=6763E6D1"
              alt="تصميم دعوة فرح"
            />
            <div className="caption"> تصميم دعوة فرح </div>
          </div>
          <div className="portfolio-item">
            <img
              src="https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/448182212_122206198010003042_5855688258292404000_n.jpg?stp=dst-jpg_p552x414_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VD9Rks6Ix8gQ7kNvgEFnGJ0&_nc_zt=23&_nc_ht=scontent-pmo1-1.xx&_nc_gid=AGXyMwbm7C5KRyG_5n77GDx&oh=00_AYDlJBYpQWzQQyqjK06v8xgOlkNomPAlDKrRqAPYlR1KVA&oe=6763D734"
              alt=" منيو "
            />
            <div className="caption"> قائمة طعام لمطعم </div>
          </div>
          <div className="portfolio-item">
            <img
              src="https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/406133992_122158130846003042_3609015253146525636_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OTNKdIUGSFoQ7kNvgE7o1oZ&_nc_zt=23&_nc_ht=scontent-pmo1-1.xx&_nc_gid=AKmgch5IhESnSGU-Gcw72AO&oh=00_AYBZlzIUvA9p4Txuuv_uaCxqppzbObUdJFsSH2EHQ33gQg&oe=6763D6F4"
              alt="  بوستر "
            />
            <div className="caption"> بوستر لمبادرة خيرية </div>
          </div>

          <div className="portfolio-item">
            <img
              src=" https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/403736327_122156054846003042_7810571986896008687_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3c75tRs8oXwQ7kNvgHj9aRT&_nc_zt=23&_nc_ht=scontent-pmo1-1.xx&_nc_gid=AKmgch5IhESnSGU-Gcw72AO&oh=00_AYDI3pxa6hpu0BH1ABBrQ0KxvnuoZyWc0yEJWQ4811YmsA&oe=6763B77C"
              alt="  منيو "
            />
            <div className="caption"> تصميم قائمة طعام لمطعم </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <p>&copy; 2024 wonderful. جميع الحقوق محفوظة</p>
        <div className="social-links">
          <a
            href="https://wa.me/249124442391"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:wonderfulsudan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/wonderfulsudan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/wonderfulsudan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://fb.me/wonderfulsudan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
