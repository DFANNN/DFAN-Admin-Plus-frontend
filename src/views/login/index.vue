<template>
  <div>
    login组件
    <el-button type="primary" @click="showMessage">Primary</el-button>
    <div>count:{{ count }}</div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const count = ref(0)

const showMessage = () => {
  ElMessage.success('HELLO WORLD')
  count.value++
}
</script>

<style scoped></style>
