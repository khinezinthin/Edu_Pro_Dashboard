import React from 'react'
import Navbar from './Navbar'
import { StateContextCustom } from './context/StateContext';
import {BsFillPlayCircleFill, BsPeople, BsBarChart, BsPercent, BsCalendarEvent} from "react-icons/bs"
import {HiOutlineClock} from "react-icons/hi"
import {RiDraftLine, RiArtboardLine, RiAwardLine ,RiEyeLine} from "react-icons/ri"
import {AiTwotoneCalendar} from "react-icons/ai"
import {MdPersonOutline} from "react-icons/md"
import {RxCalendar} from "react-icons/rx"
import {TiMessages} from "react-icons/ti"
import {FaArrowLeft} from "react-icons/fa"
import './Theme.css'
import "../pages/Register.css"
import "./detail.css";
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  const { isSidebarOpen } = StateContextCustom();
  const nav = useNavigate();
  const backBtn = () => nav(-1);

  return (
    // <div className="flex flex-col">
    //   <div>
    //     <Navbar />
    //   </div>
      // <div className={`mt-[52px] duration-500 ${isSidebarOpen && " ml-[230px]" } max-lg:ml-0`}>
        <div className=' flex justify-center'>
          <div className=" bgTransparent relative w-[92%] my-12 max-xl:my-10 max-lg:my-8 max-sm:my-6 rounded flex justify-between max-xl:flex-col">
            {/* back btn */}
            <div onClick={backBtn} className=' absolute max-[500px]:top-1 max-[500px]:left-1 top-3 left-3 z-10 cursor-pointer '>
            <FaArrowLeft className='icon-btn max-[500px]:text-sm'/>
            </div>
            {/* detail left start */}
            <div className='flex justify-center w-[45%] max-xl:w-full text-white'>
              <div className=' flex flex-col'>
                {/* image div  */}
                <div className=' relative p-10 max-[500px]:p-5'>
                  <img className=' opacity-80 w-full min-xl:h-[280px] max-xl:w-[900px] rounded-lg' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-27-1024x551.webp" alt="" />
                  <p className=' absolute top-[40%] left-[45%] text-[50px] max-xl:text-[60px] max-md:text-[50px] max-[600px]:text-[30px] text-white'><BsFillPlayCircleFill/></p>
                </div>

                {/* detail  */}
                <div className='px-10 max-[500px]:px-5'>
                  <div>
                    <div className='flex justify-between pb-3'>
                      <p className=' flex items-center gap-2'>
                        <span className='text-xl'><HiOutlineClock/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm'>Duration</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm'>17 Weeks</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className='text-lg'><BsPeople/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm'>Students</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm'>189</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className='text-lg'><RiDraftLine/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm'>Lessons</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm'>18</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className='text-lg'><BsBarChart/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm'>Skill level</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm'>Expert</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className='text-lg'><RiArtboardLine/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm'>Quizzes</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm'>0</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className='text-lg'><RiAwardLine/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm'>Certifications</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm'>Yes</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className='text-lg'><BsPercent/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm'>Pass Percentage</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm'>80%</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className='text-lg'><AiTwotoneCalendar/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm'>Deadline</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm'>25 Dec, 2023</p>
                    </div>
                    <hr className='custom-hr' />

                    <div className='flex justify-between py-3'>
                      <p className=' flex items-center gap-2'>
                        <span className='text-lg'><MdPersonOutline/></span>
                        <span className='max-xl:text-lg max-md:text-base max-sm:text-sm'>Instructor</span>
                      </p>
                      <p className='max-xl:text-lg max-md:text-base max-sm:text-sm'>James Carlson</p>
                    </div>
                  </div>

                  {/* price  */}
                  <div className=' text-center py-3 mt-5 text-lg btn'>
                    <p className=' select-none max-sm:text-base'>Price $49.00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* detail left end  */}

            {/* detail right start */}
            <div className="w-[55%] max-xl:w-full flex flex-col gap-5 py-10 pr-10 max-xl:pl-10 max-[500px]:px-5">
              <img
                src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-26.webp"
                  className="w-full  rounded-lg opacity-80"
              />
              <div className="flex justify-between max-[600px]:flex-col max-[600px]:gap-3">
                  <div className="flex gap-2 items-center">
                    <img
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp"
                      className=" w-8 rounded-full"
                    />
                    <p className="tableTitle text-sm tracking-wide">
                      Janet Fleming
                    </p>
                  </div>
                  <div className="tableTitle flex items-center gap-2">
                    <RxCalendar className=" text-lg" />
                    <p className="text-sm tracking-wide">09 Feb, 2023</p>
                  </div>
                  <div className="tableTitle flex items-center gap-2">
                    <TiMessages className=" text-lg" />
                    <p className="text-sm tracking-wide">0 Comments</p>
                  </div>
                  <div className="tableTitle flex items-center gap-1">
                    <RiEyeLine className=" text-lg" />
                    <p className="text-sm tracking-wide">1 Min Read</p>
                  </div>
              </div>
              <div className=" flex flex-col gap-4">
                  <h1 className="text-gray-50 text-xl font-medium max-xl:text-2xl max-md:text-xl">
                    Social Media Marketing MASTERY( A-Z ) Journey
                  </h1>
                  <p className="tableTitle text-sm tracking-wide">
                    Grursus mal suada faci lisis Lorem ipsum dolarorit more
                    ametion consectetur elit. Vesti at bulum nec the odio aea the
                    dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit
                    to the consectetur elit. All the Lorem Ipsum generators on the
                    Internet tend to repeat that predefined chunks as necessary
                    making this the first true dummy generator on the
                    Internet.Grursus mal suada faci lisis Lorem ipsum dolarorit
                    more ametion consectetur elit. Vesti at bulum nec odio aea the
                    dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit
                    to the consectetur elit. Grursus mal suada faci lisis Lorem
                    ipsum dolarorit more ametion consectetur elit. Vesti at bulum
                    nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal
                    suada and fadolorit to the consectetur elit. All the Lorem
                    Ipsum generators on the Internet tend.
                  </p>
                  <div className=" bg-color shadow-lg p-5 rounded">
                    <p className=" text-gray-50 text-lg tracking-wide text-center">
                      “ Duis vel scelerisque augue, ut vehicula nisl. Curabitur et
                      mollis tortor, eget sollicitudin lectus. Praesent a ante ac
                      urna ultrices volutpat at sed ligula. Phasellus nibh dui,
                      pulvinar a nibh quis. ”
                    </p>
                  </div>
                  <p className="tableTitle text-sm tracking-wide">
                    Grursus mal suada faci lisis Lorem ipsum dolarorit more
                    ametion consectetur elit. Vesti at bulum nec the odio aea the
                    dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit
                    to the consectetur elit. All the Lorem Ipsum generators on the
                    Internet tend to repeat that predefined chunks as necessary
                    making this the first true dummy generator on the
                    Internet.Grursus mal suada faci lisis Lorem ipsum dolarorit
                    more ametion consectetur elit.
                  </p>
              </div>
              
            </div>
            {/* detail right end */}
          </div>
        </div>
      // </div>
    // </div>
  );
};

export default Detail;
