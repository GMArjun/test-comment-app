<template>
    <div>
        <div class="flex gap-3">
            <img :src="require(`@/assets/icons/${commentData.userImg}.png`)" class="h-9 w-9 object-cover rounded-full"
                alt="profile-icon" />
            <div class="flex gap-3 w-full items-center">
                <div class="w-full">
                    <p class="flex flex-wrap items-center gap-x-1">
                        <span class="font-bold"> {{ commentData.name }}</span>
                        <img src="@/assets/icons/tick.png" v-if="commentData.userVerified" class="shrink-0 h-3.5"
                            alt="profile-icon" />
                        <span class="text-xs shrink-0 text-xxs text-color-light">{{ commentData.time }}</span>
                    </p>
                </div>
                <button class="outline-none shrink-0 -me-1 -mt-7">
                    <img src="@/assets/icons/menu.png" class="h-8 w-8" alt="menu-icon" />
                </button>
            </div>
        </div>
        <div class="pl-12 flex flex-col gap-3">
            <div>
                <p>{{ commentData.content }}</p>
                <div class="flex gap-3 py-2 text-xs">
                    <button class="flex items-center gap-1 outline-none outline-none">
                        <img src="@/assets/icons/like.png" class="h-6 w-6" alt="like-icon" />
                        <span class="text-color-light">{{ commentData.likes }}</span>
                    </button>
                    <button class="flex items-center gap-1 outline-none">
                        <img src="@/assets/icons/comment.png" class="h-6 w-6" alt="comment-icon" />
                        <span class="text-color-light">10</span>
                    </button>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'AppComment',
    props: {
        commentData: Object
    }
}
</script>
  
  
<style scoped lang="scss"></style>
  