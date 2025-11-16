<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />

    <PostFilter
      v-model:title="params.title_like"
      v-model:limit="params._limit"
    ></PostFilter>

    <hr clss="my-4" />
    <AppGrid :items="posts">
      <template v-slot="{ item }">
        <PostItem
          :title="item.title"
          :content="item.content"
          :createdAt="item.createdAt"
          @click="goPage(item.id)"
          @modal="openModal(item)"
        ></PostItem
      ></template>
    </AppGrid>

    <AppPagination
      :current-page="params._page"
      :page-count="pageCount"
      @page="page => (params._page = page)"
    />
    <Teleport to="#modal">
      <PostModal
        v-model="show"
        :title="modalTitle"
        :content="modalContent"
        :createdAt="modalCreatedAt"
      >
      </PostModal>
    </Teleport>
    <template v-if="posts && posts.length > 0">
      <AppCard>
        <PostDetailView :id="posts[0].id"></PostDetailView>
      </AppCard>
    </template>
  </div>
</template>

<script setup>
//:(v-bind) 표현식 결과를 props로 전달 :id="1" 이면 숫자 1을 전달, 문자의 경우 '1'써주면 됨.
import PostItem from '@/components/posts/PostItem.vue'
import { getPosts } from '@/api/posts'
import { computed, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import AppCard from '@/components/AppCard.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppGrid from '@/components/AppGrid.vue'
import PostFilter from '@/components/posts/PostFilter.vue'
import PostModal from '@/components/posts/PostModal.vue'

const router = useRouter()
const posts = ref([])

const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 3,
  title_like: '',
})
//pagination
const totalCount = ref(0)
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit),
)

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value) //문법적으로 더 심플
    posts.value = data
    totalCount.value = headers['x-total-count']
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
//fetchPosts()
watchEffect(fetchPosts) //콜백함수 안에서 반응형 데이터가 변경되면 콜백함수 다시 실행
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

//modal
const show = ref(false)
const modalTitle = ref('')
const modalContent = ref('')
const modalCreatedAt = ref('')

const openModal = ({ title, content, createdAt }) => {
  show.value = true
  modalTitle.value = title
  modalContent.value = content
  modalCreatedAt.value = createdAt
}
const closeModal = () => {
  show.value = false
}
</script>

<style lang="scss" scoped></style>
