<template>
    <div class="dashboard-container">
        <header>
          仪表盘测试
        </header>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    @Component({
        name: 'Dashboard',
    })
    export default class extends Vue {}
</script>

<style lang="less" scoped>
.dashboard-container {
    padding: 0 32px;
    background-color: #fff;
}
</style>
