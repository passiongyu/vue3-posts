<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
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
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getPostById, deletePost } from '@/api/posts'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  id: Number,
})

//const route = useRoute()
const router = useRouter()
//const id = route.params.id

const post = ref({})
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

const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id) //구조 분해 할당
    setPost(data)
  } catch (error) {
    console.error(error)
  }

  //form.title = data.title;//반응형으로 선언할 겨우 하나씩 넣어야함.아니면 반응형을 잃음
  //form.content = data.content;
}

const setPost = ({ title, content, createdAt }) => {
  post.value.title = title
  post.value.content = content
  post.value.createdAt = createdAt
}

fetchPost()
const remove = async () => {
  try {
    if (confirm('삭제 하시겠습니까?') === false) {
      return
    }

    await deletePost(props.id)
    router.push({ name: 'PostList' })
  } catch (error) {
    console.error(error)
  }
}
const goListPage = () => router.push({ name: 'PostList' })
const goEditPage = () =>
  router.push({ name: 'PostEdit', params: { id: props.id } })
</script>

<style lang="scss" scoped></style>
