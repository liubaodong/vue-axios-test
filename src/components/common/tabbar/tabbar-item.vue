<template>
    <div class="tabbar-item">
        <slot name="item-text"></slot>
        <slot name="item-icon"></slot>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    props: {}
};
</script>
<style lang='scss' scoped>
.tabbar-item {
    color: red;
    font-size: 16px;
    line-height: 49px;
    flex: 1;
}
</style>