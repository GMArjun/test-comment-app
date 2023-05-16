<template>
  <Nav msg="Welcome to Your Vue.js App" />
  <main>

    <section class="p-4">
      <div class="flex gap-3">
        <img src="@/assets/icons/profile_1.png" class="h-9 w-9 object-cover rounded-full" alt="profile-icon" />
        <div class="flex gap-3 w-full items-center">
          <div class="w-full">
            <p class="flex flex-wrap items-center gap-x-1">
              <span class="text-sm font-bold">안녕 나 응애</span>
              <img src="@/assets/icons/tick.png" class="shrink-0" alt="profile-icon" />
              <span class="text-xs shrink-0">1일전</span>
            </p>
            <p class="text-xs">165cm 165cm</p>
          </div>
          <button class="text-sm bg-primary shrink-0 text-white px-3 py-1 rounded-full">팔로우</button>
        </div>
      </div>

      <div class="text-sm pt-4 grid gap-y-3">
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
        <Tag :value="tags" v-for="(tags, i) in tagData" :key="i" />
      </div>
    </section>
    
    <div>

    </div>

  </main>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Tag from '@/components/Tag.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Tag
  },
  data() {
    return {
      tagData: ["2023", "Todayismonday", "Top", "Pops", "Wow", "Row"]
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
