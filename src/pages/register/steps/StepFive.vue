<template>
    <div class="register">
        <form class="form">
            <div class="form--column">
                <h1 class="form__title">Ваша организационно-правовая форма ИП <span>(Шаг 2 из 3)</span></h1>
                <div class="form__text-black tac">Для продолжения процесса регистрации добавьте комлект документов</div>
                <div class="form__inputs">
                    <et-file-input>Уведомление или свидетельство о постановке на учет в налоговом органе*</et-file-input>
                    <et-file-input class="mt-20">Свидетельство о постановке на учет по месту жительства*</et-file-input>
                    <et-file-input class="mt-20">Выписка из ЕГРИП*</et-file-input>
                    <et-file-input class="mt-20">Карточка контрагента*</et-file-input>
                    <et-file-input class="mt-20">Копия паспорта РФ*</et-file-input>
                    <et-file-input class="mt-20">Уведомление о неиспользовании печати при оформлении документов</et-file-input>
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
        &__title {
            span {
               font-size: 16px;
                color: #858585;
            }
        }
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