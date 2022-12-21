<template>
 <div class="mb-2 relative">
     <div @click="deleteSkill" class="absolute top-0 left-0 -mt-4 -ml-4 cursor-pointer hover:bg-gray-700 rounded-full">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
                        <input v-model="$parent.$parent.skills[indexed].title" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="title">
                            <select v-model="$parent.$parent.skills[indexed].color" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected disabled>Choose a color</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                <option value="pink">Pink</option>
                                <option value="orange">Orange</option>
                                <option value="teal">Teal</option>
                                <option value="brown">Brown</option>
                            </select>
                        <select v-model="$parent.$parent.skills[indexed].percentage" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected disabled>Choose a percentage</option>
                                <option value="50">50%</option>
                                <option value="60">60%</option>
                                <option value="70">70%</option>
                                <option value="80">80%</option>
                                <option value="90">90%</option>
                                <option value="100">100%</option>
                        </select>
                        <div class="bg-gray-200 h-2 w-full mb-4"> </div>
                    </div>    
</template>

<script>
export default {
    props:['indexed'],
    data() {
        return {
            
        }
    },
    methods: {
        deleteSkill(){
            this.$parent.$parent.skills.splice(this.indexed,1)
        }
    },
}
</script>