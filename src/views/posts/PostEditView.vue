<template>
  <div>
    <h2>게시글 수정</h2>
    <hr clss="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { getPostById, updatePost } from '@/api/posts'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import PostForm from '@/components/posts/PostForm.vue'

const route = useRoute()
const router = useRouter()
const id = route.params.id

const form = ref({
  title: null,
  content: null,
})

const fetchPost = async () => {
  try {
    const { data } = await getPostById(id) //구조 분해 할당
    setForm(data)
  } catch (error) {
    console.error(error)
  }
}

const setForm = ({ title, content }) => {
  form.value.title = title
  form.value.content = content
}
fetchPost()

const edit = async () => {
  try {
    await updatePost(id, { ...form.value })
    router.push({ name: 'PostDetail', param: { id } })
  } catch (error) {
    console.error(error)
  }
}

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } })
</script>

<style lang="scss" scoped></style>
