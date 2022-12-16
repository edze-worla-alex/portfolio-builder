<template>
    <!--Resume tab-->
                    <section id="resume" class="bg-white  lg:rounded-2xl dark:bg-[#111111]">
                        <div data-aos="fade" class="aos-init aos-animate">
                            <div class="container  sm:px-5 md:px-10 lg:px-20">
                                <div class="py-12 px-4">
                                    <h2 class="after-effect after:left-44 mb-[40px] mt-12 lg:mt-0">Resume</h2>
                                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 ">
                                        <div>
                                            <div class="flex items-center space-x-2 mb-4 "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-6xl text-[#F95054]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path></svg>
                                                <h4 class="text-5xl dark:text-white font-medium">Education</h4>
                                            </div>
                                            <div v-for="(educate,index) in education" :key="index" class="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2" style="background: rgb(255, 244, 244);"><span class="text-tiny text-gray-lite dark:text-[#b7b7b7]" v-text="educate.year"></span>
                                                <h3 class="text-xl dark:text-white" v-text="educate.qualification"></h3>
                                                <p class="dark:text-[#b7b7b7]" v-text="educate.institution"></p>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flex items-center space-x-2 mb-4 "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-6xl text-[#F95054]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"></path></svg>
                                                <h4 class="text-5xl dark:text-white font-medium">Experience</h4>
                                            </div>
                                            <div v-for="(experience_,index) in experience" :key="index" class="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2" style="background: rgb(238, 245, 250);"><span class="text-tiny text-gray-lite dark:text-[#b7b7b7]" v-text="experience_.year"></span>
                                                <h3 class="text-xl dark:text-white" v-text="experience_.role"></h3>
                                                <p class="dark:text-[#b7b7b7]" v-text="experience_.institution"></p>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flex items-center space-x-2 mb-4 "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-6xl text-[#F95054]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"></path></svg>
                                                <h4 class="text-5xl dark:text-white font-medium">Awards</h4>
                                            </div>

                                            <div v-for="(award,index) in awards" :key="index" class=" py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 " style="background: rgb(252, 244, 255); ">
                                                <span class="text-tiny text-gray-lite dark:text-[#b7b7b7] " v-text="award.year"></span>
                                                <h3 class="text-xl dark:text-white " v-text="award.qualification"></h3>
                                                <p class="dark:text-[#b7b7b7] " v-text="award.institution"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
                                <div class="grid grid-cols-1  md:grid-cols-2 gap-8">
                                    <div class="col-span-1">
                                        <h4 class="text-5xl dark:text-white font-medium mb-6">Working Skills</h4>

                                        <div v-for="(skill,index) in skills" :key="index" class="mb-4">
                                            <div class="flex justify-between py-1">
                                                <span class=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]" v-text="skill.title"></span>
                                                <span class=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                                                    <span v-text="skill.percentage"></span>
                                                    <span>%</span>
                                                </span>
                                            </div>
                                            <div :class="'h-2 bg-'+skill.color+'-700 rounded'" :style="'width: '+skill.percentage+'%;'">

                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-span-1">
                                        <h4 class="text-5xl dark:text-white font-medium mb-8">Knowledges</h4>
                                        <div class="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap">
                                            <button v-for="(knowledge_,index) in knowledges" :key="index" v-text="knowledge_.name" class="resume-btn"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!--End resume tab-->
</template>

<script>
export default {
    name:'Resume',
    props:['education','experience', 'awards','skills', 'knowledges']
}
</script>