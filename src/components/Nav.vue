<template>
  <nav class="py-1 flex items-center gap-5 sticky top-0 bg-white">
    <button class="px-3 py-2"><img src="@/assets/icons/arrowback.png" alt="" /></button>
    <h1 class="mx-auto truncate font-bold text-lg">{{ $lang.TITLE }} </h1>
    <button class="px-3 py-2"> <img src="@/assets/icons/notification.png" alt="" /></button>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss"></style>
