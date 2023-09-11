<template>
    <div class="register">

        <form v-if="registerStep === 1" class="form">
            <h1 class="form__title">Регистрация</h1>
            <div class="form__subtitle">Заполните все поля, чтобы подать заявку <br> на регистрацию</div>
            <div v-if="registerStep < 2" class="form__fields">
                <input-component 
                    :value="data.lastName.value" 
                    @input="data.lastName.value = $event.target.value" 
                    label="Фамилия" :required="true" 
                />
                <input-component 
                    :value="data.name.value" 
                    @input="data.name.value = $event.target.value" 
                    label="Имя" :required="true" 
                />
                <input-component 
                    :value="data.middleName.value" 
                    @input="data.middleName.value = $event.target.value" 
                    label="Отчество" :required="true" 
                />
                <input-component 
                    :value="data.phoneNumber.value" 
                    @input="data.phoneNumber.value = $event.target.value" 
                    label="Номер телефона" :required="true" 
                />
                <input-component 
                    :value="data.email.value" 
                    @input="data.email.value = $event.target.value" 
                    label="E-mail" :required="true" 
                />
            </div>
            <button-component @click.prevent="nextStep()">Продолжить</button-component>
        </form>

            <form v-if="registerStep === 2" class="form">
                <div class="form__fields">
                <input-component 
                    :value="data.inn.value" 
                    @input="data.inn.value = $event.target.value" 
                    label="ИНН организации" :required="true" 
                />
                <input-component 
                    :value="data.position.value" 
                    @input="data.position.value = $event.target.value" 
                    label="Должность" :required="true" 
                />
                <div class="form__info-password">
                    <div class="form__info">Придумайте пароль</div>
                    <ul class="form__info-password-list">
                        <li>Содержит не менее 8 символов</li>
                        <li>Должен содержать минимум одну цифру</li>
                    </ul>
                </div>
                <input-password-component 
                    :value="data.password.value" 
                    @input="data.password.value = $event.target.value" 
                    label="Придумайте пароль" :required="true" 
                />
                <input-password-component 
                    :value="data.confirmPassword.value" 
                    @input="data.confirmPassword.value = $event.target.value" 
                    label="Повторите пароль" :required="true" 
                />
                <check-box>
                    Я принимаю условия обработки персональных <br> данных и политики конфиденциальности
                </check-box>
            </div>
            <button-component @click.prevent="nextStep()">Продолжить</button-component>
        </form>

        <form v-if="registerStep === 3"  class="form">
            <h1 class="form__title">Введите код</h1>
            <div class="form__subtitle">Мы отправили вам СМС с кодом <br> на телефон</div>
            <div class="form__fields-code">
                <input v-for=", i in code" v-model="code[i]" class="form__number" type="text">
            </div>
            <div class="form__info-code">Не приходит код?</div>
            <div class="form__info-again">Отправить СМС-код еще раз через 2:00</div>
            <button-component @click.prevent="nextStep()">Войти</button-component>
        </form>

    </div>
</template>

<script>
import InputComponent from '@/components/UI/InputComponent.vue';
import InputPasswordComponent from '@/components/UI/InputPasswordComponent.vue';
import CheckBox from '@/components/UI/CheckBox.vue';
import ButtonComponent from '@/components/UI/ButtonComponent.vue'; 
import { ref } from "vue";
export default {
    components: {
        InputComponent,
        InputPasswordComponent,
        CheckBox,
        ButtonComponent
    },

    setup() {

        //data
        const data = ref({
                name : {
                    value: '',
                    pattern: '',
                },
                lastName : {
                    value: '',
                    pattern: '',
                },
                middleName : {
                    value: '',
                    pattern: '',
                },
                phoneNumber : {
                    value: '',
                    pattern: '',
                },
                email : {
                    value: '',
                    pattern: '',
                },
                inn : {
                    value: '',
                    pattern: '',
                },
                position : {
                    value: '',
                    pattern: ''
                },
                password : {
                    value : '',
                    pattern : ''
                },
                confirmPassword : {
                    value : '',
                    pattern : ''
                }
              }),

              //Шаги регистрации
              registerStep = ref(1),

              //массив цифр для кода потверждения
              code = ref(['', '', '', '', '', '']);
        
        //methods
        const test = () => {
            console.log(data.value);
        };

        const nextStep = () => {
            if (registerStep.value < 3) registerStep.value++;
        }

        return {
            test, data, code, nextStep, registerStep
        }
    }
}
</script>

<style lang="scss">
    .register {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form {
        &__title {
            font-style: 28px;
            font-weight: 600;
        }
        &__subtitle, &__info{
            font-size: 15px;
            color: #858585;
        }
        &__fields {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
            margin-top: 20px;
            &-code {
                display: flex;
                gap: 8px;
                margin-top: 40px;
            }
        }
        &__info-password-list {
            list-style-type: none;
            padding: 0;
            padding-left: 24px;
            li {
                font-size: 15px;
                position: relative;
                &::before {
                    content: '';
                    display: block;
                    width: 14px;
                    height: 14px;
                    border-radius: 100%;
                    background-color: #F2F3F5;
                    position: absolute;
                    left: -25px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
        &__info-code {
            font-size: 12px;
            color: #858585;
        }
        &__info-again {
            font-size: 12px;
            color: #5D8896;
        }
        &__number {
            width: 50px;
            height: 60px;
            border-radius: 9px;
            border: 1px solid #BDBDBD;
            background: #F2F3F5;
            font-size: 28px;
            padding-left: 14px;
            &:focus {
                outline: none;
            }
        }
    }
</style>