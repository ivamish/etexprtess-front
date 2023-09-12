<template>
    <div class="register">
        <form class="form form--column">
            <div>
                <h1 class="form__title">Спасибо за регистрацию</h1>
                <div class="form__text-black mt-15">Ваш запрос будет обработан администратором <br> в течении 48 часов</div>
                <div class="form__text-black mt-50">Сейчас вам доступен ограниченный <br> функционал Личного кабинета</div>
                <button-component @click.prevent="registerStore.nextStep()">Перейти в личный кабинет</button-component>
            </div>
            <div class="form__info mt-30proc">Чтобы ускорить процесс, вы можете связаться с <a class="et-link" href="#">менеджером</a></div>
        </form>
    </div>
</template>
<script>
import ButtonComponent from '@/components/UI/ButtonComponent.vue';
import { useRegisterStore } from '@/stores/register.js';

export default {
    components : {
        ButtonComponent
    },
    setup() {
        const registerStore = useRegisterStore(),
            data = registerStore.dataInput,
            code = [null, null, null, null, null, null, null];

        return {
            data, registerStore, code
        }
    }
}
</script>
<style lang="scss">
    .mt-50 {
        margin-top: 50px;
    }
    .mt-15 {
        margin-top: 15px;
    }
    .mt-30proc {
        margin-top: 70%;
    }
    .et-link {
        color: #F3223C;
        margin: 0;
        text-decoration: underline;
        text-underline-offset: 3px;
    }
</style>