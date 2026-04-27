import { useState, useEffect } from 'react';

export default function PagelabLanding() {
  const [paymentType, setPaymentType] = useState('contado');
  const [openFaq, setOpenFaq] = useState(null);

  const pricing = {
    esencial: { contado: 200, cuotas: 260, suscripcion: 300 },
    completa: { contado: 400, cuotas: 520, suscripcion: 600 }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('es-CL').format(amount * 1000);
  };

  const getMonthlyPayment = (plan) => {
    if (paymentType === 'contado') {
      return null;
    }
    const total = pricing[plan][paymentType];
    const months = paymentType === 'cuotas' ? 3 : 6;
    return Math.round(total / months);
  };

  const getPriceDisplay = (plan) => {
    if (paymentType === 'contado') {
      return {
        main: formatPrice(pricing[plan][paymentType]),
        sub: 'Pago único'
      };
    }
    
    const monthly = getMonthlyPayment(plan);
    const total = pricing[plan][paymentType];
    const months = paymentType === 'cuotas' ? 3 : 6;
    
    return {
      main: formatPrice(monthly),
      sub: `${months} cuotas (total $${formatPrice(total)})`
    };
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="landing-page">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --color-noir: #121212;
          --color-charcoal: #2B2B2B;
          --color-iron: #565656;
          --color-fog: #848484;
          --color-silver: #B3B3B3;
          --color-cloud: #E0E0E0;
          --color-white: #FFFFFF;
          --color-accent: #4A90E2;
          --color-accent-hover: #357ABD;
          
          --space-2: 0.5rem;
          --space-3: 0.75rem;
          --space-4: 1rem;
          --space-5: 1.25rem;
          --space-6: 1.5rem;
          --space-8: 2rem;
          --space-10: 2.5rem;
          --space-12: 3rem;
          --space-16: 4rem;
          --space-20: 5rem;
          
          --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        body {
          font-family: var(--font-family);
          color: var(--color-noir);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          background: var(--color-white);
        }

        .landing-page {
          background: var(--color-white);
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 var(--space-6);
        }

        /* Header */
        .header {
          padding: var(--space-5) 0;
          background: var(--color-white);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid #F5F5F5;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          text-transform: lowercase;
          color: var(--color-noir);
        }

        .nav {
          display: flex;
          gap: var(--space-8);
          align-items: center;
        }

        .nav a {
          font-size: 0.9375rem;
          color: var(--color-iron);
          text-decoration: none;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .nav a:hover {
          color: var(--color-noir);
        }

        .nav-cta {
          background: var(--color-noir);
          color: var(--color-white) !important;
          padding: var(--space-2) var(--space-4);
          border-radius: 6px;
          font-weight: 500;
        }

        .nav-cta:hover {
          background: var(--color-charcoal);
          color: var(--color-white) !important;
        }

        /* Hero */
        .hero {
          padding: var(--space-20) 0 var(--space-16);
          text-align: center;
          background: var(--color-white);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: #F5F5F5;
          border-radius: 100px;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-iron);
          margin-bottom: var(--space-6);
        }

        .hero-headline {
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: var(--space-5);
          color: var(--color-noir);
        }

        .hero-subheadline {
          font-size: clamp(1rem, 2vw, 1.125rem);
          line-height: 1.7;
          color: var(--color-iron);
          max-width: 620px;
          margin: 0 auto var(--space-8);
          font-weight: 400;
        }

        .hero-cta {
          display: flex;
          gap: var(--space-3);
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: var(--space-10);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-6);
          border-radius: 6px;
          font-weight: 500;
          font-size: 0.9375rem;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
          font-family: var(--font-family);
        }

        .btn-primary {
          background: var(--color-noir);
          color: var(--color-white);
        }

        .btn-primary:hover {
          background: var(--color-charcoal);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: transparent;
          color: var(--color-noir);
          border: 1px solid #E0E0E0;
        }

        .btn-secondary:hover {
          background: #FAFAFA;
        }

        .social-proof {
          display: inline-flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3) var(--space-5);
          background: #F9FAFB;
          border-radius: 8px;
          border: 1px solid #F0F0F0;
        }

        .proof-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.875rem;
          color: var(--color-iron);
        }

        .proof-check {
          width: 16px;
          height: 16px;
          color: var(--color-accent);
        }

        /* Section */
        .section {
          padding: var(--space-16) 0;
        }

        .section-alt {
          background: #FAFAFA;
        }

        .section-gray {
          background: #F5F5F5;
        }

        .section-dark {
          background: var(--color-noir);
          color: var(--color-white);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-10);
        }

        .section-eyebrow {
          font-size: 0.8125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-fog);
          margin-bottom: var(--space-3);
        }

        .section-headline {
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 600;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: var(--space-4);
          color: var(--color-noir);
        }

        .section-dark .section-headline {
          color: var(--color-white);
        }

        .section-subheadline {
          font-size: 1.0625rem;
          color: var(--color-iron);
          max-width: 560px;
          margin: 0 auto;
          font-weight: 400;
        }

        .section-dark .section-subheadline {
          color: var(--color-silver);
        }

        /* Pain Points */
        .pain-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-5);
          max-width: 960px;
          margin: 0 auto;
        }

        .pain-card {
          padding: var(--space-6);
          background: var(--color-white);
          border: 1px solid #ECECEC;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .pain-card:hover {
          border-color: var(--color-cloud);
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }

        .pain-icon {
          width: 40px;
          height: 40px;
          background: #F5F5F5;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-4);
        }

        .pain-icon svg {
          width: 20px;
          height: 20px;
          stroke: var(--color-iron);
        }

        .pain-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-fog);
          margin-bottom: var(--space-3);
        }

        .pain-content {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--color-iron);
        }

        /* Process */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--space-8);
          max-width: 900px;
          margin: 0 auto;
        }

        .process-step {
          text-align: center;
        }

        .step-icon {
          width: 48px;
          height: 48px;
          background: var(--color-noir);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-4);
        }

        .step-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-white);
        }

        .step-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: var(--space-3);
          color: var(--color-noir);
        }

        .step-description {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--color-iron);
          margin-bottom: var(--space-3);
        }

        .step-time {
          font-size: 0.8125rem;
          color: var(--color-fog);
        }

        /* Benefits */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-6);
          max-width: 1000px;
          margin: 0 auto;
        }

        .benefit-card {
          padding: var(--space-5);
          background: var(--color-white);
          border: 1px solid #ECECEC;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .benefit-card:hover {
          border-color: var(--color-cloud);
          transform: translateY(-2px);
        }

        .benefit-icon {
          width: 36px;
          height: 36px;
          background: #F5F5F5;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-4);
        }

        .benefit-icon svg {
          width: 18px;
          height: 18px;
          stroke: var(--color-noir);
        }

        .benefit-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: var(--space-2);
          color: var(--color-noir);
        }

        .benefit-description {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--color-iron);
        }

        /* Pricing */
        .pricing-toggle {
          display: flex;
          justify-content: center;
          gap: var(--space-2);
          margin-bottom: var(--space-10);
          background: #F5F5F5;
          padding: 4px;
          border-radius: 8px;
          max-width: 380px;
          margin-left: auto;
          margin-right: auto;
        }

        .pricing-toggle button {
          flex: 1;
          padding: var(--space-2) var(--space-4);
          border: none;
          background: transparent;
          border-radius: 6px;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          color: var(--color-iron);
          font-family: var(--font-family);
        }

        .pricing-toggle button.active {
          background: var(--color-white);
          color: var(--color-noir);
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }

        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-6);
          max-width: 800px;
          margin: 0 auto;
        }

        .pricing-card {
          background: var(--color-white);
          border: 1px solid #ECECEC;
          border-radius: 12px;
          padding: var(--space-6);
          position: relative;
          transition: all 0.2s ease;
        }

        .pricing-card:hover {
          border-color: var(--color-cloud);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }

        .plan-badge {
          display: inline-block;
          padding: 4px var(--space-3);
          background: #F5F5F5;
          border-radius: 100px;
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-iron);
          margin-bottom: var(--space-4);
        }

        .plan-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: var(--space-2);
        }

        .plan-description {
          font-size: 0.875rem;
          color: var(--color-iron);
          margin-bottom: var(--space-5);
          line-height: 1.6;
        }

        .price {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
          color: var(--color-noir);
          margin-bottom: var(--space-2);
        }

        .price-currency {
          font-size: 1.25rem;
          color: var(--color-iron);
          font-weight: 600;
        }

        .price-period {
          font-size: 0.875rem;
          color: var(--color-fog);
          margin-bottom: var(--space-5);
        }

        .delivery-info {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3);
          background: #F9FAFB;
          border-radius: 6px;
          margin-bottom: var(--space-5);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-iron);
        }

        .features-list {
          list-style: none;
          margin-top: var(--space-5);
          border-top: 1px solid #F5F5F5;
          padding-top: var(--space-5);
        }

        .features-list li {
          padding: var(--space-2) 0;
          padding-left: var(--space-6);
          position: relative;
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--color-iron);
        }

        .features-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 14px;
          width: 14px;
          height: 14px;
          background: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6667 3.5L5.25 9.91667L2.33334 7' stroke='%234A90E2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat center;
        }

        /* Testimonials */
        .testimonials-wrapper {
          overflow: hidden;
          position: relative;
          padding: var(--space-4) 0;
        }

        .testimonials {
          display: flex;
          gap: var(--space-6);
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .testimonials:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial {
          background: var(--color-white);
          padding: var(--space-6);
          border: 1px solid #ECECEC;
          border-radius: 8px;
          min-width: 380px;
          max-width: 380px;
          flex-shrink: 0;
        }

        .testimonial-quote {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--color-iron);
          margin-bottom: var(--space-5);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #F5F5F5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--color-iron);
        }

        .author-info strong {
          display: block;
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--color-noir);
        }

        .author-info span {
          font-size: 0.8125rem;
          color: var(--color-fog);
        }

        /* FAQ Accordion */
        .faq-list {
          max-width: 720px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 1px solid #ECECEC;
        }

        .faq-question {
          width: 100%;
          text-align: left;
          padding: var(--space-5) 0;
          background: none;
          border: none;
          font-family: var(--font-family);
          font-weight: 600;
          font-size: 1rem;
          color: var(--color-noir);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-4);
          transition: color 0.2s ease;
        }

        .faq-question:hover {
          color: var(--color-iron);
        }

        .faq-icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          transition: transform 0.2s ease;
        }

        .faq-icon.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-answer.open {
          max-height: 500px;
        }

        .faq-answer-content {
          padding-bottom: var(--space-5);
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--color-iron);
        }

        /* Footer */
        .footer {
          background: var(--color-noir);
          color: var(--color-silver);
          padding: var(--space-10) 0 var(--space-6);
          text-align: center;
        }

        .footer-stats {
          display: flex;
          gap: var(--space-8);
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: var(--space-8);
          padding-bottom: var(--space-8);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .footer-stat {
          font-size: 0.875rem;
        }

        .footer-text {
          font-size: 0.8125rem;
          color: var(--color-fog);
        }

        /* Animations */
        @media (prefers-reduced-motion: no-preference) {
          [data-animate] {
            opacity: 0;
            transform: translateY(15px);
            transition: opacity 0.5s ease, transform 0.5s ease;
          }

          [data-animate].visible {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            padding: var(--space-16) 0 var(--space-12);
          }

          .section {
            padding: var(--space-12) 0;
          }

          .hero-cta {
            flex-direction: column;
            width: 100%;
          }

          .btn {
            width: 100%;
          }

          .social-proof {
            flex-direction: column;
            gap: var(--space-2);
          }

          .pricing-toggle {
            flex-direction: column;
            max-width: 100%;
          }

          .footer-stats {
            flex-direction: column;
            gap: var(--space-4);
          }

          .nav {
            display: none;
          }

          .hero-mockups {
            grid-template-columns: 1fr !important;
          }

          .process-visual {
            display: none;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .portfolio-card {
            min-width: 320px;
            max-width: 320px;
          }
        }

        /* WhatsApp Button */
        .whatsapp-button {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          text-decoration: none;
        }

        .whatsapp-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.5);
        }

        .whatsapp-button svg {
          width: 32px;
          height: 32px;
          fill: white;
        }

        @media (max-width: 768px) {
          .whatsapp-button {
            width: 56px;
            height: 56px;
            bottom: 20px;
            right: 20px;
          }

          .whatsapp-button svg {
            width: 28px;
            height: 28px;
          }
        }

        /* Image Placeholders */
        .hero-mockups {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
          margin-top: var(--space-12);
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .mockup-card {
          aspect-ratio: 3/4;
          background: linear-gradient(135deg, #F5F5F5 0%, #FAFAFA 100%);
          border-radius: 8px;
          border: 1px solid #ECECEC;
          position: relative;
          overflow: hidden;
        }

        .mockup-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: var(--color-white);
          border-bottom: 1px solid #ECECEC;
        }

        .mockup-card::after {
          content: '';
          position: absolute;
          top: 60px;
          left: var(--space-4);
          right: var(--space-4);
          bottom: var(--space-4);
          background: var(--color-white);
          border-radius: 4px;
          opacity: 0.5;
        }

        .process-visual {
          max-width: 500px;
          margin: var(--space-12) auto 0;
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%);
          border-radius: 12px;
          border: 1px solid #ECECEC;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .process-visual::before {
          content: '';
          width: 60%;
          height: 60%;
          background: var(--color-white);
          border-radius: 8px;
          border: 2px dashed #E0E0E0;
        }

        /* Portfolio Section */
        .portfolio-wrapper {
          overflow: hidden;
          position: relative;
          padding: var(--space-4) 0;
        }

        .portfolio-slider {
          display: flex;
          gap: var(--space-6);
          animation: scrollPortfolio 40s linear infinite;
          width: max-content;
        }

        .portfolio-slider:hover {
          animation-play-state: paused;
        }

        @keyframes scrollPortfolio {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .portfolio-card {
          background: var(--color-white);
          border: 1px solid #ECECEC;
          border-radius: 12px;
          overflow: hidden;
          min-width: 420px;
          max-width: 420px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .portfolio-card:hover {
          border-color: var(--color-cloud);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }

        .portfolio-screenshot {
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          background: var(--color-white);
        }

        .portfolio-screenshot img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .portfolio-card-content {
          padding: var(--space-5);
        }

        .project-category {
          font-size: 0.75rem;
          color: var(--color-fog);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-2);
          font-weight: 600;
        }

        .project-info h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: var(--space-3);
          color: var(--color-noir);
        }

        .project-description {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--color-iron);
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-container">
            <div className="logo">Pagelab.</div>
            <nav className="nav">
              <a onClick={() => scrollToSection('proceso')}>Proceso</a>
              <a onClick={() => scrollToSection('pricing')}>Precios</a>
              <a onClick={() => scrollToSection('faq')}>FAQ</a>
              <a className="nav-cta" onClick={() => scrollToSection('pricing')}>Comenzar</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L8.545 5.13L13 5.545L9.5 8.635L10.545 13L7 10.635L3.455 13L4.5 8.635L1 5.545L5.455 5.13L7 1Z" fill="currentColor"/>
            </svg>
            Entrega en 48-72 horas · Sin costos ocultos
          </div>
          
          <h1 className="hero-headline">
            Tu página web profesional lista en 3 días
          </h1>
          
          <p className="hero-subheadline">
            Diseñamos y desarrollamos páginas web de calidad para tu negocio.
            Proceso simple, entrega rápida, sin complicaciones.
          </p>
          
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollToSection('pricing')}>
              Ver Planes →
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('proceso')}>
              Cómo funciona
            </button>
          </div>
          
          <div className="social-proof">
            <div className="proof-item">
              <svg className="proof-check" viewBox="0 0 16 16" fill="none">
                <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +127 páginas entregadas
            </div>
            <div className="proof-item">
              <svg className="proof-check" viewBox="0 0 16 16" fill="none">
                <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              100% en tiempo
            </div>
            <div className="proof-item">
              <svg className="proof-check" viewBox="0 0 16 16" fill="none">
                <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Sin contratos largos
            </div>
          </div>

          <div className="hero-mockups">
            <div className="mockup-card"></div>
            <div className="mockup-card"></div>
            <div className="mockup-card"></div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section section-alt" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">¿Por qué necesitas una página web?</h2>
            <p className="section-subheadline">Ya sea que estés empezando o buscando mejorar tu presencia online</p>
          </div>
          
          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="pain-title">ESTÁS PERDIENDO CLIENTES</div>
              <div className="pain-content">
                Hoy todos buscan en internet antes de comprar. Si no tienes presencia online, 
                estás dejando que tus competidores capten a tus clientes potenciales.
              </div>
            </div>
            
            <div className="pain-card">
              <div className="pain-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="pain-title">NO SABES POR DÓNDE EMPEZAR</div>
              <div className="pain-content">
                Precios que varían de $200k a $5M, procesos confusos, términos técnicos. 
                Solo quieres una página que funcione, pero no sabes a quién recurrir.
              </div>
            </div>
            
            <div className="pain-card">
              <div className="pain-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                  <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="pain-title">NECESITAS ALGO CONFIABLE</div>
              <div className="pain-content">
                Buscas un servicio profesional que cumpla lo que promete: 
                tiempos claros, precios transparentes y un resultado de calidad.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" id="proceso" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Proceso</div>
            <h2 className="section-headline">Así de simple debería ser siempre</h2>
            <p className="section-subheadline">3 pasos. Menos de una semana. Tu página publicada.</p>
          </div>
          
          <div className="process-grid">
            <div className="process-step">
              <div className="step-icon">
                <div className="step-number">01</div>
              </div>
              <h3 className="step-title">Eliges y pagas</h3>
              <p className="step-description">
                Esencial ($200k) o Completa ($400k). En cuotas si quieres. Sin letra chica.
              </p>
              <div className="step-time">⏱ 5 minutos</div>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <div className="step-number">02</div>
              </div>
              <h3 className="step-title">Llenas un form corto</h3>
              <p className="step-description">
                Tus textos (o los hacemos con IA), imágenes, colores de marca. Super guiado.
              </p>
              <div className="step-time">⏱ 10 minutos</div>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <div className="step-number">03</div>
              </div>
              <h3 className="step-title">Recibe tu página</h3>
              <p className="step-description">
                Preview en 3-5 días, haces ajustes, publicamos. Ya está. En serio.
              </p>
              <div className="step-time">⏱ 3-5 días total</div>
            </div>
          </div>

          <div className="process-visual"></div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section-gray" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">Por qué esto no es como lo que ya probaste</h2>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Velocidad Real</h3>
              <p className="benefit-description">
                3-5 días de entrega. No "2-3 semanas si todo sale bien". 
                Literalmente en días, no semanas.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Precio Honesto</h3>
              <p className="benefit-description">
                $200-400k. Punto. No "desde" $200k que termina en $800k 
                después de "ajustes adicionales".
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2"/>
                  <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Tech Moderna</h3>
              <p className="benefit-description">
                React, no WordPress. Rápido en mobile. 
                Se ve profesional porque lo es.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Generado con IA</h3>
              <p className="benefit-description">
                Usamos Claude/GPT-4 para copy, diseño, optimización. 
                Calidad consistente, siempre.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Sin Venderte Humo</h3>
              <p className="benefit-description">
                No prometemos SEO mágico ni 1000% más conversiones. 
                Solo una página bien hecha, rápido.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21.5 12H16l-2 3h-4l-2-3H2.5M5.8 2.1L2 12v8a2 2 0 002 2h16a2 2 0 002-2v-8l-3.8-9.9a2 2 0 00-1.9-1.1H7.7a2 2 0 00-1.9 1.1z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Ajustes Incluidos</h3>
              <p className="benefit-description">
                1-2 rondas de cambios incluidas. Sin cobros extra por 
                "ah, cambia ese color". Soporte real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section section-alt" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Portafolio</div>
            <h2 className="section-headline">Nuestros Trabajos</h2>
            <p className="section-subheadline">
              Páginas reales que generan resultados reales para negocios como el tuyo
            </p>
          </div>
        </div>

        <div className="portfolio-wrapper">
          <div className="portfolio-slider">
            {/* First set */}
            <div className="portfolio-card">
              <div className="portfolio-screenshot">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #0273ef 0%, #0056b3 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '2.5rem',
                  letterSpacing: '-0.02em'
                }}>
                  KIVO
                </div>
              </div>
              <div className="portfolio-card-content">
                <div className="project-category">Marketing Digital</div>
                <div className="project-info">
                  <h3>KIVO</h3>
                  <p className="project-description">
                    Plataforma de gestión de Google Ads con IA. Landing enfocada en conversión 
                    con planes, testimonios y FAQ interactivo.
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-screenshot">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(180deg, #2d5016 0%, #4a7c2a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.75rem',
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  FLORESTA LA ERMITA
                </div>
              </div>
              <div className="portfolio-card-content">
                <div className="project-category">Eventos & Turismo</div>
                <div className="project-info">
                  <h3>Floresta La Ermita</h3>
                  <p className="project-description">
                    Centro de eventos en la cordillera. Diseño elegante con galería,
                    formularios de cotización y experiencia inmersiva.
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-screenshot">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  ACERCA CONSULTORES
                </div>
              </div>
              <div className="portfolio-card-content">
                <div className="project-category">Consultoría</div>
                <div className="project-info">
                  <h3>Acerca Consultores</h3>
                  <p className="project-description">
                    Sistema de cotización online para consultoría empresarial.
                    Formularios inteligentes y cálculo automático.
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-screenshot">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #d32f2f 0%, #f57c00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  CONTIGO PAN Y CEBOLLA
                </div>
              </div>
              <div className="portfolio-card-content">
                <div className="project-category">Gastronomía</div>
                <div className="project-info">
                  <h3>Contigo Pan y Cebolla</h3>
                  <p className="project-description">
                    Sitio para emprendimiento gastronómico. Menú digital,
                    reservas online y galería de platos.
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-screenshot">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #00695c 0%, #00897b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  CONECTA FRANQUICIAS
                </div>
              </div>
              <div className="portfolio-card-content">
                <div className="project-category">Negocios</div>
                <div className="project-info">
                  <h3>Conecta Franquicias</h3>
                  <p className="project-description">
                    Marketplace de franquicias. Buscador avanzado, fichas de negocios
                    y sistema de matching.
                  </p>
                </div>
              </div>
            </div>

            {/* Duplicate set for infinite scroll */}
            <div className="portfolio-card">
              <div className="portfolio-screenshot">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #0273ef 0%, #0056b3 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '2.5rem',
                  letterSpacing: '-0.02em'
                }}>
                  KIVO
                </div>
              </div>
              <div className="portfolio-card-content">
                <div className="project-category">Marketing Digital</div>
                <div className="project-info">
                  <h3>KIVO</h3>
                  <p className="project-description">
                    Plataforma de gestión de Google Ads con IA. Landing enfocada en conversión 
                    con planes, testimonios y FAQ interactivo.
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-screenshot">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(180deg, #2d5016 0%, #4a7c2a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.75rem',
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  FLORESTA LA ERMITA
                </div>
              </div>
              <div className="portfolio-card-content">
                <div className="project-category">Eventos & Turismo</div>
                <div className="project-info">
                  <h3>Floresta La Ermita</h3>
                  <p className="project-description">
                    Centro de eventos en la cordillera. Diseño elegante con galería,
                    formularios de cotización y experiencia inmersiva.
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-screenshot">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  ACERCA CONSULTORES
                </div>
              </div>
              <div className="portfolio-card-content">
                <div className="project-category">Consultoría</div>
                <div className="project-info">
                  <h3>Acerca Consultores</h3>
                  <p className="project-description">
                    Sistema de cotización online para consultoría empresarial.
                    Formularios inteligentes y cálculo automático.
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-screenshot">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #d32f2f 0%, #f57c00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  CONTIGO PAN Y CEBOLLA
                </div>
              </div>
              <div className="portfolio-card-content">
                <div className="project-category">Gastronomía</div>
                <div className="project-info">
                  <h3>Contigo Pan y Cebolla</h3>
                  <p className="project-description">
                    Sitio para emprendimiento gastronómico. Menú digital,
                    reservas online y galería de platos.
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-screenshot">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #00695c 0%, #00897b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  CONECTA FRANQUICIAS
                </div>
              </div>
              <div className="portfolio-card-content">
                <div className="project-category">Negocios</div>
                <div className="project-info">
                  <h3>Conecta Franquicias</h3>
                  <p className="project-description">
                    Marketplace de franquicias. Buscador avanzado, fichas de negocios
                    y sistema de matching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section section-dark" id="pricing" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">Planes y Precios</h2>
          </div>
          
          <div className="pricing-toggle">
            <button
              className={paymentType === 'contado' ? 'active' : ''}
              onClick={() => setPaymentType('contado')}
            >
              Al Contado
            </button>
            <button
              className={paymentType === 'cuotas' ? 'active' : ''}
              onClick={() => setPaymentType('cuotas')}
            >
              3 Cuotas
            </button>
            <button
              className={paymentType === 'suscripcion' ? 'active' : ''}
              onClick={() => setPaymentType('suscripcion')}
            >
              6 Meses
            </button>
          </div>
          
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="plan-badge">Esencial</div>
              <h3 className="plan-title">Landing Simple</h3>
              <p className="plan-description">
                Perfecto para validar tu idea o lanzar una campaña específica
              </p>
              
              <div className="price">
                <span className="price-currency">$</span>
                {getPriceDisplay('esencial').main}
                {paymentType !== 'contado' && <span style={{ fontSize: '1rem', fontWeight: 500 }}>/mes</span>}
              </div>
              <div className="price-period">
                {getPriceDisplay('esencial').sub}
              </div>
              
              <div className="delivery-info">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Entrega: 48-72 horas
              </div>
              
              <button className="btn btn-primary" style={{ width: '100%', marginBottom: 'var(--space-5)' }}>
                Comenzar
              </button>
              
              <ul className="features-list">
                <li>1 página optimizada</li>
                <li>Diseño responsive</li>
                <li>Formulario de contacto</li>
                <li>Botón de WhatsApp</li>
                <li>Google Analytics</li>
                <li>Certificado de seguridad</li>
                <li>2 rondas de ajustes</li>
                <li>15 días de soporte</li>
              </ul>
            </div>
            
            <div className="pricing-card">
              <div className="plan-badge">Completa</div>
              <h3 className="plan-title">Landing Pro</h3>
              <p className="plan-description">
                Para empresas que necesitan explicar su propuesta y convertir
              </p>
              
              <div className="price">
                <span className="price-currency">$</span>
                {getPriceDisplay('completa').main}
                {paymentType !== 'contado' && <span style={{ fontSize: '1rem', fontWeight: 500 }}>/mes</span>}
              </div>
              <div className="price-period">
                {getPriceDisplay('completa').sub}
              </div>
              
              <div className="delivery-info">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Entrega: 5 días
              </div>
              
              <button className="btn btn-primary" style={{ width: '100%', marginBottom: 'var(--space-5)' }}>
                Comenzar
              </button>
              
              <ul className="features-list">
                <li>Todo de Esencial +</li>
                <li>Hasta 6 secciones</li>
                <li>10 imágenes optimizadas</li>
                <li>2 formularios personalizados</li>
                <li>Animaciones de scroll</li>
                <li>Meta Pixel (Ads)</li>
                <li>Iconografía personalizada</li>
                <li>2 rondas de ajustes</li>
                <li>30 días de soporte</li>
                <li>Sesión capacitación 30min</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-alt" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">
              Lo que dicen quienes ya no tienen que lidiar con agencias
            </h2>
          </div>
        </div>
        
        <div className="testimonials-wrapper">
          <div className="testimonials">
            {/* First set */}
            <div className="testimonial">
              <div className="testimonial-quote">
                "Después de gastar $1.5M en una agencia que nunca entregó, 
                Pagelab me hizo la página en 4 días por $400k. Funciona, se ve bien, 
                y no tuve que perseguir a nadie."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MU</div>
                <div className="author-info">
                  <strong>Martín Ulloa</strong>
                  <span>Fundador de Tekio</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-quote">
                "Llevaba 3 semanas peleando con Wix. Les pagué un viernes, 
                el martes ya estaba publicado. La única vez que algo salió 
                como prometieron."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">VR</div>
                <div className="author-info">
                  <strong>Valentina Rojas</strong>
                  <span>Arquitecta</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-quote">
                "Necesitaba una página para una campaña que empezaba en una semana. 
                Todos me dijeron que imposible. Pagelab lo hizo en 4 días. 
                Salvaron mi lanzamiento."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">DC</div>
                <div className="author-info">
                  <strong>Diego Campos</strong>
                  <span>Startup Fintech</span>
                </div>
              </div>
            </div>

            {/* Duplicate set for infinite scroll */}
            <div className="testimonial">
              <div className="testimonial-quote">
                "Después de gastar $1.5M en una agencia que nunca entregó, 
                Pagelab me hizo la página en 4 días por $400k. Funciona, se ve bien, 
                y no tuve que perseguir a nadie."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MU</div>
                <div className="author-info">
                  <strong>Martín Ulloa</strong>
                  <span>Fundador de Tekio</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-quote">
                "Llevaba 3 semanas peleando con Wix. Les pagué un viernes, 
                el martes ya estaba publicado. La única vez que algo salió 
                como prometieron."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">VR</div>
                <div className="author-info">
                  <strong>Valentina Rojas</strong>
                  <span>Arquitecta</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-quote">
                "Necesitaba una página para una campaña que empezaba en una semana. 
                Todos me dijeron que imposible. Pagelab lo hizo en 4 días. 
                Salvaron mi lanzamiento."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">DC</div>
                <div className="author-info">
                  <strong>Diego Campos</strong>
                  <span>Startup Fintech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">Las preguntas que todos hacen</h2>
          </div>
          
          <div className="faq-list">
            {[
              {
                q: "¿Realmente puedo tener mi página en 3-5 días?",
                a: "Sí. Una vez que nos envías tu información (textos, imágenes, colores), comenzamos de inmediato. Plan Esencial listo en 48-72 horas, Plan Completa en 5 días. Incluye tiempo para ajustes."
              },
              {
                q: "¿Qué pasa si no me gusta el resultado?",
                a: "Ambos planes incluyen 2 rondas de ajustes. Revisas el preview antes de publicar y pedís los cambios que necesites. Solo publicamos cuando estés 100% conforme."
              },
              {
                q: "¿Necesito conocimientos técnicos?",
                a: "Para nada. Solo necesitas enviarnos tus textos (o ideas para que los redactemos), imágenes y logo. Nosotros nos encargamos de todo lo técnico: diseño, programación, publicación y seguridad."
              },
              {
                q: "¿La página va a funcionar bien en celulares?",
                a: "Sí, todas nuestras páginas son responsive (se adaptan automáticamente a celular, tablet y computador). La mayoría de tus visitantes entrarán desde el celular, por eso le damos especial atención."
              },
              {
                q: "¿Tengo que pagar hosting o dominio aparte?",
                a: "El hosting está incluido sin costo mensual. El dominio (tu-negocio.cl) lo puedes traer si ya tienes uno, o te ayudamos a comprarlo (cuesta aprox $15-20k/año). No hay costos ocultos."
              },
              {
                q: "¿Puedo cancelar o pedir reembolso?",
                a: "Como son proyectos personalizados que comenzamos apenas confirmas, no hacemos reembolsos. Pero trabajamos contigo hasta que quedes conforme con el resultado - ese es nuestro compromiso."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.q}
                  <svg
                    className={`faq-icon ${openFaq === index ? 'open' : ''}`}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                  <div className="faq-answer-content">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-dark" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">
              ¿Listo para tener tu página web?
            </h2>
            <p className="section-subheadline">
              Proceso simple, entrega rápida, resultado profesional.
              Comienza hoy mismo.
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('pricing')} 
              style={{ background: 'var(--color-white)', color: 'var(--color-noir)' }}
            >
              Ver Planes →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-stats">
            <div className="footer-stat">+127 páginas entregadas este año</div>
            <div className="footer-stat">Promedio: 4 días</div>
            <div className="footer-stat">100% satisfechos</div>
          </div>
          <div className="footer-text">
            © 2026 Pagelab. Páginas web profesionales, entrega rápida.
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/56900000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
