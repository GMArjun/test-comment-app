<template>
    <div class="slider relative w-full aspect-[5/7]">
        <div class="slide h-full bg-slate-100" v-for="(image, index) in images" :key="index"
            v-show="currentSlide === index">
            <img :src="image" class="h-full w-full object-cover" alt="Slider Image">
        </div>
        <div class="bottom-8 flex left-1/2 gap-1 absolute -translate-x-2/4">
            <div class="h-5 w-5 cursor-pointer flex justify-center items-center" v-for="(_, index) in images" :key="index" @click="setCurrent(index)">
                <span class="dot h-2 w-2 rounded-full bg-white block"
                    :class="currentSlide === index ? 'opacity-100' : 'opacity-50'"></span>
            </div>
        </div>
    </div>
    <div class="flex gap-4 border-b-2 border-slate-100 p-3">
        <button class="flex items-center outline-none" @click="handleLike">
            <img src="@/assets/icons/like.png" :class='{ active: isLiked }' class="h-8 w-8" alt="like-icon" />
            <span class="text-color-light">{{ likeCount }}</span>
        </button>
        <button class="flex items-center outline-none">
            <img src="@/assets/icons/comment.png" class="h-8 w-8" alt="comment-icon" />
            <span class="text-color-light">{{ commentCount }}</span>
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
            currentSlide: 0,
            likeCount: 5,
            isLiked: false,
            commentCount: 10
        }
    },
    methods: {
        setCurrent(index) {
            this.currentSlide = index;
        },
        // Extras
        handleLike() {
            this.likeCount += this.isLiked ? -1 : 1;
            this.isLiked = !this.isLiked;
        }

    }
}
</script>
  
<style lang="scss" scoped>
.slider {
    @media screen and (min-width: 500px) {
        aspect-ratio: 15 / 10;

        img {
            object-fit: contain;
        }
    }
}

.active {
    filter: invert(76%) sepia(18%) saturate(480%) hue-rotate(301deg) brightness(102%) contrast(105%);
}</style>
