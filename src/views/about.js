import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'
import PortofolioCard from '../components/portofolio-card'
import BlogCard from '../components/blog-card'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - React Developer Mode</title>
        <meta property="og:title" content="About - React Developer Mode" />
      </Helmet>
      <Navigation></Navigation>
      <main className="about-main">
        <div className="about-hero section-container">
          <div className="about-max-width max-content-container">
            <div className="about-heading-container">
              <h1 className="about-text Heading1">
                <span>We are a creative agency based</span>
                <br></br>
                <span>in Massachusetts</span>
              </h1>
              <span className="about-text03">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </span>
                <br></br>
                <span>
                  {' '}
                  tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </span>
              <button className="about-primary button-primary button-lg button">
                Get in touch with us
              </button>
            </div>
            <div className="about-gallery">
              <div className="about-container1">
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095-1000w.png"
                  className="about-image"
                />
              </div>
              <div className="about-container2">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1663431513424-240e1ad75e2d?ixid=Mnw5MTMyMXwwfDF8YWxsfDEwMnx8fHx8fDJ8fDE2NjM2MzQ1MTc&amp;ixlib=rb-1.2.1&amp;w=1000"
                  className="about-image1"
                />
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B2%5D-1000w.png"
                  className="about-image2"
                />
              </div>
              <div className="about-container3">
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B3%5D-1000w.png"
                  className="about-image3"
                />
                <div className="about-container4">
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B4%5D-1000w.png"
                    className="about-image4"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B5%5D-1000w.png"
                    className="about-image5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-services section-container">
          <div className="about-max-width1 max-content-container">
            <div className="about-heading-container1">
              <div className="about-text-container">
                <span className="about-text07">our services</span>
                <h2 className="Heading2">
                  <span>
                    We provide a wide range of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>creative solutions</span>
                </h2>
              </div>
              <div className="about-controls">
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="about-icon">
                    <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                  </svg>
                </button>
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="about-icon02">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="about-cards-container">
              <ServicesCard></ServicesCard>
              <ServicesCard
                text="Copy-writting"
                image_src="/playground_assets/file-document-200w.png"
              ></ServicesCard>
              <ServicesCard
                text="Product Design"
                image_src="/playground_assets/dice-5-200h.png"
              ></ServicesCard>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="about-max-width2 max-content-container">
            <div className="about-text-container1">
              <span className="about-text12">our work</span>
              <h2 className="about-text13 Heading2">
                <span>Explore our portfolio</span>
              </h2>
              <span className="about-text15">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation.
                </span>
              </span>
              <button className="button-secondary button-lg button">
                See all projects
              </button>
            </div>
            <div className="about-tab-selector-header">
              <span className="about-text19 tab-selector-btn">Advertising</span>
              <span className="about-text20 tab-selector-btn">
                Social Media
              </span>
              <span className="about-text21 tab-selector-btn">Branding</span>
              <span className="about-text22 tab-selector-btn">UI / UX</span>
              <span className="about-text23 tab-selector-btn">Packaging</span>
              <span className="tab-selector-btn">Product Design</span>
            </div>
            <div className="about-tab-selector-cards-container">
              <PortofolioCard
                image_src="/playground_assets/unsplash_qj15unotnh0-400h.png"
                rootClassName="portofolio-card-root-class-name6"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/unsplash_wwqrpsnbpq4-400h.png"
                project_title="A brand-new advertising idea"
                rootClassName="portofolio-card-root-class-name7"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjb2NhJTIwY29sYXxlbnwwfHx8fDE2NDY5MjYyNTM&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Coca-Cola Summer Concept Campaign - 2021"
                rootClassName="portofolio-card-root-class-name8"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG51dGVsbGF8ZW58MHx8fHwxNjQ2OTI2MTky&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Ad Campaign - I love you as much as I love Nutella"
                rootClassName="portofolio-card-root-class-name9"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNvY2ElMjBjb2xhfGVufDB8fHx8MTY0NjkyNjI1Mw&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Coca-Colla Next Door Campaign - conceptual"
                rootClassName="portofolio-card-root-class-name10"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXJidWNrc3xlbnwwfHx8fDE2NDY5MjYyMzc&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Starbucks secret is a smile when you get your latte"
                rootClassName="portofolio-card-root-class-name11"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div className="about-about section-container">
          <div className="about-max-width3 max-content-container">
            <div className="about-text-container2">
              <span className="about-text25">about us</span>
              <h2 className="about-text26 Heading2">
                <span>
                  We build brands with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>purpose and impact</span>
              </h2>
              <span className="about-text30">
                We are a full-service digital creative agency with brick and
                mortar offices and plenty of in-house talent.
              </span>
              <div className="about-checklist">
                <div className="about-check-item">
                  <svg viewBox="0 0 1024 1024" className="about-icon04">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="about-text31">
                    Quality services and support all time
                  </span>
                </div>
                <div className="about-check-item1">
                  <svg viewBox="0 0 1024 1024" className="about-icon06">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="about-text32">
                    Long-term strategy development
                  </span>
                </div>
                <div className="about-check-item2">
                  <svg viewBox="0 0 1024 1024" className="about-icon08">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="about-text33">
                    FREE Brand Audit for startups
                  </span>
                </div>
                <div className="about-check-item3">
                  <svg viewBox="0 0 1024 1024" className="about-icon10">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="about-text34">
                    Over 10 years in the business
                  </span>
                </div>
                <div className="about-check-item4">
                  <svg viewBox="0 0 1024 1024" className="about-icon12">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="about-text35">Future-Proofing Projects</span>
                </div>
                <div className="about-check-item5">
                  <svg viewBox="0 0 1024 1024" className="about-icon14">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="about-text36">
                    Support in any implementation
                  </span>
                </div>
              </div>
            </div>
            <div className="about-image-container">
              <img
                alt="image"
                src="/playground_assets/rectangle%20109-1000w.png"
                className="about-image6"
              />
            </div>
          </div>
        </div>
        <div className="about-process section-container">
          <div className="about-max-width4 max-content-container">
            <span className="about-text37">Our process</span>
            <h2 className="about-text38 Heading2">
              <span>
                We use a simple three step process.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Take a look.</span>
            </h2>
            <div className="about-step">
              <span className="about-text42">01</span>
              <div className="about-container5">
                <span className="about-text43">Finding the best idea</span>
                <span className="about-text44">
                  There are countless businesses already in existence, so it’s
                  very likely that you won’t be the first person to think of an
                  idea or product. There are countless businesses already in
                  existence, so it’s very likely that you won’t be the first
                  person to think of an idea or product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="about-step1">
              <span className="about-text45">02</span>
              <div className="about-container6">
                <span className="about-text46">
                  Intense Brain storming
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="about-text47">
                  Brainstorming is a process of toiling and generating new ideas
                  alone or by holding intensive group discussions between team
                  members in a team.
                </span>
              </div>
            </div>
            <div className="about-step2">
              <span className="about-text48">03</span>
              <div className="about-container7">
                <span className="about-text49">Strong design execution</span>
                <span className="about-text50">
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="about-max-width5 max-content-container">
            <span className="about-text51">from blog</span>
            <h2 className="about-text52 Heading2">
              <span>Our latest articles and resources</span>
            </h2>
            <span className="about-text54">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <button className="about-primary2 button-secondary button-lg button">
              Explore the blog
            </button>
            <div className="about-blog-cards-container">
              <BlogCard rootClassName="blog-card-root-class-name2"></BlogCard>
              <BlogCard
                text1="Aug 14, 2022"
                button="advertising"
                image_src="/playground_assets/rectangle%2099%20%5B1%5D-1500w.png"
                rootClassName="blog-card-root-class-name3"
              ></BlogCard>
              <BlogCard
                text1="Jul 12, 2022"
                button="Branding"
                image_src="/playground_assets/unsplash_h7qmwoxf6z8-1500w.png"
              ></BlogCard>
            </div>
          </div>
        </div>
        <div className="about-banner section-container">
          <div className="about-max-width6 max-content-container">
            <span className="about-text58">what are you waiting?</span>
            <h2 className="about-text59 Heading2">
              <span>Let’s collaborate!</span>
            </h2>
            <span className="about-text61">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <button className="about-primary3 button-lg button-secondary-white button">
              Contact us
            </button>
          </div>
        </div>
      </main>
      <div className="section-container">
        <div className="max-content-container">
          <div className="about-top-part">
            <div className="about-links-container">
              <div className="about-product-container">
                <span className="about-text65">Product</span>
                <span className="about-text66">About</span>
                <span className="about-text67">Portofolio</span>
                <span>Blog</span>
              </div>
              <div className="about-navigate-container">
                <span className="about-text69">Navigate</span>
                <span className="about-text70">Copyrights</span>
                <span className="about-text71">Sitemap</span>
                <span>Privacy Policy</span>
              </div>
              <div className="about-contact-container">
                <span className="about-text73">Contact Us</span>
                <span className="about-text74">
                  <span>2157 Village View</span>
                  <br></br>
                  <span>
                    Drive, Old Fort
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Myers Florida
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>33901</span>
                </span>
              </div>
            </div>
            <div className="about-subscribe-container">
              <span className="about-text82">Subscribe to our newsletter</span>
              <input
                type="text"
                placeholder="Enter your e-mail address"
                className="about-textinput input"
              />
              <button className="button-primary button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="about-separator"></div>
        <footer className="about-max-width8 max-content-container">
          <img
            alt="image"
            src="/playground_assets/logo1-200h.png"
            className="about-image7"
          />
          <span className="about-text83">
            <span>
              All rights recived @
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="about-text85">
              aesthetics
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              | Designed by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="about-text87">teleporhq.io</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default About
