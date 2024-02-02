import './App.css';
import { GoMail } from "react-icons/go";
import { FaCertificate } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import myimage from'./image/creative-logo-blue.svg';
import myimage1 from'./image/creative-logo-white.svg';
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import { FaHandPointRight } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { BsStarHalf,BsChevronLeft,BsChevronRight } from "react-icons/bs";
import { FaQuoteRight} from "react-icons/fa";








function App() {
  return (
      <div className="main_part">
          <div className="main_header">
              <div className="header">
                <div>
                  <i className='icon_2'><GoMail></GoMail></i>
                  <span className='info'>info@cdmi.info</span>
                  <i className='icon_2'><FaCertificate></FaCertificate></i>
                  <span className='verify'>verify certificate</span>
                </div>
                <p className='haveany'>HAVE ANY QUESTION?+91 90333 16003</p>
                <p className='icon'>  
                  <i><FaFacebookF></FaFacebookF></i>
                  <i><FaTwitter></FaTwitter></i>
                  <i><TiSocialGooglePlus></TiSocialGooglePlus></i>
                  <i><FaLinkedin></FaLinkedin></i>
                  <i><TiSocialInstagram></TiSocialInstagram></i>
                  <i><CiYoutube></CiYoutube></i>
                  <i><FaWhatsapp></FaWhatsapp></i>
                </p>
              </div>
          </div>


          
      <div className='container'>
    <div className="nav_bar">

        <div className='logo'>
            {/* <img src={require('./image/creative-logo-blue.svg')}></img> */}
            <img src={myimage}></img>
        </div>
                    <div className="main_menu">
                        <li className="active"> Home</li>
                        <li>courses
                                    </li>
                        <li>
                            activites
                            <ul className="sub_menu">
                                {/* <li>gallery</li>
                                <li>event</li> */}
                             </ul>
                        </li>
                        <li>blog</li>
                        <li>
                          know us
                            <ul className="sub_menu">
                               {/* <li>about us</li>
                               <li>success stories</li>
                               <li>placement partners</li>  */}
                            </ul>

                        </li>
                        <li>get in touch</li>
                        <li>
                          student zone
                            <ul className="sub_menu">
                                {/* <li>student login</li>
                                <li>show case</li> */}
                            </ul>
                        </li>
                </div>
            </div>
          </div>

          
          <div className='slider'>
              <div className='slider_img'> 
                  <img src={require('./image/2.webp')}></img>
              </div>
          </div>

          <div className='offer_part'>
              <div className='two_p'>
                  <div className='line'></div>
                  <div className='text_cdmi'>CREATIVE COURSE</div>
              </div>
              <p className='course'>OFFERED COURSES</p>
          </div>

          <div className='six_part'>
              <div className='first'>
                <div className='one'>
                  <div className='one_img'>
                    <img src={require('./image/one.webp')}></img>
                  </div>
                  <p className='dev'>Development Courses</p>
                  <p className='br_line'></p>
                  <div className='two_start'>
                      <p className='start_icon'>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoStarHalfOutline></IoStarHalfOutline></i>
                      </p>
                      <p>
                        <a href='#' className='btn'>Know More..!</a>
                      </p>
                  </div>
                </div>
                <div className='two'>
                  <div className='one_img'>
                    <img src={require('./image/two.webp')}></img>
                  </div>
                  <p className='dev'>Design Courses</p>
                  <p className='br_line'></p>
                  <div className='two_start'>
                      <p className='start_icon'>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoStarHalfOutline></IoStarHalfOutline></i>
                      </p>
                      <p>
                        <a href='#' className='btn'>Know More..!</a>
                      </p>
                  </div>
                </div>
                <div className='three'>
                  <div className='one_img'>
                    <img src={require('./image/three.webp')}></img>
                  </div>
                  <p className='dev'>Programming IT</p>
                  <p className='br_line'></p>
                  <div className='two_start'>
                      <p className='start_icon'>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoStarHalfOutline></IoStarHalfOutline></i>
                      </p>
                      <p>
                        <a href='#' className='btn'>Know More..!</a>
                      </p>
                  </div>
                </div> 
              </div>
              <div className='sec'>
                <div className='one'>
                  <div className='one_img'>
                    <img src={require('./image/img4.webp')}></img>
                  </div>
                  <p className='dev'>Trendy Courses</p>
                  <p className='br_line'></p>
                  <div className='two_start'>
                      <p className='start_icon'>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoStarHalfOutline></IoStarHalfOutline></i>
                      </p>
                      <p>
                        <a href='#' className='btn'>Know More..!</a>
                      </p>
                  </div>
                </div>
                <div className='two'>
                  <div className='one_img'>
                    <img src={require('./image/img5.webp')}></img>
                  </div>
                  <p className='dev'>Civil-Mech. Engineering</p>
                  <p className='br_line'></p>
                  <div className='two_start'>
                      <p className='start_icon'>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoStarHalfOutline></IoStarHalfOutline></i>
                      </p>
                      <p>
                        <a href='#' className='btn'>Know More..!</a>
                      </p>
                  </div>
                </div>
                <div className='three'>
                  <div className='one_img'>
                    <img src={require('./image/img6.webp')}></img>
                  </div>
                  <p className='dev'>Business Development</p>
                  <p className='br_line'></p>
                  <div className='two_start'>
                      <p className='start_icon'>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoStarHalfOutline></IoStarHalfOutline></i>
                      </p>
                      <p>
                        <a href='#' className='btn'>Know More..!</a>
                      </p>
                  </div>
                </div> 
              </div>
          </div>
          <div className='btn_part'>
            <a className='btn1'>View All Courses</a>
          </div>

          <div className='main_two'>
              <div className='text'>
                <div className='two_p1'>
                    <div className='line1'></div>
                    <div className='text_cdmi'>ABOUT US</div>
                </div> 
                <p className='career'>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</p>
                <p className='prag'>
                Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
                </p>
                <div className='btn_part1'>
                  <a className='btn2'>Enroll Now... !</a>
                </div>
              </div>
              <div className='photo'>
                <div className='img_sir'>
                  <img src={require('./image/about-us.jpg')}></img>
                </div>
                <p className='play'>
                <a href='https://youtu.be/ZZpoqf-mwEM?si=mxur6i92DSBGZUoo'><i className='p_icon'><FaPlay></FaPlay></i></a>
                </p>
              </div>
          </div>

          <div className='ss'>
          <img src={require('./image/ss.png')}></img>
          </div>


          <div class='happy-us'>
              <div className='container'>
                  <div class='test-main'>
                    <div class='test-head'>
                            <p class='test1-head'>
                              <hr></hr>
                              <span>HAPPY STUDENTS</span>
                            </p>
                            <p class='test2-head'>
                                <h1>ALUMNI SPEAK</h1>
                            </p>
                            <p className='test-icon'>
                              <p><FaQuoteRight></FaQuoteRight></p>
                              <div>
                                <p><BsChevronLeft></BsChevronLeft></p>
                                <p><BsChevronRight></BsChevronRight></p>
                              </div>
                            </p>
                            <p class='test-info'>I have joined creative multimedia institute for UI/UX Design course two months ago. Had a really great experience in learning the course. I am thankful to the sir who taught us really well with different approaches. This learning process gave me confidence on how to explore myself better with higher level of understanding. Thank you creative multimedia.
                            </p>
                            <p class='test-person'>
                              <img src={require(`./image/girl.jpg`)}></img>
                              <span>
                                  <p>Goti Shruti</p>
                                  <i>
                                     <h5>Android Developer </h5>
                                     <p>@ KD Infotach</p>
                                  </i>
                              </span>
                            </p>
                        </div>
                      <div class='test-img'>
                            <div class='test-photo'>
                                <img src={require(`./image/testimonial_shape.png`)}></img>
                            </div>
                      </div>
                    </div>
              </div>
        </div>
          <div className='choose_part'>
            <div className='offer_part'>
                <div className='two_p'>
                    <div className='line'></div>
                    <div className='text_cdmi'>READ OUR DIFFERENCE</div>
                </div>
                <p className='course'>WHY CHOOSE CREATIVE</p>
            </div>
            <div className='six_part1'>
              <div className='first1'>
                <div className='one1'>
                  <div className='one_img1'>
                    <img src={require('./image/1.png')}></img>
                  </div>
                  <p className='industry'>Industry Experts As Trainers</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
                <div className='one1'>
                  <div className='one_img2'>
                    <img src={require('./image/7.png')}></img>
                  </div>
                  <p className='industry'>Latest Curriculum</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
                <div className='one1'>
                  <div className='one_img3'>
                    <img src={require('./image/3.png')}></img>
                  </div>
                  <p className='industry'>Latest Technology</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
              </div>
              <div className='sec1'>
              <div className='one1'>
                  <div className='one_img4'>
                    <img src={require('./image/4.png')}></img>
                  </div>
                  <p className='industry'>Interview Assistance</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
                <div className='one1'>
                  <div className='one_img5'>
                    <img src={require('./image/5.png')}></img>
                  </div>
                  <p className='industry'>Free Upgradation</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
                <div className='one1'>
                  <div className='one_img6'>
                    <img src={require('./image/6.png')}></img>
                  </div>
                  <p className='industry'>Lifetime Support</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
              </div>
          </div>
          </div>


          <div className='std'>
            <div className='offer_part'>
                  <div className='two_p'>
                      <div className='line'></div>
                      <div className='text_cdmi'>STUDENT PLACEMENT</div>
                  </div>
                  <p className='course'>OUR RECRUITMENT PARTNERS</p>
              </div>
              <div className='company'>
                  <div className='inner_com'>
                      <div className='one_c'>
                        <a href='https://www.resolutesolutions.in/'> <img src={require('./image/company1.png')}></img></a> 
                      </div>
                      <div className='one_c'>
                      <a href='https://www.cdmi.in/'><img src={require('./image/company2.png')}></img></a>
                      </div>
                      <div className='one_c'>
                      <a href='https://www.squareinfosoft.com/'><img src={require('./image/company3.png')}></img></a>
                      </div>
                      <div className='one_c'>
                      <a href='https://trigontic.com/'><img src={require('./image/company4.png')}></img></a>
                      </div>
                      <div className='one_c'>
                      <a href='https://viraniinfotech.com/'><img src={require('./image/company5.png')}></img></a>
                      </div>
                      <div className='one_c'>
                      <a href='https://www.webmigrates.com/'><img src={require('./image/company6.png')}></img></a>
                      </div>
                  </div>
              </div>
          </div>

          <div className='demand'>
              <p className='our_d'>Our Demanded Course -</p>
              <div className='parent_btn'>
                <div className='btn3'>
                  <p className='multi'>Multimedia Training Institute In Varachha</p>
                  <p className='multi'>spoken english class in katargam</p>
                  <p className='multi'>Web development training in katargam</p>
                  <p className='multi'>Best animation training course</p>
                </div>
                <div className='btn3'>
                  <p className='multi'>C++ Programming Language Training Institute In Varachha</p>
                  <p className='multi'>Python Training Institute In Varachha</p>
                  <p className='multi'>Adobe illustrator design</p>
                  <p className='multi'>Adobe xd design training institute in varachha</p>
                </div>
                <div className='btn3'>
                  <p className='multi'>Multimedia Training Institute In Varachha</p>
                  <p className='multi'>spoken english class in katargam</p>
                  <p className='multi'>Web development training in katargam</p>
                  <p className='multi'>Best animation training course</p>
                </div>
                <p className='show'>Show Less</p>
              </div>
          </div>

          <div className='last'>
            <div className='last_main'>
              <div className='l_one'>
                <img src={myimage1}></img>
                <div className='l_text'>
                Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.
                </div>
                <div className='l_foll'>
                  <p>follow us on</p>
                  <div className='icon'>
                  <i><FaFacebookF></FaFacebookF></i>
                  <i><FaTwitter></FaTwitter></i>
                  <i><TiSocialGooglePlus></TiSocialGooglePlus></i>
                  <i><FaLinkedin></FaLinkedin></i>
                  <i><TiSocialInstagram></TiSocialInstagram></i>
                  <i><CiYoutube></CiYoutube></i>
                  <i><FaWhatsapp></FaWhatsapp></i>
                  </div>
                </div>
              </div>
              <div className='l_sec'>
                <p>features links</p>
                <div className='f_link'>
                  <div>
                    <span><FaHandPointRight></FaHandPointRight></span>about us
                  </div>
                  <div>
                  <span><FaHandPointRight></FaHandPointRight></span>blog
                  </div>
                  <div>
                  <span><FaHandPointRight></FaHandPointRight></span>join us
                  </div>
                  <div>
                  <span><FaHandPointRight></FaHandPointRight></span>company login
                  </div>
                  <div>
                  <span><FaHandPointRight></FaHandPointRight></span>certificate verification
                  </div>
                </div>
              </div>
              <div className='l_th'>
                <div className='l_main'>
                  <p>contact us</p>
                  <div className='head'>
                    <p>head office-yogichowk</p>
                    <span>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</span>
                  </div>
                  <div className='branch'>
                    <p>other branch</p>
                  <div>
                    <div className='b'>
                  <span><FaUniversity></FaUniversity></span>katargam
                  </div>
                  <div>
                  <div className='b'>
                  <span><FaUniversity></FaUniversity></span>mota varccha
                  </div>
                  <div className='b'>
                  <span><FaUniversity></FaUniversity></span>adajan
                  </div>
                  <div className='b'>
                  <span><FaUniversity></FaUniversity></span>navsari
                  </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          


                  
          <div className='footer'>
            <div className='logo'>
              <span><FaRegCopyright></FaRegCopyright></span>
            </div>
            <div className='f_text'>
              2023 All Right Reserved by Creative Design & Multimedia Institute.
            </div>

          </div>
      </div>      
  );
}

export default App;
