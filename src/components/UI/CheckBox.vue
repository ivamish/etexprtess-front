<template lang="">
    <div class="checkbox">
        <input id="test" type="checkbox">
        <label for="test"><div class="wrap"><slot></slot></div></label>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .checkbox {
        input {
            display: none;
        }
        .wrap {
            padding-left: 25px;
        }
        label {
            position: relative;
            font-size: 12px;
            color: #858585;
            cursor: pointer;
            &::before {
                content: '';
                display: block;
                width: 14px;
                height: 14px;
                border-radius: 100%;
                background-color: #F2F3F5;
                position: absolute;
                left: 0;
                top: 0%;
                transform: translateY(50%);
            }
        }
        input:checked + label {
            &::before {
                content: "";
                background-color: #46A175;
                background: url(@/assets/icons/check.svg) center center/cover no-repeat;
            }
        }
    }
</style>