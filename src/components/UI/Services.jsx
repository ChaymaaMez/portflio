import React from 'react'
import fontImg from '../../assets/images/front-end.png'
import backImg from '../../assets/images/backend.png' 
import ux from '../../assets/images/design.png'
import tail from './../../assets/images/tailwind-css.svg'
import java from'../../assets/images/java.png'
import php from '../../assets/images/php.png'
import python from '../../assets/images/python.png'
import laravel from '../../assets/images/laravel.png'
import sql from '../../assets/images/sql.png'
import myql from '../../assets/images/mysql.png'
import post from '../../assets/images/post.svg'
import mongodb from '../../assets/images/mango.png'
const Services = () => {
  return (
    <section id="services">
        <div className="container lg:pt-5">
            <div className="text-center">
                <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                    what do i help
                </h2>
                <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
                CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
                </p>
            </div>
            <div className="flex flex-col justify-center sm:py-12">
                <div className='w-full py-3 px-2 sm:mx-auto sm:px-0'>
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">
                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-delay='50' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white 
                                            group-hover:font-[600] text-xl">front end Development</h3>
                                            
                                                <div className="mt-5 flex items-center gap-3 flex-wrap">
                
                    <span className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]'>
                    <i class="ri-html5-fill"></i>Html5 
                    </span>
                    <span className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]'>
                    <i class="ri-css3-fill"></i>Css3 
                    </span>
                    <span className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]'>
                    <i class="ri-javascript-line"></i>JavaScript 
                    </span>
                    <span className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]'>
                    <i class="ri-reactjs-line"></i>React js
                    </span>
                    <span className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]'>
                    <i class="ri-bootstrap-line"></i>bootstrap 
                    </span>
                    <span className='bg-gray-200 py-1 px-2 rounded-[6px] text-[14px]'>
                    <div className="flex items-center gap-1 flex-wrap">
                        <img className='w-5 gap-1' src={tail} alt="" />tailwind css </div>
                    </span>
            </div>
                                          
                                                                             </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                                 justify-center">
                                    <figure>
                                        <img src={fontImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>


                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1300' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white 
                                            group-hover:font-[600] text-xl">backend Development</h3>
                                            <div className="mt-5 flex items-center gap-3 flex-wrap">
                                            <span className='bg-gray-200 py-1 px-2 rounded-[6px] text-[14px]'>
                    <div className="flex items-center gap-1 flex-wrap">
                        <img className='w-5 gap-1' src={php} alt="" />PHP </div>
                    </span>
                    <span className='bg-gray-200 py-1 px-2 rounded-[6px] text-[14px]'>
                    <div className="flex items-center gap-1 flex-wrap">
                        <img className='w-5 gap-1' src={laravel} alt="" />Laravel </div>
                    </span>
                    <span className='bg-gray-200 py-1 px-2 rounded-[6px] text-[14px]'>
                    <div className="flex items-center gap-1 flex-wrap">
                        <img className='w-5 gap-1' src={java} alt="" />Java </div>
                    </span>
                    <span className='bg-gray-200 py-1 px-2 rounded-[6px] text-[14px]'>
                    <div className="flex items-center gap-1 flex-wrap">
                        <img className='w-5 gap-1' src={java} alt="" />JavaEE </div>
                    </span>
                    <span className='bg-gray-200 py-1 px-2 rounded-[6px] text-[14px]'>
                    <div className="flex items-center gap-1 flex-wrap">
                        <img className='w-5 gap-1' src={python} alt="" />Python </div>
                    </span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                                 justify-center">
                                    <figure>
                                        <img src={backImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>


                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white 
                                            group-hover:font-[600] text-xl">Data Base</h3>
                                            <div className="mt-5 flex items-center gap-3 flex-wrap">
                                            <span className='bg-gray-200 py-1 px-2 rounded-[6px] text-[14px]'>
                    <div className="flex items-center gap-1 flex-wrap">
                        <img className='w-5 gap-1' src={myql} alt="" />MySql </div>
                    </span>
                    <span className='bg-gray-200 py-1 px-2 rounded-[6px] text-[14px]'>
                    <div className="flex items-center gap-1 flex-wrap">
                        <img className='w-5 gap-1' src={sql} alt="" />Sql </div>
                    </span>
                    <span className='bg-gray-200 py-1 px-2 rounded-[6px] text-[14px]'>
                    <div className="flex items-center gap-1 flex-wrap">
                        <img className='w-5 gap-1' src={mongodb} alt="" />mongodb </div>
                    </span>
                    <span className='bg-gray-200 py-1 px-2 rounded-[6px] text-[14px]'>
                    <div className="flex items-center gap-1 flex-wrap">
                        <img className='w-5 gap-1' src={post} alt="" />Postgresql </div>
                    </span>
                    </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                                 justify-center">
                                    <figure>
                                        <img src={ux} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default Services