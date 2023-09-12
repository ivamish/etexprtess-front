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
                pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
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
                pattern: /.*/,
                fail: false,
                failMessage: "Неверный формат ИНН",
                failNull : false,
                label: "ИНН организации",
                required : false
            },
            position : {
                value: '',
                pattern: /.*/,
                fail: false,
                failMessage: "Неверный формат ИНН",
                failNull : false,
                label: "Должность",
                required : false
            },
            password : {
                value: '',
                pattern: /.*/,
                fail: false,
                failMessage: "Неверный формат ИНН",
                failNull : false,
                label: "Пароль",
                required : false
            },
            confirmPassword : {
                value: '',
                pattern: /.*/,
                fail: false,
                failMessage: "Неверный формат ИНН",
                failNull : false,
                label: "Повторите пароль",
                required : false
            }
        });


    //actions
    const nextStep = () => {
        stepRegistration.value++
    }

    const stepOne = () => {
        const go = [dataInput.value.name, dataInput.value.lastName, dataInput.value.middleName, dataInput.value.phoneNumber, dataInput.value.email].filter(function(el){
            if(!el.pattern.test(el.value)) {
                if(el.required && el.value.trim() === '') {
                    el.failNull = true;
                } else {
                    el.fail = true;
                }

                if(!el.required && el.value.trim() === '') {
                    el.fail = false;
                    el.failNull = false;
                    return;
                }
                return el;
            }
        });
        console.log(go);
        if(go.length < 1) nextStep();
    }

    //работа с паролем
    const passwordMatches = ref(true),
        passwordLength = ref(false),
        passwordNumber = ref(false);
    const checkPassword = () => {
        if(dataInput.value.password.value.length > 8) {
            passwordLength.value = true;
        } else {
            passwordLength.value = false;
        }
        if(/[0-9]+/g.test(dataInput.value.password.value)) {
            passwordNumber.value = true;
        } else {
            passwordNumber.value = false;
        }
    }
    const checkMatchesPasswords = () => {
        if(dataInput.value.confirmPassword.value !== dataInput.value.password.value) {
            passwordMatches.value = false
            dataInput.value.confirmPassword.fail = true
        } else {
            passwordMatches.value = true
            dataInput.value.confirmPassword.fail = false
        }
    }
    const stepTwo = () => {
        if(dataInput.value.confirmPassword !== dataInput.value.password) {
            console.log('opa opa')
        } else {
            nextStep();
        }
    }
  
  
  return { stepRegistration, dataInput, nextStep, stepOne, checkPassword, stepTwo, passwordMatches, passwordLength, passwordNumber, checkMatchesPasswords }
})