<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>
import TabbarItem from "@/components/tabbar/tabbar-item";
import { Tabbar, TabItem } from "mint-ui";

export default {
    name: "",
    components: { TabbarItem },
    props: {}
};
</script>
<style lang='scss' scoped>
.tabbar {
    display: flex;
    height: 49px;
    background: lemonchiffon;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>