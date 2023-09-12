<template>
    <div class="input">
        <input required class="input__file" id="test" type="file">
        <label for="test" class="input__label"><div><slot></slot></div> <span>Загрузить ></span></label>
    </div>
</template>
<script>
export default {
    props : {

    }
}
</script>
<style lang="scss">
   .input {
    width: 100%;
    &__file {
            display: none;
        }
        &__label {
            width: 100%;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            gap: 15px;
            span {
                color: #5D8896;
                font-size: 14px;
            }
        }
        &__file:valid + &__label {
            span {
                visibility: hidden;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                &::after {
                    content: 'Загружено';
                    display: inline-block;
                    visibility: visible;
                    color: #F3223C;
                    position: absolute;
                }
            }
        }
   }
</style>