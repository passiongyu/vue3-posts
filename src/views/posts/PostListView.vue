<template>
  <div>
    <h2>게시글 목록</h2>
    <hr clss="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
    <hr clss="my-4" />
    <AppCard>
      <PostDetailView :id="1"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
//:(v-bind) 표현식 결과를 props로 전달 :id="1" 이면 숫자 1을 전달, 문자의 경우 '1'써주면 됨.
import PostItem from '@/components/posts/PostItem.vue'
import { getPosts } from '@/api/posts'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import AppCard from '@/components/AppCard.vue'
const router = useRouter()
const posts = ref([])

const fetchPosts = async () => {
  try {
    const { data } = await getPosts() //문법적으로 더 심플
    posts.value = data
  } catch (error) {
    console.error(error)
  }

  /* getPosts()
    .then(response => {
      console.log('response: ', response)
    })
    .catch(error => {
      console.log('error: ', error)
    }) */
}
fetchPosts()
const goPage = id => {
  //router.push(`/posts/${id}`)
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
    query: {
      searchText: 'hello',
    },
    hash: '#world!',
  })
}
</script>

<style lang="scss" scoped></style>
