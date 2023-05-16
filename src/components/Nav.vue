<template>
  <nav class="z-30 py-1 flex items-center gap-5 sticky top-0 bg-white border-b border-slate-100">
    <button class="px-3 py-2"><img src="@/assets/icons/arrowback.png" class="h-6 w-6" alt="back_btn" /></button>
    <h1 class="mx-auto truncate font-bold text-lg">{{ title }} </h1>
    <button class="px-3 py-2 pe-4"> <img src="@/assets/icons/notification.png" class="h-6 w-6"
        alt="notification_btn" /></button>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    title: String
  }
}
</script>


<style scoped lang="scss"></style>
