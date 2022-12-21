<template>
     <!--Drawer-->
            <!-- drawer component -->
            <div id="drawer-contact" class="no-print fixed z-40 h-screen p-4 overflow-y-scroll bg-white w-80 dark:bg-gray-800 " v-bind:class="{'hidden':sidebar != true}" tabindex="-1" aria-labelledby="drawer-contact-label">
           <h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400 bg-gray-200 w-full  rounded-md p-1 justify-center sticky top-0 -mt-4 mb-10 z-[100]">
                                       <button @click="setClick('profile')" class="text-pink-500 border-[pink] w-8 h-8 hover:text-white bg-gray-200 hover:bg-pink-500 p-1 rounded border " v-bind:class="{'text-white bg-pink-700':active == 'home'}"> 
                                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>
                                       </button>
                                       <button @click="setClick('about')"  class="text-pink-500 border-[pink] w-8 h-8 hover:text-white hover:bg-pink-500 p-1 rounded-md border " v-bind:class="{'text-white bg-pink-700':active == 'about'}"> 
                                           <svg class="p-1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
                                       </button>
                                       <button @click="setClick('resume')" class="text-pink-500 border-[pink] w-8 h-8 hover:text-white hover:bg-pink-500 p-1 rounded-md border " v-bind:class="{'text-white bg-pink-700':active == 'resume'}"> 
                                           <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z" fill="currentColor"></path><path d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z" fill="currentColor"></path><path d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z" fill="currentColor"></path><path d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z" fill="currentColor"></path></svg>
                                       </button>
                                       <button @click="setClick('works')" class="text-pink-500 border-[pink] w-8 h-8 hover:text-white hover:bg-pink-500 p-1 rounded-md border " v-bind:class="{'text-white bg-pink-700':active == 'works'}"> 
                                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                       </button>
                                       <button @click="setClick('blogs')" class="text-pink-500 border-[pink] w-8 h-8 hover:text-white hover:bg-pink-500 p-1 rounded-md border " v-bind:class="{'text-white bg-pink-700':active == 'blogs'}"> 
                                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M162.4 196c4.8-4.9 6.2-5.1 36.4-5.1 27.2 0 28.1.1 32.1 2.1 5.8 2.9 8.3 7 8.3 13.6 0 5.9-2.4 10-7.6 13.4-2.8 1.8-4.5 1.9-31.1 2.1-16.4.1-29.5-.2-31.5-.8-10.3-2.9-14.1-17.7-6.6-25.3zm61.4 94.5c-53.9 0-55.8.2-60.2 4.1-3.5 3.1-5.7 9.4-5.1 13.9.7 4.7 4.8 10.1 9.2 12 2.2 1 14.1 1.7 56.3 1.2l47.9-.6 9.2-1.5c9-5.1 10.5-17.4 3.1-24.4-5.3-4.7-5-4.7-60.4-4.7zm223.4 130.1c-3.5 28.4-23 50.4-51.1 57.5-7.2 1.8-9.7 1.9-172.9 1.8-157.8 0-165.9-.1-172-1.8-8.4-2.2-15.6-5.5-22.3-10-5.6-3.8-13.9-11.8-17-16.4-3.8-5.6-8.2-15.3-10-22C.1 423 0 420.3 0 256.3 0 93.2 0 89.7 1.8 82.6 8.1 57.9 27.7 39 53 33.4c7.3-1.6 332.1-1.9 340-.3 21.2 4.3 37.9 17.1 47.6 36.4 7.7 15.3 7-1.5 7.3 180.6.2 115.8 0 164.5-.7 170.5zm-85.4-185.2c-1.1-5-4.2-9.6-7.7-11.5-1.1-.6-8-1.3-15.5-1.7-12.4-.6-13.8-.8-17.8-3.1-6.2-3.6-7.9-7.6-8-18.3 0-20.4-8.5-39.4-25.3-56.5-12-12.2-25.3-20.5-40.6-25.1-3.6-1.1-11.8-1.5-39.2-1.8-42.9-.5-52.5.4-67.1 6.2-27 10.7-46.3 33.4-53.4 62.4-1.3 5.4-1.6 14.2-1.9 64.3-.4 62.8 0 72.1 4 84.5 9.7 30.7 37.1 53.4 64.6 58.4 9.2 1.7 122.2 2.1 133.7.5 20.1-2.7 35.9-10.8 50.7-25.9 10.7-10.9 17.4-22.8 21.8-38.5 3.2-10.9 2.9-88.4 1.7-93.9z"></path></svg>
                                       </button>
                                       <button @click="setClick('contact')" class="text-pink-500 border-[pink] w-8 h-8 hover:text-white hover:bg-pink-500 p-1 rounded-md border " v-bind:class="{'text-white bg-pink-700':active == 'contact'}"> 
                                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"></path></g></svg>
                                       </button>
                </h5>
                <div class="w-full h-1 bg-gray-400 -mt-6 z-50 mb-2"> </div>
                <button @click="$parent.sidebar = !$parent.sidebar;$parent.isClosed = true;" type="button" data-drawer-dismiss="drawer-contact" aria-controls="drawer-contact" class="text-white bg-pink-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white z-[120]">
       <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
       <span class="sr-only">Close menu</span>
    </button>
                <form action="#" class="mb-6" @submit.prevent="saveData">

                    <!--Profile settings-->
                   <div v-if="active == 'home'" id="profile-settings">
                   <div class="mb-2">
                        <label for="full_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input @input="setFullname" @change="setFullname" :value="full_name" type="text" id="full_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="jane doe" required>
                    </div>
                    <div class="mb-2">
                        <label for="cv_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your CV link</label>
                        <input v-model="$parent.cv_link" type="text" id="cv_link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Cv link" required>
                    </div>
                    <div class="flex items-center justify-center w-full mb-2">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 h-28">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 500x500px)</p>
                            </div>
                            <input id="dropzone-file" type="file" accept=".png,.jpg,.jpeg,.gif,.webp" @change="UploadImage" class="hidden" />
                        </label>
                    </div>

                    <div class="mb-2">
                        <label for="job_title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job title</label>
                        <input @input="setJobTitle" @change="setJobTitle" :value="job_title" type="text" id="job_title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Ui/Ux Designer" required>
                    </div>

                    <div class="mb-2">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input @input="setEmail" @change="setEmail" :value="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="name@company.com" required>
                    </div>
                    <div class="mb-2">
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                        <input @input="setPhoneNumber" @change="setPhoneNumber" :value="phone_number" type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="start with country code  e.g (+233)" required>
                    </div>

                    <div class="mb-2">
                        <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input @input="setAddress" @change="setAddress" :value="address" type="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="country, city, local" required>
                    </div>
                    <div class="relative mb-2">
                        <label for="dob" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of birth</label>
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none pt-7">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input @input="setDob" @change="setDob" :value="dob" id="dob" datepicker="" datepicker-autohide="" datepicker-buttons="" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                            placeholder="Select date of birth">
                    </div>

                    <div class="mb-2">
                        <label for="bio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your bio</label>
                        <textarea @input="setBio" @change="setBio" id="bio" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your bio..." v-text="bio"></textarea>
                    </div>

                   </div>
                   <!--End Profile Settings-->

                    <!--About Settings-->
                   <div v-if="active == 'about'" id="about-settings">
                    <div class="flex items-center justify-center w-full mb-2">
                        <label for="about-photo-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 h-28">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 400x330px)</p>
                            </div>
                            <input id="about-photo-file" type="file" accept=".png,.jpg,.jpeg,.gif,.webp" @change="UploadAboutImage" class="hidden" />
                        </label>
                    </div>
                    Services
                    <!-- <JsonEditorVue v-model="$parent.services"/> -->
                    <Services v-for="service,index in $parent.services" :key="index" :indexed="index" />
                    <div class="block mb-2"> 
                        <div @click="addService" class="cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add service
                    </div>
                 </div>
                    Clients
                    <Clients v-for="client,index in $parent.clients" :key="index" :indexed="index" />
                    <!-- <JsonEditorVue v-model="$parent.clients"/> -->
                    <div class="block mb-2"> 
                        <div @click="addClient" class="cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Client
                    </div>
                 </div>
                   </div>
                     <!--End About Settings-->
               
                    <!--Resume Settings-->
                   <div v-if="active == 'resume'" id="resume-settings">
                   Education
                   <Education v-for="education_,index in $parent.education" :key="index" :indexed="index" />
                    <!-- <JsonEditorVue v-model="$parent.education"/> -->
                    <div class="block mb-2"> 
                        <div @click="addEducation" class="cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Education
                    </div>
                    </div>

                    Experience
                    <Experience v-for="experienc,index in $parent.experience" :key="index" :indexed="index" />
                    <!-- <JsonEditorVue v-model="$parent.experience"/> -->
                    <div class="block mb-2"> 
                        <div @click="addExperience" class="cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Expereince
                    </div>
                    </div>

                    Awards
                    <Awards v-for="award,index in $parent.awards" :key="index" :indexed="index" />
                    <!-- <JsonEditorVue v-model="$parent.experience"/> -->
                    <div class="block mb-2"> 
                        <div @click="addAward" class="cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Achievement
                    </div>
                    </div>
                    <!-- <JsonEditorVue v-model="$parent.awards"/> -->
                    Skills
                    <Skills v-for="skill,index in $parent.skills" :key="index" :indexed="index" />
                    <!-- <JsonEditorVue v-model="$parent.experience"/> -->
                    <div class="block mb-2"> 
                        <div @click="addSkill" class="cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Skill
                    </div>
                    </div>
                   
                   knowledge
                    <Knowledge v-for="knowledge,index in $parent.knowledges" :key="index" :indexed="index" />
                    <div class="block mb-2"> 
                        <div @click="addKnowledge" class="cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Knowledge
                    </div>
                    </div>

                   </div>

                    <!--Works Settings-->
                   <div v-if="active == 'works'" id="works-settings">
                   Portfolio
                    <!-- <JsonEditorVue v-model="$parent.portfolio"/> -->
                    <Portfolio v-for="portfolio_,index in $parent.portfolio" :key="index" :indexed="index" />
                   <div class="block mb-2"> 
                        <div @click="addPortfolio" class="cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Portfolio
                    </div>
                    </div>
                   </div>

                   <!--Blogs Settings-->
                   <div v-if="active == 'blogs'" id="blogs-settings">
                   Blogs
                    <!-- <JsonEditorVue v-model="$parent.blogs"/> -->
                    <BlogPosts v-for="blog,index in $parent.blogs" :key="index" :indexed="index" />
                   <div class="block mb-2"> 
                        <div @click="addBlogPost" class="cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add BlogPost
                    </div>
                    </div>

                   </div>

                    <!--Works Settings-->
                   <div v-if="active == 'contact'" id="contact-settings">
                   Contact
                   <div class="mb-2">
                        <label for="contact_url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact url</label>
                        <input v-model="$parent.contact_url" type="text" id="contact_url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="https://forms.php" required>
                    </div>
                   </div>
                   <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476]   rounded-md focus:outline-none dark:focus:ring-blue-800 block">Save</button>
                   </form>
            </div>
            <!--End Drawer-->
