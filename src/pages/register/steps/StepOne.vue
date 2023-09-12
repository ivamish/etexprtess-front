<template lang="">
    <form class="form">
            <h1 class="form__title">Регистрация</h1>
            <div class="form__subtitle">Заполните все поля, чтобы подать заявку <br> на регистрацию</div>
            <div class="form__fields">

                <et-input :data="data.lastName" />

                <et-input :data="data.name" />

                <et-input :data="data.middleName" />

                <et-input type="tel" :data="data.phoneNumber" />

                <et-input :data="data.email" />

            </div>
            <button-component @click.prevent="registerStore.stepOne()">Продолжить</button-component>
    </form>
</template>
<script>
import { useRegisterStore } from '@/stores/register.js';
import InputComponent from '@/components/UI/InputComponent.vue';
import EtInput from '@/components/UI/EtInput.vue';
import ButtonComponent from '@/components/UI/ButtonComponent.vue';
import { ref, computed } from 'vue';
export default {
    components : {
        InputComponent,
        ButtonComponent,
        EtInput
    },
    setup() {

        const registerStore = useRegisterStore(),
            data = registerStore.dataInput,
            fail = ref(data.lastName.fail);

        return {
            data, registerStore, fail
        }
    },
    mounted() {
        IMask(document.querySelector('[type="tel"]'), {
            mask: '+7 (000) 000-00-00'
        });
    }
}
</script>
<style lang="">
    
</style>