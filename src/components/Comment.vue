<template>
    <div>
        <div class="flex gap-3">
            <img src="@/assets/icons/profile_1.png" class="h-9 w-9 object-cover rounded-full" alt="profile-icon" />
            <div class="flex gap-3 w-full items-center">
                <div class="w-full">
                    <p class="flex flex-wrap items-center gap-x-1">
                        <span class="font-bold">안녕 나 응애</span>
                        <img src="@/assets/icons/tick.png" class="shrink-0 h-3.5" alt="profile-icon" />
                        <span class="text-xs shrink-0">1일전</span>
                    </p>
                </div>
                <button class="outline-none shrink-0 -me-1 -mt-7">
                    <img src="@/assets/icons/menu.png" class="h-8 w-8" alt="menu-icon" />
                </button>
            </div>
        </div>
        <div class="pl-12 flex flex-col gap-4">
            <div>
                <p>어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
                    우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
                    아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
                    괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
                    꼭 봐주세용~!</p>
                <div class="flex gap-3 py-2 text-xs">
                    <button class="flex items-center gap-1 outline-none outline-none">
                        <img src="@/assets/icons/like.png" class="h-6 w-6" alt="like-icon" />
                        <span>5</span>
                    </button>
                    <button class="flex items-center gap-1 outline-none">
                        <img src="@/assets/icons/comment.png" class="h-6 w-6" alt="comment-icon" />
                        <span>10</span>
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
}
</script>
  
  
<style scoped lang="scss"></style>
  