<template>
  <div class="home">
    <h3>{{ counterData.title }}</h3>
    <button class="btn" @click="decreaseCounter(2)">--</button>
    <button class="btn" @click="decreaseCounter(1)">-</button>
    <span class="counter">{{ counterData.count }}</span>
    <button class="btn" @click="increaseCounter(1)">+</button>
    <button class="btn" @click="increaseCounter(2)">++</button>
    <p>This counter is {{ oddOrEven }}</p>
  </div>
  <div class="edit">
    <h4>Edit counter title </h4>
    <input type="text" v-model="counterData.title">
  </div>
</template>

<script setup>
import {
  reactive, computed, watch, onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated
} from 'vue';

const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

watch(() => counterData.count, (newCount, oldCount) => {
  console.log('oldcount ', oldCount)
  if (newCount > 10) {
    alert('ruko zara, sabr karo')
  }
})
const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even'
  return 'odd'
})



const increaseCounter = (amount) => {
  counterData.count += amount;
}

const decreaseCounter = (amount) => {
  counterData.count -= amount;
}

onBeforeMount(() => {
  console.log("onBeforeMount")
})

onMounted(() => {
  console.log("onMounted")
})

onBeforeUnmount(() => {
  console.log("onBeforeUnmount")
})

onUnmounted(() => {
  console.log("onUnmounted")
})

onActivated(() => {
  console.log("onActivated")
})

onDeactivated(() => {
  console.log("onDeactivated")
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log('onUpdated')
})
</script> 

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
