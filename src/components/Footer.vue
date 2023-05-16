<template>
    <div class="p-3 mt-auto sticky bottom-0 bg-white border-t border-b border-slate-100">
        <form @submit.prevent="submitComment" class="flex items-center w-full gap-2">
            <div class="overflow-hidden relative">
                <img src="@/assets/icons/imagesmode.png" class="h-6 w-6" alt="profile-icon" />
                <input type="file" name="myfile" class="h-full w-full absolute left-0 top-0 opacity-0" accept="image/*" />
            </div>
            <input v-model="content" type="text" class="grow outline-none	shadow-none px-2 py-1" placeholder="댓글을 남겨주세요.">
            <button class="px-3 py-1 rounded-full shrink-0 text-color-light">등록</button>
        </form>
    </div>
</template>
  
<script>
// Mock
import data from '@/mock/data.json'

export default {
    name: 'AppFooter',
    data() {
        return {
            content: ""
        }
    },
    methods: {
        submitComment() {
            let commentContent = {
                ...data.user,
                content: this.content
            }
            this.$emit("onComment", commentContent)
            this.content = "";
        }
    }
}
</script>
  
  
<style scoped lang="scss"></style>
  