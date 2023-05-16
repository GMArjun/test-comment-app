<template>
    <div class="p-3 mt-auto sticky bottom-0 bg-white border-t border-b border-slate-100">
        <form class="flex items-center w-full gap-2">
            <img src="@/assets/icons/imagesmode.png" class="h-6 w-6" alt="profile-icon" />
            <input type="text" class="grow outline-none	shadow-none px-2 py-1" placeholder="댓글을 남겨주세요.">
            <button type="submit" class="px-3 py-1 rounded-full shrink-0 text-color-light">등록</button>
        </form>
    </div>
</template>
  
<script>
export default {
    name: 'AppFooter',
}
</script>
  
  
<style scoped lang="scss"></style>
  