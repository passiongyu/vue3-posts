<template>
  <div>
    <h2>{{ form.title }}</h2>
    <p>{{ form.content }}</p>
    <p class="text-muted">{{ form.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getPostById } from '@/api/posts'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  id: Number,
})

//const route = useRoute()
const router = useRouter()
//const id = route.params.id

const form = ref({})
//let form = reactive({});  //반응형으로 선언할 경우
/**
 * ref
 * 장)객체 할당 가능
 * 단)form.vlaue.title, form.value.content식으로 접근
 *
 * reactive
 * 장)form.title, form.content
 * 장)일관성 유지
 * 단)객체 할당 불가능
 */

const fetchPost = () => {
  const data = getPostById(props.id)
  form.value = { ...data } //객체복사를 통해 넣는다.
  //form.title = data.title;//반응형으로 선언할 겨우 하나씩 넣어야함.아니면 반응형을 잃음
  //form.content = data.content;
}
fetchPost()
const goListPage = () => router.push({ name: 'PostList' })
const goEditPage = () =>
  router.push({ name: 'PostEdit', params: { id: props.id } })
</script>

<style lang="scss" scoped></style>
