<template >
    <div class="field" :class="{ 'field--required': data.required, 'w100': fullWidth, 'failed': data.fail || data.failNull}">
            <input v-model="data.value" :id="id" class="field__input" placeholder=" " :type="show ? 'text' : 'password'">
            <label :for="id" class="field__label">{{data.label}}</label>
            <img @click="show = show ? false : true" class="field__eye" src="@/assets/icons/eye.svg" alt="">
    </div>
</template>
<script>
import { ref } from "vue";
export default {
    props: {
        data : {
            type : Object,
            required : true
        },
        fullWidth : {
            type : Boolean,
            default : false
        }
    },
    setup(props) {
        const data = props.data,
              id = ref(''),
              fullwidth = props.fullWidth,
              type = props.type,
              show = ref(false);

        return {
            id,
            data,
            fullwidth,
            type,
            show
        }
    },
    mounted : function () {
        const getAlphaNumericRandom = function (len) {
            if ((len == undefined) || (len <= 0)) { len = 1; }
            let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let result = '';
            let iffirst = 0;
            for (var i = 0; i < len; i++) {
                if (i == 0) { iffirst = 10; } else { iffirst = 0; }
                result += characters[Math.round(Math.random() * (characters.length - iffirst - 1))];
            }
            return result;
        }

        this.id = getAlphaNumericRandom(15);
    }
}
</script>
<style scoped lang="scss">
    .failed {
        .field__input {
            border: #F3223C solid 1px;
        }
        .field__input:not(:placeholder-shown) {
            background-color: #fff;
            border: 1px solid #F3223C;
        }
    }
    .field {
        position: relative;
        &__eye {
            display: block;
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
        }
        &--required {
            .field__label::after {
                content: '*';
                display: block;
                position: absolute;
                right: -6px;
                top: 0;
                color: #F3223C;
            }
        }
        &__input{
            border-radius: 9px;
            display: flex;
            width: 344px;
            height: 50px;
            padding: 16px;
            padding-bottom: 3px;
            border: none;
            background-color: #5D889614;
            &:focus {
                background-color: #fff;
                border: 1px solid #858585;
                outline: none;
            }
        }
        &__label {
            color: #858585;
            position: absolute;
            top: 50%;
            left: 15px;
            transform: translateY(-50%);
            cursor: text;
            transition: all .4s;
            font-size: 15px;
        }
        &__input:focus + &__label {
            font-size: 10px;
            top: 20%;
        }
        &__input:not(:placeholder-shown) {
            background-color: #fff;
            border: 1px solid #858585;
        }
        &__input:not(:placeholder-shown) + &__label {
            font-size: 10px;
            top: 20%;
        }
    }
</style>