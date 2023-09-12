<template lang="">
    <form v-if="registerStore.stepRegistration  === 3" class="form">
            <h1 class="form__title">Введите код</h1>
            <div class="form__subtitle">Мы отправили вам СМС с кодом <br> на телефон</div>
            <div class="form__fields-code">
                <input v-for=", i in code" v-model="code[i]" class="form__number" type="text">
            </div>
            <div class="form__info-code">Не приходит код?</div>
            <div class="form__info-again">Отправить СМС-код еще раз через 2:00</div>
            <button-component @click.prevent="registerStore.nextStep()">Войти</button-component>
    </form>
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
<style lang="">
    
</style>