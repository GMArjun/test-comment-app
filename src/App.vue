<template>
  <div class="app-layout max-w-3xl mx-auto w-full text-sm min-h-screen flex flex-col text-color-regular">
    <AppNav :title="title" />
    <main>
      <section class="sticky top-12 bg-white z-20">
        <div class="flex gap-3 p-4">
          <img src="@/assets/icons/profile_1.png" class="h-9 w-9 object-cover rounded-full" alt="profile-icon" />
          <div class="flex gap-3 w-full items-center">
            <div class="w-full">
              <p class="flex flex-wrap items-center gap-x-1">
                <span class="font-bold text-color-bold">안녕 나 응애</span>
                <img src="@/assets/icons/tick.png" class="shrink-0 h-3.5" alt="profile-icon" />
                <span class="shrink-0 text-xxs text-color-light">1일전</span>
              </p>
              <p class="text-xs text-color-light">165cm 165cm</p>
            </div>
            <button class="bg-color-primary shrink-0 text-white px-3 py-1 rounded-full">팔로우</button>
          </div>
        </div>
      </section>

      <section>
        <div class="p-4 pt-0">
          <div class="grid gap-y-3">
            <p class="font-bold">지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?</p>
            <p>지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
              혹시 어떤 상품이 제일 괜찮았어?</p>

            <p>후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이
              제일 재밌었다던데 맞아??? </p>

            <p>올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
              아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
              있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!</p>
          </div>

          <div class="flex gap-3 flex-wrap text-xs pt-3">
            <AppTag :value="tags" v-for="(tags, i) in tagData" :key="i" />
          </div>
        </div>
      </section>

      <ImageSlider :images="images" />

      <section>
        <div class="p-4 flex flex-col gap-3">
          <template v-if="comments && comments.length">
            <AppComment :commentData="comment" v-for="(comment, i) in comments" :key="i">
              <template v-if="comment.replies && comment.replies.length">
                <AppComment :commentData="comment" v-for="(comment, j) in comment.replies" :key="j" />
              </template>
            </AppComment>
          </template>
        </div>
      </section>

    </main>
    <Footer @onComment="handleComment" />
  </div>
</template>

<script>
import AppNav from '@/components/Nav.vue'
import AppTag from '@/components/Tag.vue'
import ImageSlider from "@/components/ImageSlider.vue"
import AppComment from "@/components/Comment.vue"
import Footer from "@/components/Footer.vue";

// Mock
import data from '@/mock/data.json';

export default {
  name: 'App',
  components: {
    AppNav,
    AppTag,
    ImageSlider,
    AppComment,
    Footer
  },
  data() {
    return {
      title: data.title,
      tagData: data.tags,
      images: data.images,
      comments: data.comments
    }
  },
  methods: {
    handleComment(userCommentDetails) {
      this.comments = [...this.comments, userCommentDetails];
      this.$nextTick(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      })
    }
  }
}
</script>

<style>
body {
  font-family: "Noto Sans KR", sans-serif;
}
</style>