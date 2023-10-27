import React from 'react'
import heroImg from "../../assets/images/muhib.png"
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <section className="pt-0 " id='about'>
        <div className="container pt-14">
          <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
            <div className="w-full md:basis-1/2">
              <h5 data-aos='fade-right' data-aos-duration='1500'
              className='text-headingColor font-[600] text-[16px]'>
                  hello welcome
              </h5>
              <h1 data-aos='fade-up' data-aos-duration='1500'
              className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] 
              leading-[35px] sm:leading-[46px] mt-5'>
                  I'm Mezouara Chaymaa <br /> Full Stack developper
              </h1>
              <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200' 
              className='flex items-center gap-6 mt-7'>
                    <a href="#contact">
                      <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor 
                      ease-in duration-300 py-2 px-4 rounded-[8px]'>
                        <i className="ri-mail-line"></i> Here me
                      </button>
                      </a>  
                      <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid 
                      border-smallTextColor'>
                        See portfolio
                      </a>  
              </div>
              <p data-aos='fade-left' data-aos-duration='1500' className='flex 
                      gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                        <span><i className="ri-apps-2-line"></i></span>
                        I am a dedicated and passionate full-stack developer with a deep love for all things technology. With a strong foundation in both front-end and back-end development, I thrive in the dynamic world of web and application development. My journey in the world of coding began years ago, and I have since honed my skills in various programming languages, frameworks, and tools to bring digital visions 
                        to life. I am an enthusiastic problem solver who enjoys the challenges of creating elegant and efficient solutions. 
                      </p>
                      <div className="flex items-center gap-5 mt-14">
                        <span className="text-smallTextColor text-[15px] font-[600]">
                          Follow me:
                        </span>
                        
                        <span>
                          <a href="https://github.com/ChaymaaMez" className='text-smallTextColor text-[18px] font-[600]'>
                            <i className="ri-github-fill"></i>
                          </a>
                        </span>
                        <span>
                          <a href="https://www.linkedin.com/in/chaymaa-mezouara/" className='text-smallTextColor text-[18px] font-[600]'>
                          <i class="ri-linkedin-box-fill"></i>
                          </a>
                        </span>
                        <span>
                          <a href="https://instagram.com/chaymaa_mezou?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className='text-smallTextColor text-[18px] font-[600]'>
                          <i class="ri-instagram-line"></i>
                          </a>
                        </span>
                      </div>
            </div>
            <div className="basis-1/2 mt-10 sm:mt-10">
              <figure className='flex items-center justify-center'>
                <img src={heroImg} className='rounded-[50px]' alt="" />
              </figure>
            </div>
            <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 
            md:flex-col md:justify-end md:text-end'>
                <div className="mb-10">
                  <h2 className='text-headingColor font-[700] text-[32px]'>
                    <CountUp start={0} end={1} duration={2} suffix='+' />
                  </h2>
                  <h4 className="text-headingColor font-[600] text-[18px]">
                    years of experience
                  </h4>
                </div>
                <div className="mb-10">
                  <h2 className='text-headingColor font-[700] text-[32px]'>
                    <CountUp start={0} end={100} duration={2} suffix='%' />
                  </h2>
                  <h4 className="text-headingColor font-[600] text-[18px]">
                    success rate
                  </h4>
                </div>
                <div className="mb-10">
                  <h2 className='text-headingColor font-[700] text-[32px]'>
                    <CountUp start={0} end={6} duration={2} suffix='+' />
                  </h2>
                  <h4 className="text-headingColor font-[600] text-[18px]">
                    Happy client
                  </h4>
                </div>
                <div className="mb-10">
                  <h2 className='text-headingColor font-[700] text-[32px]'>
                    <CountUp start={0} end={10} duration={2} suffix='+' />
                  </h2>
                  <h4 className="text-headingColor font-[600] text-[18px]">
                    projets completed
                  </h4>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero