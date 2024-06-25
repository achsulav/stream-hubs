import React, { useState } from "react";

export const About = ({ title, content }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <>
      <section id="page-title" className="page-title">
        <div className="container">
          <div className="row">
            
          </div>
        </div>
      </section>

      <section id="featured1" className="featured featured-1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="heading">
                <p className="subheading">Our Story</p>
                <h2>About The Company</h2>
              </div>
              <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion}>
                  <h6>

                  Founded in [2020], Stream-Hub was born out of a love for movies and a desire to create a community where film buffs can explore, discover, and discuss their favorite films. From the latest blockbusters to timeless classics, we cover a wide range of genres and styles to cater to every taste.

                  </h6>
                  <span
                    className={
                      isOpen ? "accordion-icon rotate" : "accordion-icon"
                    }
                  ></span>
                </div>
                {isOpen && (
                  <div className="accordion-content">
                    <p>
                      
                    </p>
                  </div>
                )}
              </div>
              <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion1}>
                  <h6>OUR MISSION</h6>
                  <span
                    className={
                      isOpen1 ? "accordion-icon rotate" : "accordion-icon"
                    }
                  ></span>
                </div>
                {isOpen1 && (
                  <div className="accordion-content">
                    <p><b>
                    At Stream-Hub, our mission is to create a vibrant community where movie lovers can come together to explore, discover, and discuss their favorite films. We strive to provide the most comprehensive and up-to-date information on movies, including reviews, trailers, news, and more. Our goal is to make your movie-watching experience as enjoyable and informed as possible.
                    </b></p>
                  </div>
                )}
              </div>
              <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion2}>
                  <h6>OUR VISION</h6>
                  <span
                    className={
                      isOpen2 ? "accordion-icon rotate" : "accordion-icon"
                    }
                  ></span>
                </div>
                {isOpen2 && (
                  <div className="accordion-content">
                    <p><b>
                    Our vision is to become the leading online platform for movie enthusiasts around the world. We aim to build a space where fans can find everything they need to know about movies, from in-depth analyses and behind-the-scenes insights to the latest industry news. We envision a future where Stream-Hub is synonymous with quality movie content and a thriving community of film buffs.
                    </b></p>
                  </div>
                )}
              </div>
              <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion3}>
                  <h6>OUR GOALS</h6>
                  <span
                    className={
                      isOpen3 ? "accordion-icon rotate" : "accordion-icon"
                    }
                  ></span>
                </div>
                {isOpen3 && (
                  <div className="accordion-content">
                    <p><b>
                      Comprehensive Content: To provide a vast array of content that covers every aspect of the movie industry, from the latest releases to classic films.
                      <br />Community Engagement: To foster a lively and interactive community where movie lovers can share their thoughts, opinions, and recommendations.
                      <br />User Experience: To continuously enhance our website to ensure it is user-friendly, informative, and visually appealing.
                      <br />Partnerships: To build strong relationships with filmmakers, studios, and other industry stakeholders to bring exclusive content and insider information to our users.
                      <br />Innovation: To stay at the forefront of technology and trends in the digital space, offering new and exciting features to enhance our users' experience.
                      </b></p>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="heading">
                <p className="subheading">We Are Good</p>
                <h2>Our Features</h2>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="feature-panel">
                    <div className="feature-icon">
                    <i className="fa-regular fa-clock"></i>               
                    </div>
                    <h4 className="featured-title">Always Available</h4>
                    <p>
                      <b>Our team of qualified agents is available 24/7 to assist you. Whether you need help with recommendations, technical support, or navigating our site, we're here to provide top-notch service at any time.</b>
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="feature-panel">
                    <div className="feature-icon">
                    <i className="fa-brands fa-black-tie"></i>
                    </div>
                    <h4 className="featured-title">Qualified Agents</h4>
                    <p><b>
                    Our agents are knowledgeable and friendly, ready to answer any questions you might have. They are experts in the world of movies and are committed to enhancing your experience with us.
                    </b> </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="feature-panel mb-0">
                    <div className="feature-icon">
                    <i className="fa-solid fa-wallet"></i>
                    </div>
                    <h4 className="featured-title">Fair Prices</h4>
                    <p><b>We believe that great movies should be accessible to everyone. Our pricing is transparent and competitive, ensuring you get the best value for your money without any hidden fees.</b></p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="feature-panel mb-0">
                    <div className="feature-icon">
                    <i className="fa-regular fa-star"></i>
                    </div>
                    <h4 className="featured-title">Best Offers</h4>
                    <p><b>
                    We regularly offer exclusive deals and special promotions. Enjoy discounts, bundle deals, and seasonal offers that maximize your movie-watching experience.
                    </b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};