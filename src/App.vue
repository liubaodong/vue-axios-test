<template>
    <div id="app">
        <!-- header -->
        <!-- container -->
        <h2>{{$store.state.count}}</h2>
        <input type="button" @click="add" value="+" />
        <input type="button" @click="dee" value="-" />
        <input type="button" @click="addCount(5)" value="+ 5" />
        <input type="button" @click="addCount(10)" value="+ 10" />
        <input type="button" @click="asyAdd" value="+ 20" />
        <h2>{{$store.getters.powerCounter}}</h2>
        <input type="button" @click value="平方" />
        <!-- ........数据......... -->
        <h3>{{$store.state.student}}</h3>
        <br />
        <h3>{{$store.getters.one(20)}}</h3>

        <!-- tabbar -->
        <tabbars>
            <tabbar-item>
                <template v-slot:item-text>{{text.write}}</template>
            </tabbar-item>
            <tabbar-item>
                <template v-slot:item-icon>分類</template>
            </tabbar-item>
        </tabbars>
    </div>
</template>

<style lang="scss">
</style>
<script>
import Tabbars from "@/components/tabbar/tabbar";
import TabbarItem from "@/components/tabbar/tabbar-item";
export default {
    components: {
        Tabbars,
        TabbarItem
    },
    methods: {
        add() {
            this.$store.commit("increment");
        },
        dee() {
            this.$store.commit("decrement");
        },
        doubule() {},
        addCount(count) {
            this.$store.commit({ type: "addCount", count });
        },
        asyAdd() {
            this.$store.dispatch("aAdd", "payload");
        }
    },
    data() {
        return {
            text: {
                write: "good",
                sing: "verygood"
            }
        };
    },
    created() {
         //console.log()
    }
};
</script>
