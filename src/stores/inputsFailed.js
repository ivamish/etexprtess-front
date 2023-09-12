import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useInputsFailed = defineStore('inputsFailed', () => {
  //data
  const dataInput = ref({
    
  });

  return { count, doubleCount, increment }
})