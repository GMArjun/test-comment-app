<template>
    <div class="slider relative w-full aspect-[5/6]">
        <div class="slide h-full" v-for="(image, index) in images" :key="index" v-show="currentSlide === index">
            <img :src="image" class="h-full w-full object-cover" alt="Slider Image">
        </div>
        <div class="bottom-8 flex left-1/2 gap-2 absolute -translate-x-2/4">
            <span class="dot h-2 w-2 rounded-full bg-white cursor-pointer opacity-50" v-for="(_, index) in images"
                :key="index" :class="{ active: currentSlide === index }" @click="setCurrent(index)"></span>
        </div>
    </div>
    <div class="flex gap-4 border-b-2 border-slate-100 p-3">
        <button class="flex items-center outline-none">
            <img src="@/assets/icons/like.png" class="h-8 w-8" alt="like-icon" />
            <span class="text-color-light">5</span>
        </button>
        <button class="flex items-center outline-none">
            <img src="@/assets/icons/comment.png" class="h-8 w-8" alt="comment-icon" />
            <span class="text-color-light">10</span>
        </button>
        <button class="outline-none">
            <img src="@/assets/icons/bookmark.png" class="h-8 w-8" alt="comment-icon" />
        </button>
        <button class="outline-none">
            <img src="@/assets/icons/menu.png" class="h-8 w-8" alt="menu-icon" />
        </button>
    </div>
</template>
  
<script>
export default {
    name: 'ImageSlider',
    props: {
        images: Array
    },
    data() {
        return {
            currentSlide: 0
        }
    },
    methods: {
        setCurrent(index) {
            this.currentSlide = index;
        }
    }
}
</script>
  
