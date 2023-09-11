<template lang="">
    <button class="btn"><slot></slot></button>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .btn {
            width: 344px;
            background-color: #F3223C;
            padding: 16px;
            border: none;
            border-radius: 9px;
            color: #fff;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;
            margin-top: 30px;
        }
</style>