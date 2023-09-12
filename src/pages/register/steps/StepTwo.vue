<template lang="">
    <form class="form">
            <h1 class="form__title">Регистрация</h1>
            <div class="form__subtitle">Заполните все поля, чтобы подать заявку <br> на регистрацию</div>
            <div class="form__fields">
                <input-component v-model:value = "data.inn.value" label="ИНН организации" :required="true" />
                <input-component v-model:value = "data.position.value" label="Должность" :required="true" />
                <div class="form__info-password">
                    <div class="form__info">Придумайте пароль</div>
                    <ul class="form__info-password-list">
                        <li>Содержит не менее 8 символов</li>
                        <li>Должен содержать минимум одну цифру</li>
                    </ul>
                </div>
                <input-password-component v-model:value = "data.password.value" label="Придумайте пароль" :required="true" />
                <input-password-component v-model:value = "data.confirmPassword.value" label="Повторите пароль" :required="true" />
                <check-box>
                    Я принимаю условия обработки персональных <br> данных и политики конфиденциальности
                </check-box>
            </div>
            <button-component @click.prevent="registerStore.nextStep()">Продолжить</button-component>
        </form>
</template>
<script>
import InputComponent from '@/components/UI/InputComponent.vue';
import InputPasswordComponent from '@/components/UI/InputPasswordComponent.vue';
import CheckBox from '@/components/UI/CheckBox.vue';
import ButtonComponent from '@/components/UI/ButtonComponent.vue';
import { useRegisterStore } from '@/stores/register.js';
export default {
    components: {
        InputComponent,
        InputPasswordComponent,
        CheckBox,
        ButtonComponent,
    },

    setup() {

        const registerStore = useRegisterStore(),
            data = registerStore.dataInput;


        return {
            data, registerStore,
        }
    }
}
</script>
<style lang="">
    
</style>