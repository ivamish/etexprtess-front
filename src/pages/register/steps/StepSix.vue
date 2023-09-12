<template>
    <div class="register">
        <form class="form">
            <div class="form--column">
                <h1 class="form__title">Ваша организационно-правовая форма ИП <span>(Шаг 2 из 3)</span></h1>
                <div class="form__text-black tac">Для продолжения процесса регистрации добавьте комлект документов</div>
                <div class="form__inputs">
                    <et-file-input>Свидетельство о постановке на учет в налоговом органе*</et-file-input>
                    <et-file-input class="mt-20">Свидетельство о государственной регистрации юр.лица*</et-file-input>
                    <et-file-input class="mt-20">Устав организации*</et-file-input>
                    <et-file-input class="mt-20">Решение или протокол о создании юр.лица*</et-file-input>
                    <et-file-input class="mt-20">Приказ о назначении директора*</et-file-input>
                    <et-file-input class="mt-20">Приказ о вступлении в должность директора*</et-file-input>
                    <et-file-input class="mt-20">Копия паспорта или карточка образцов подписей*</et-file-input>
                    <et-file-input class="mt-20">Карточка организации*</et-file-input>
                </div>
                <button-component @click.prevent="registerStore.nextStep()">Перейти в личный кабинет</button-component>
                <a href="#" class="form__info mt-15">Прикрепить позже</a>
                <a href="#" class="form__info mt-10">Нужна помощь менеджера</a>
            </div>
        </form>
    </div>
</template>
<script>
import ButtonComponent from '@/components/UI/ButtonComponent.vue';
import EtFileInput from '@/components/UI/EtFileInput.vue';
export default {
    components : {
        ButtonComponent,
        EtFileInput
    }
}
</script>
<style lang="scss">
    .form {
        &__inputs {
            margin-top: 40px;
            width: 100%;
        }
    }
    .tac {
        text-align: center;
    }
    .mt-20 {
        margin-top: 20px;
    }
    .mt-15 {
        margin-top: 15px;
    }
    .mt-10 {
        margin-top: 10px;
    }
</style>