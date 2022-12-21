<template>
    <!--Blogs tab-->
                    <section id="blogs" class="bg-white  lg:rounded-2xl dark:bg-[#111111]">
                        <div data-aos="fade" class="aos-init aos-animate">
                            <div class="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
                                <div class="py-12">
                                    <h2 class="after-effect after:left-32 mt-12 lg:mt-0">Blogs</h2>
                                    <div  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[40px] grid   gap-x-10 gap-y-7  mb-6">
                                        <div v-for="blog,index in blogs" :key="index" class="shadow p-5 rounded-lg mb-2 h-full dark:border-[#212425] dark:border-2 border-[1px] border-[#d3d3d3] rounded-lg" style="background: rgb(252, 244, 255);">
                                            <div class="overflow-hidden rounded-lg"><img class="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110" src="media/1.5da97bc494017804e9df.jpg" alt="blog"></div>
                                            <div class="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]"><span v-text="blog.date"></span><span class="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2" v-text="blog.category"></span></div>
                                            <h3 class="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                                                <a :href="blog.link" v-text="blog.title"> </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <!--End blogs-->
</template>

<script>
export default {
    name:'Blogs',
    props:['blogs']
}
</script>