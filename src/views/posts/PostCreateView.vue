<template>
  <div>
    <h2>게시글 등록</h2>
    <hr clss="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-dark" @click="goListPage">
          목록
        </button>
        <button class="btn btn-primary">저장</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { createPost } from '@/api/posts'
import { ref } from 'vue'
import PostForm from '@/components/posts/PostForm.vue'

const router = useRouter()
const form = ref({
  title: null,
  content: null,
})
const save = () => {
  try {
    createPost({ ...form.value, createdAt: Date.now() })
  } catch (error) {
    console.error(error)
  }
  router.push({ name: 'PostList' })
}
const goListPage = () => router.push({ name: 'PostList' })
</script>

<style lang="scss" scoped></style>
