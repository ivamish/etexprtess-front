<template>
    <div class="register">

        <step-one :key="tes"  v-if="registerStore.stepRegistration === 1" />

        <step-two  v-if="registerStore.stepRegistration === 2" />        

        <step-three v-if="registerStore.stepRegistration === 3" />

        <step-four  v-if="registerStore.stepRegistration === 4" />

        <step-five  v-if="registerStore.stepRegistration === 5" />

        <step-six  v-if="registerStore.stepRegistration === 6" />

        <step-seven  v-if="registerStore.stepRegistration === 7" />

        <step-eight v-if="registerStore.stepRegistration === 8" />

    </div>
</template>

<script>

import StepOne from '@/pages/register/steps/StepOne.vue';
import StepTwo from '@/pages/register/steps/StepTwo.vue';
import StepThree from '@/pages/register/steps/StepThree.vue';
import StepFour from '@/pages/register/steps/StepFour.vue';
import StepFive from '@/pages/register/steps/StepFive.vue';
import StepSix from '@/pages/register/steps/StepSix.vue';
import StepSeven from '@/pages/register/steps/StepSeven.vue';
import StepEight from '@/pages/register/steps/StepEight.vue';
import { useRegisterStore } from '@/stores/register.js';

export default {
    components: {
        StepOne,
        StepTwo,
        StepThree,
        StepFour,
        StepFive,
        StepSix,
        StepSeven,
        StepEight
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
            span {
               font-size: 16px;
                color: #858585;
            }
        }
        &__subtitle, &__info{
            font-size: 15px;
            color: #858585;
        }
        &__text-black {
            font-size: 15px;
            font-weight: 500;
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
        &--column {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>