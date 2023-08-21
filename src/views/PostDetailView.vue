<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>display the content of post with id of {{ $route.params.id }} here</p>
    <div>
      <button @click="showPostId">Show post id</button>
    </div>
    <div>
      <button @click="goHomeIn3Seconds">Go Home in 3 seconds</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>
    <p>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const showPostId = () => {
  alert(`the id of this post is: ${route.params.id} `)
}

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    router.push('/') // on the basis of route
    // router.push({name:'home'}) // on the basis of name of the component
  }, 3000)
}

const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
}
</script>