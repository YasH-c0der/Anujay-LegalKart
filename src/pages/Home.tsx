import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaArrowRight, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Tbm from '../components/Sections/Tbm';
import hero from '../assets/images/nav_img.png'
import one from '../assets/stock/1.webp';
import two from '../assets/stock/2.webp';
import three from '../assets/stock/3.webp';
import four from '../assets/stock/4.jpg'
import five from '../assets/stock/5.avif'
import six from '../assets/stock/6.avif'
import seven from '../assets/stock/7.webp'
import Section_1 from './Section_1';
import Section_2 from './Section_2';


const Home = () => {
  const testimonials = [
    {
      id: 1,
      name: "Vijay Karnani",
      role: "Business Owner",
      rating: 5,
      text: "I've been using the LegalKart app and it is really handy. Unlike having to meet a lawyer in-person, it is quick and simple. It is good how I was able to understand terms from their experts easily. The app is superb especially the way in which you get the lawyer."
    },
    {
      id: 2,
      name: "Krishnamoorthy B",
      role: "Corporate Manager",
      rating: 5,
      text: "The application works at straightforward and easy to understand terms and a user's query is quickly routed to a lawyer. I like how precise the platform experience is."
    },
    {
      id: 3,
      name: "Manushi Jain",
      role: "Senior Manager",
      rating: 5,
      text: "The absolutely seamless chat on LegalKart was incredible helpful - making an otherwise complex task very simple for me. The assistance of an attorney was spot on, and what I received was a clear, easy to follow, and most recommended approach to my friends."
    }
  ];

  const partnerLogos = [
    { id: 1, name: 'Paytm', color: '#00b9f1' },
    { id: 2, name: 'Housing', color: '#ffce00' },
    { id: 3, name: 'Cleartax', color: '#ff7a59' },
    { id: 4, name: 'BARC', color: '#000000' },
    { id: 5, name: 'Future', color: '#eb2632' },
    { id: 6, name: 'Jio', color: '#0f174b' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <img
            src={hero}
            alt="Legal Consultation"
            className="w-full h-[226%] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Anytime Anywhere</h1>
            <p className="text-lg mb-8">Consult in 10 Indian Languages, anytime at just 399/min</p>
            <div className="mb-8">
              <button className="bg-[#F5EB9A] text-black px-6 py-3 rounded-md font-medium transition duration-300">
                Consult now
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              <div className="flex items-center">
                <span className="flex -space-x-2">
                  {[1, 2, 3].map(num => (
                    <div key={num} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-primary" />
                  ))}
                </span>
                <span className="ml-2 text-sm">3,471 Online Lawyers</span>
              </div>
              <div className="flex items-center">
                <span className="flex -space-x-2">
                  {[1, 2, 3].map(num => (
                    <div key={num} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-primary" />
                  ))}
                </span>
                <span className="ml-2 text-sm">1,356 Online Chats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      {/* <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h4 className="text-center text-sm font-medium mb-8 text-gray-500">TRUSTED BY OVER MILLION USERS</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map(partner => (
              <div key={partner.id} className="w-24 h-10 flex items-center justify-center">
                <div
                  className="w-full h-8"
                  style={{ backgroundColor: partner.color, borderRadius: '4px' }}
                >
                  <span className="text-white text-xs font-bold flex items-center justify-center h-full">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Tbm />

      {/* Services Section */}
      <section className="py-16 bg-accent-lightgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-primary">Our services</h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Need expert consultation on Legal Matters? You're in the right place! Experienced legal
            professionals are here for you 24X7. Whether it's a small query or a big concern, experts are
            ready to help with clear to respond advice in your local language.
            Let simple, straightforward expert help take the worry out of your legal matters.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="bg-[#F5F4FA] rounded-lg p-6 shadow-sm hover:shadow-xl hover:bg-[#fff] transition duration-700">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Online Consultation with a Lawyer</h3>
              <p className="text-gray-600 text-sm mb-4">
              Now consult a lawyer at your legal requirements without wasting time with secure code and verified lawyers.
              </p>
              <div className="flex flex-col space-y-2">
              <Link to="/legal-consultation" className="text-xs text-blue-600 hover:underline">Legal Advice Consultation</Link>
              <Link to="/business-advice" className="text-xs text-blue-600 hover:underline">Business Advice & Guidance</Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-[#F5F4FA] rounded-lg p-6 shadow-sm hover:shadow-xl hover:bg-[#fff] transition duration-700">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Documentation by Expert Professionals</h3>
              <p className="text-gray-600 text-sm mb-4">
                Companies, HNI professionals or paralegal can rely on our document services and customized to specific requirements only.
              </p>
              <div className="flex flex-col space-y-2">
                <Link to="/document-review" className="text-xs text-blue-600 hover:underline">I need to revise my document</Link>
                <Link to="/draft-document" className="text-xs text-blue-600 hover:underline">I need a draft</Link>
              </div>
            </div>

            {/* Service Card 3 */}
            {/* <div className="bg-[#F5F4FA] rounded-lg p-6 shadow-sm hover:shadow-xl hover:bg-[#fff] transition duration-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Check your citation status</h3>
              <p className="text-gray-600 text-sm mb-4">
                Check citation status with whatsapp and email
              </p>
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                <input
                  type="text"
                  placeholder="ENTER MOBILE NUMBER"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-2"
                />
                <label className="flex items-center text-xs text-gray-600 mb-2">
                  <input type="checkbox" className="mr-2" />
                  I agree to receive info, whatsapp and email
                </label>
                <button className="w-full bg-secondary text-white py-2 rounded-md text-sm hover:bg-secondary-dark transition duration-300">
                  Get Status
                </button>
              </div>
            </div> */}

            {/* Service Card 4 */}
            <div className="bg-[#F5F4FA] rounded-lg p-6 shadow-sm hover:shadow-xl hover:bg-[#fff] transition duration-700">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Property legal solutions for all your property investments</h3>
              <p className="text-gray-600 text-sm mb-4">
                Trusted Property Legal Solutions. We help you take care of Property investment decisions, check all Property Legal Solutions.
              </p>
              <div className="flex flex-col space-y-2">
                <Link to="/property-agreement" className="text-xs text-blue-600 hover:underline">Sale Agreement/ Agreement to Sale/ Builder</Link>
                <Link to="/property-draft" className="text-xs text-blue-600 hover:underline">Agreement to rent/ Lease</Link>
              </div>
            </div>

            {/* Service Card 5 - Startup */}
            <div className="bg-[#F5F4FA] rounded-lg p-6 shadow-sm hover:shadow-xl hover:bg-[#fff] transition duration-700">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Start-up Legal Solutions</h3>
              <p className="text-gray-600 text-sm mb-4">
                Planning to start-up or are an on-going startup, we'll help you solve the legal worries like Counseling, Drafting Review and Filing as well as much.
              </p>
              <div className="flex flex-col space-y-2">
                <Link to="/startup-registration" className="text-xs text-blue-600 hover:underline">Founder</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

        <Section_1 />

        <Section_2 />

      {/* Stats Section */}
      <section className="bg-black text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-1">10 Million +</h3>
              <p className="text-sm">Consulting Minutes</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1">5 million pages</h3>
              <p className="text-sm">Drafted and Reviewed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1">100,000</h3>
              <p className="text-sm">Start-ups Mentored</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Buy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Quick buy</h2>

          <div className="relative">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              pagination={{ clickable: true }}
              navigation
              className="py-8"
            >
              {/* Product Card 1 */}
              <SwiperSlide>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img
                      src={one}
                      alt="Online Lawyer Consultation"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary">ONLINE LAWYER CONSULTATION</h3>
                    <p className="text-xs text-gray-500">KartingTime for 30min</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium">Starting from ₹599</span>
                      </div>
                      <button className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <FaArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Product Card 2 */}
              <SwiperSlide>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img
                      src={two}
                      alt="Sale Agreement"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary">SALE AGREEMENT OR AGREEMENT TO SALE REVIEW</h3>
                    <p className="text-xs text-gray-500">Starting time 12 days</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium">Starting from ₹3999</span>
                      </div>
                      <button className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <FaArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Product Card 3 */}
              <SwiperSlide>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img
                      src={three}
                      alt="Agreement to Sale"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary">AGREEMENT TO SALE</h3>
                    <p className="text-xs text-gray-500">Starting time 2-3 days</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium">Starting from ₹3999</span>
                      </div>
                      <button className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <FaArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Product Card 4 */}
              <SwiperSlide>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img
                      src={four}
                      alt="Trademark"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary">TRADEMARK</h3>
                    <p className="text-xs text-gray-500">Starting time 15 days</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium">Starting from ₹6499</span>
                      </div>
                      <button className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <FaArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-accent-lightgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Hear what our users have to say</h2>

          <div className="relative">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              pagination={{ clickable: true }}
              navigation
              className="py-8"
            >
              {testimonials.map(testimonial => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                        {/* <img src={five} alt="five" /> */}
                         </div>
                      <div>
                        <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={`star-${testimonial.id}-${i}`} className="text-yellow-400 mr-1" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{testimonial.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Questions?<br />We're here to help</h2>
              <p className="mb-6">
                Check out our FAQs or talk to a live customer care specialist by phone, chat, or email.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+918448234234" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition duration-300">
                  <FaPhoneAlt size={16} />
                </a>
                <a href="/chat" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
                <a href="mailto:info@legalkart.com" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-primary-dark rounded-lg p-4">
                <h3 className="font-semibold mb-1">WHAT IS ONLINE LEGAL CONSULTATION?</h3>
                <p className="text-sm text-gray-300">Online legal consultation or online lawyer consultation is enabled to connect clients and lawyers over the internet. It is a convenient way to get timely expert advice.</p>
              </div>

              <div className="bg-primary-dark rounded-lg p-4">
                <h3 className="font-semibold mb-1">ARE YOUR ONLINE LAWYERS QUALIFIED?</h3>
                <p className="text-sm text-gray-300">All our lawyers are assessed through manual verification of Bar Council ID and other credentials.</p>
              </div>

              <div className="bg-primary-dark rounded-lg p-4">
                <h3 className="font-semibold mb-1">WHAT HAPPENS IF I DON'T GET A RESPONSE FROM A LAWYER?</h3>
                <p className="text-sm text-gray-300">At LegalKart we have a strict policy to ensure customer satisfaction. In the rare event that you don't receive a response, we provide a full refund.</p>
              </div>

              <div className="bg-primary-dark rounded-lg p-4">
                <h3 className="font-semibold mb-1">HOW DO I START ONLINE CONSULTATION WITH LAWYER ON LEGALKART?</h3>
                <p className="text-sm text-gray-300">Simply download our app or visit our website, select a lawyer based on your requirements, and begin your consultation.</p>
              </div>

              <div className="bg-primary-dark rounded-lg p-4">
                <h3 className="font-semibold mb-1">IS ONLINE LAWYER CONSULTATION SAFE AND SECURED ON LEGALKART?</h3>
                <p className="text-sm text-gray-300">Yes, all communications on LegalKart are end-to-end encrypted and we follow strict privacy policies to ensure your data remains confidential.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Our Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map(partner => (
              <div key={partner.id} className="w-24 h-16 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full"
                  style={{ backgroundColor: partner.color }}
                >
                  <span className="text-white text-sm font-bold flex items-center justify-center h-full">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
