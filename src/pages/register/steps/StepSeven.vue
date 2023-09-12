<template lang="">
    <form class="form form--column">
            <h1 class="form__title">Информационный лист предприятия <span>(Шаг 3 из 3)</span></h1>
            <div class="form__text-black">Для завершения процесса регистрации заполните информацию о вашей компании</div>
            <div class="form__fields--grid">

                <input-component v-model:value = "data.lastName.value" label="Название Торговой точки" :required="true" />

                <input-component v-model:value = "data.name.value"  label="Адрес" :required="true" />

                <input-component v-model:value = "data.middleName.value" label="Время" :required="true" />

                <input-component v-model:value = "data.phoneNumber.value" label="Дата открытия заведения" :required="true" />

                <div class="input-checkbox-grid">
                    <check-box>
                        Я работаю по франшизе
                    </check-box>
                </div>

                <input-component :fullWidth="true" class="full" v-model:value = "data.email.value" label="Выберите направленность Торговой точки" :required="true" />
            </div>
            <button-component @click.prevent="registerStore.nextStep()">Завершить</button-component>
            <a href="#" class="form__info mt-15">Прикрепить позже</a>
                <a href="#" class="form__info mt-10">Нужна помощь менеджера</a>
    </form>
</template>
<script>
import { useRegisterStore } from '@/stores/register.js';
import InputComponent from '@/components/UI/InputComponent.vue';
import ButtonComponent from '@/components/UI/ButtonComponent.vue';
import CheckBox from '@/components/UI/CheckBox.vue';
export default {
    components : {
        InputComponent,
        ButtonComponent,
        CheckBox
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
<style lang="scss">
    .form {
        &__fields {
            &--grid {
                margin-top: 30px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                column-gap: 20px;
                row-gap: 40px;
            }
        }
    }
    .full {
        grid-column: 1 / 3;
    }
    .input-checkbox-grid {
        padding: 0;
    }
</style>