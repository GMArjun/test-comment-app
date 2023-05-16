<template>
  <Nav msg="Welcome to Your Vue.js App" />
  <main class="p-5">
    <div>Hello</div>
  </main>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
