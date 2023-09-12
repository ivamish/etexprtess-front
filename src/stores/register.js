import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRegisterStore = defineStore('register', () => {
  
    const stepRegistration = ref(1), // Шаги регистрации
        dataInput = ref({  //Введённые данные для регистрации
            name : {
                value: '',
                pattern: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                fail: false,
                failMessage: "Имя должно содержать только буквы",
                failNull : false,
                label: "Имя",
                required : true
            },
            lastName : {
                value: '',
                pattern: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                fail: false,
                failMessage: "Фамилия должна содержать только буквы",
                failNull : false,
                label: "Фамилия",
                required : true
            },
            middleName : {
                value: '',
                pattern: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                fail: false,
                failMessage: "Отчество должно содержать только буквы",
                failNull : false,
                label: "Отчество",
                required : true
            },
            phoneNumber : {
                value: '',
                pattern: /\d+/,
                fail: false,
                failMessage: "Телефон должен содержать только цифры",
                failNull : false,
                label: "Номер телефона",
                required : true
            },
            email : {
                value: '',
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                fail: false,
                failMessage: "Неверный формат почты",
                failNull : false,
                label: "Почта",
                required : false
            },
            inn : {
                value: '',
                pattern: '',
                fail: false
            },
            position : {
                value: '',
                pattern: '',
                fail: false
            },
            password : {
                value : '',
                pattern : '',
                fail: false
            },
            confirmPassword : {
                value : '',
                pattern : '',
                fail: false
            }
        });

    //actions
    const nextStep = () => {
        stepRegistration.value++
    }

    const stepOne = () => {
        console.log(dataInput.value);
        const go = [dataInput.value.name, dataInput.value.lastName, dataInput.value.middleName, dataInput.value.phoneNumber, dataInput.value.email].filter(function(el){
            if(!el.pattern.test(el.value)) {
                if(el.required && el.value.trim() === '') {
                    el.failNull = true;
                } else if(!el.required && el.value.trim() === '') {
                    el.fail = false;
                    el.failNull = false;
                } else {
                    el.fail = true;
                }
                return el;
            }
        });
        if(go.length < 1) nextStep();
    }
  
  
  return { stepRegistration, dataInput, nextStep, stepOne }
})