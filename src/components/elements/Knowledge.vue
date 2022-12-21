<template>
 <div class="mb-2 relative">
     <div @click="deleteKnowledge" class="absolute top-0 left-0 -mt-4 -ml-4 cursor-pointer hover:bg-gray-700 rounded-full">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
                        <input v-model="$parent.$parent.knowledges[indexed].name" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="title">
                       
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
        deleteKnowledge(){
            this.$parent.$parent.knowledges.splice(this.indexed,1)
        }
    },
}
</script>