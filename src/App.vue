<template>
    <Loader :color="'pink'" :timeOut="3000"/>
    <div class="bg-homeBg min-h-screen  dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
    <Drawer :active="active" :sidebar="sidebar" :full_name='full_name' :job_title='job_title' :email='email' :phone_number='phone_number' :address='address' :dob='dob' :bio='bio' />
    <div class="ml-0 z-50 ml-0 z-50 mx-auto " v-bind:class="{ 'md:ml-80': sidebar }">
            <div class="container">
                  <Navbar :full_name="full_name" :active="active"/>
                  <Profile :full_name="full_name" :job_title="job_title"/>
                  <About :bio='bio' :phone_number='phone_number' :email='email' :address='address' :dob='dob' :services='services' />
                  <Resume :education='education' :experience="experience" :awards='awards' :skills='skills' :knowledges='knowledges' />
                  <Works :categories="categories" :portfolio="portfolio" />
                  <Blogs :blogs="blogs" />
                  <Contact :address="address" :email="email" :phone_number="phone_number"/>
            </div>
    </div>
    <!-- drawer init and show -->
                            <div class="text-center absolute right-0 top-0 " v-bind:class="{'hidden':!isClosed}">
                                <button @click="sidebar = !sidebar" class="inline-flex items-center text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:bg-pink-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 shadow-lg shadow-pink-500/50"
                                    type="button" data-drawer-target="drawer-contact" data-drawer-toggle="drawer-contact" data-drawer-placement="left" data-drawer-backdrop="false" aria-controls="drawer-contact">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

                               <span class="ml-1"> Edit </span>
                                </button>
                            </div>
    </div>
</template>

<script>
import Loader from './components/Loader.vue';
import Drawer from './components/Drawer.vue';
import Navbar from './components/Navbar.vue';
import Profile from './components/Profile.vue';
import About from './components/About.vue';
import Resume from './components/Resume.vue';
import Works from './components/Works.vue';
import Blogs from './components/Blogs.vue';
import Contact from './components/Contact.vue';
import data from './data'
export default {
    name:'App',
    components:{
      Loader:Loader,
      Drawer:Drawer,
      Navbar:Navbar,
      Profile:Profile,
      About:About,
      Resume:Resume,
      Works:Works,
      Blogs:Blogs,
      Contact:Contact,
    },
    data() {
          return data
          
      },
      mounted(){
          if(localStorage.getItem('PortfolioData')){
              Object.assign(this.$data, JSON.parse(localStorage.getItem('PortfolioData')));
          }
      },
    created() { 
       setTimeout(function (){
         if(window.location.pathname.includes('about')){
          document.getElementById('about-tab').click();
         }
          else if(window.location.pathname.includes('home')){
          document.getElementById('profile-tab').click();
         }
         else if(window.location.pathname.includes('resume')){
          document.getElementById('resume-tab').click();
         }
          else if(window.location.pathname.includes('works')){
          document.getElementById('works-tab').click();
         }
         else if(window.location.pathname.includes('blogs')){
          document.getElementById('blogs-tab').click();
         }
         else if(window.location.pathname.includes('contact')){
          document.getElementById('contact-tab').click();
         }
       }, 3000);
       

    },
    methods: {

    },
    computed:{
}
}
</script>

<style>
@media (min-width: 768px) {
    .md\:ml-80 {
        margin-left: 20rem!important;
    }
}
</style>