</template>

<script>
import JsonEditorVue from 'json-editor-vue'
import Services from './elements/Services.vue'
import Clients from './elements/Clients.vue';
import Education from './elements/Education.vue';
import Experience from './elements/Experience.vue';
import Awards from './elements/Awards.vue';
import Skills from './elements/Skills.vue';
import Knowledge from './elements/Knowledge.vue';
import Portfolio from './elements/Portfolio.vue';
import BlogPosts from './elements/BlogPosts.vue';

export default {
    name:"Drawer",
    props:['active','sidebar','full_name','job_title','email','phone_number','address','dob','bio'],
    components:{
        JsonEditorVue:JsonEditorVue,
        Services:Services,
        Clients :Clients,
        Education:Education,
        Experience:Experience,
        Awards:Awards,
        Skills:Skills,
        Knowledge:Knowledge,
        Portfolio:Portfolio,
        BlogPosts:BlogPosts
    },
    data() {
        return {
        }
    },
    methods: {
        saveData(){
           localStorage.setItem('PortfolioData',JSON.stringify(this.$parent.$data));
        },

        setClick(param){
            document.getElementById(param+'-tab').click();
        },
        setFullname(event){
            this.$parent.full_name = event.target.value;
        },
        setJobTitle(event){
            this.$parent.job_title = event.target.value;
        },
        setEmail(event){
            this.$parent.email = event.target.value;
        },
        setPhoneNumber(event){
            this.$parent.phone_number = event.target.value;
        },
        setAddress(event){
            this.$parent.address = event.target.value;
        },
        setDob(event){
            this.$parent.dob = event.target.value;
        },
        setBio(event){
            this.$parent.bio = event.target.value;
        },
        UploadImage(event) {
        document.getElementById('profile_image').src = URL.createObjectURL(event.target.files[0]); 
  },
  UploadAboutImage(event) {
        document.getElementById('about_photo').src = URL.createObjectURL(event.target.files[0]); 
  },
  addService(){
      this.$parent.services.push(
          {
              icon:'fa-code',
              title:'New service',
              description:'New service description'
          }
      )
  },
  addClient(){
      this.$parent.clients.push({
        name: '',
        icon: '',
        link: ''
    });
  },
  addEducation(){
      this.$parent.education.push({
        year:'',
        qualification:'',
        institution:''
    });
  },
  addExperience(){
      this.$parent.experience.push({
        year:'',
        role:'',
        institution:''
    });
  },
  addAward(){
      this.$parent.awards.push({
        year:'',
        qualification:'',
        institution:''
    });
  },
  addSkill(){
      this.$parent.skills.push(
          {
        title: '',
        color: 'pink',
        percentage: 50
    }
      );
  },
    addKnowledge(){
      this.$parent.knowledges.push(
          {
        name: ''
    }
      );
  },
  addPortfolio(){
      this.$parent.portfolio.push(
          {
        cover_image: '',
        title: '',
        category: '',
        link: '',
        date: '31-12-2022',
        description: ''
    }
      );
  },
  addBlogPost(){
      this.$parent.blogs.push(
          {
        cover_image: '',
        title: 'New Blog Post',
        category: '',
        link: '',
        date: '31-12-2022',
        description: ''
    }
      );
  }
    },
}
</script>
<style>

</style>