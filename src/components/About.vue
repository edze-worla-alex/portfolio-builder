<template>
     <!--About tab-->
                    <section id="about">
                        <div class="container lg:rounded-2xl bg-white dark:bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20">
                            <div data-aos="fade" class="aos-init aos-animate">
                                <div class="py-12">
                                    <h2 class="after-effect after:left-52 mt-12 lg:mt-0 ">About Me</h2>
                                    <div class="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                                        <div class="col-span-12 md:col-span-4"><img class="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0" src="media/about.01c11c889888a40123f4.jpg" alt=""></div>
                                        <div class="col-span-12 md:col-span-8 space-y-2.5">
                                            <div class=" md:mr-12 xl:mr-16">
                                                <h3 class="text-4xl font-medium dark:text-white mb-2.5 ">Who am i?</h3>
                                                <p class="text-gray-lite  dark:text-color-910 leading-7" v-text="bio"></p>

                                            </div>
                                            <div>
                                                <h3 class="text-4xl font-medium my-5 dark:text-white">Personal Info</h3>
                                                <div class=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                    <div class="flex"><span class="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg></span>
                                                        <div class="space-y-1">
                                                            <p class="text-xs text-gray-lite dark:text-color-910">Phone</p>
                                                            <h6 class="font-medium dark:text-white"><a class="hover:text-[#FA5252] duration-300 transition" :href="'tel:'+phone_number" v-text="phone_number"></a></h6>
                                                        </div>
                                                    </div>
                                                    <div class="flex"><span class="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span>
                                                        <div class="space-y-1">
                                                            <p class="text-xs text-gray-lite dark:text-color-910">Location</p>
                                                            <h6 class="font-medium dark:text-white" v-text="address"></h6>
                                                        </div>
                                                    </div>
                                                    <div class="flex"><span class="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path></svg></span>
                                                        <div class="space-y-1">
                                                            <p class="text-xs text-gray-lite dark:text-color-910">Email</p>
                                                            <h6 class="font-medium dark:text-white"><a class="hover:text-[#FA5252] duration-300 transition" :href="'mailto:'+email" v-text="email"></a></h6>
                                                        </div>
                                                    </div>
                                                    <div class="flex"><span class="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></span>
                                                        <div class="space-y-1">
                                                            <p class="text-xs text-gray-lite dark:text-color-910">Birthday</p>
                                                            <h6 class="font-medium dark:text-white" v-text="dob"></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="  pb-12 ">
                                    <h3 class="text-[35px] dark:text-white font-medium pb-5">What I do!</h3>
                                    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                                        <div v-for="(service,index) in services" :key="index" class="about-box dark:bg-transparent bg-gradient-to-r from-rose-700 to-pink-600 "><img class="w-10 h-10 object-contain  block" src="media/icon-1.71b741a6ab73765534e80db0a934febd.svg" alt="">
                                            <div class="space-y-2 break-all">
                                                <h3 class="dark:text-white text-xl font-semibold text-white" v-text="service.title"></h3>
                                                <p class=" leading-8 text-gray-100 dark:text-[#A6A6A6]" v-html="service.description"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto   py-10 rounded-xl">
                                        <h3 class="text-center dark:text-white text-6xl mb-3 font-semibold ">Clients</h3>
                                        <div class="slick-slider slick-initialized" dir="ltr">
                                            <div class="slick-list">
                                                <div class="slick-track" style="width: 4175px; opacity: 1; transform: translate3d(-1503px, 0px, 0px);">
                                                    <div data-index="0" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 167px;">
                                                        <div><img class=" overflow-hidden brand-img" src="data:image/png;base64,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"
                                                                alt="" tabindex="-1" style="width: 100%; display: inline-block;"></div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!--End about tab-->
</template>

<script>
export default {
    name:'About',
    props:['bio','phone_number','email','address','dob','services']
}
</script>