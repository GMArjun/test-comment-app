<template>
    <div class="slider">
        <div class="slide h-full" v-for="(image, index) in images" :key="index" v-show="current === index">
            <img :src="image" class="h-full w-full object-cover" alt="Slider Image">
        </div>
        <div class="pagination">
            <span class="dot" v-for="(image, index) in images" :key="index" :class="{ active: current === index }"
                @click="setCurrent(index)"></span>
        </div>
    </div>
    <div class="flex gap-4 border-b-2 border-slate-100 p-3">
        <button class="flex items-center outline-none">
            <img src="@/assets/icons/like.png" class="h-8 w-8" alt="like-icon" />
            <span>5</span>
        </button>
        <button class="flex items-center outline-none">
            <img src="@/assets/icons/comment.png" class="h-8 w-8" alt="comment-icon" />
            <span>10</span>
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
            current: 0
        }
    },
    methods: {
        setCurrent(index) {
            this.current = index;
        }
    }
}
</script>
  
  
<style scoped lang="scss">
.slider {
    position: relative;
    width: 100%;
    aspect-ratio: 5 / 6;
}


.slide.active {
    opacity: 1;
}

.pagination {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: #ccc;
    cursor: pointer;
}

.dot.active {
    background-color: #333;
}
</style>
  