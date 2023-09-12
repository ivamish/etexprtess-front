<template lang="">
    <form class="form">
            <h1 class="form__title">Регистрация</h1>
            <div class="form__subtitle">Заполните все поля, чтобы подать заявку <br> на регистрацию</div>
            <div class="form__fields">
                <et-input type="inn" :data="data.inn" />
                <et-input :data="data.position" />
                <div class="form__info-password">
                    <div class="form__info">Придумайте пароль</div>
                    <ul class="form__info-password-list">
                        <li :class="{'checked' : registerStore.passwordLength}">Содержит не менее 8 символов</li>
                        <li :class="{'checked' : registerStore.passwordNumber}">Должен содержать минимум одну цифру</li>
                    </ul>
                </div>
                <et-password @change="registerStore.checkMatchesPasswords()" @input="checkPassword()" :data="data.password" />
                <et-password @change="registerStore.checkMatchesPasswords()" :data="data.confirmPassword" />
                <p v-if="!registerStore.passwordMatches" class="form__info">Пароли не совпадают</p>
                <check-box>
                    Я принимаю условия обработки персональных <br> данных и политики конфиденциальности
                </check-box>
            </div>
            <button-component @click.prevent="registerStore.stepTwo()">Продолжить</button-component>
        </form>
</template>
<script>
import InputPasswordComponent from '@/components/UI/InputPasswordComponent.vue';
import CheckBox from '@/components/UI/CheckBox.vue';
import ButtonComponent from '@/components/UI/ButtonComponent.vue';
import EtInput from '@/components/UI/EtInput.vue';
import EtPassword from '@/components/UI/EtPassword.vue';
import { useRegisterStore } from '@/stores/register.js';
import IMask from "imask";
export default {
    components: {
        EtInput,
        InputPasswordComponent,
        CheckBox,
        ButtonComponent,
        EtPassword
    },

    setup() {

        const registerStore = useRegisterStore(),
            data = registerStore.dataInput,
            checkPassword = registerStore.checkPassword;

            const tets = () => {
                console.log(111111111);
            }


        return {
            data, registerStore, checkPassword, tets
        }
    },
    mounted () {
        IMask(document.querySelector('[type="inn"]'), {
            mask: '0000-000000-00'
        });
    }
}
</script>
<style scoped lang="scss">
    .form {
        &__info-password-list {
            .checked {
                &::before {
                    background-color: #46A175;
                    background: url(@/assets/icons/check.svg) center center/cover no-repeat;
                }
            }
        }
    }
</style>