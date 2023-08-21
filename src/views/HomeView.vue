<template>
  <div class="home">

    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counter.title }}</h3>

    <div>
      <button class="btn" @click="counter.decreaseCuunter(2)">--</button>
      <button class="btn" @click="counter.decreaseCuunter(1)">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn" @click="counter.increaseCounter(1)">+</button>
      <button class="btn" @click="counter.increaseCounter(2)">++</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>
    <div class="edit">
      <h4>Edit counter title </h4>
      <input type="text" v-autofocus>
    </div>
  </div>
</template>

<script setup>
import {
  ref, onBeforeMount,
  onBeforeUnmount, onMounted,
  onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated
} from 'vue';
import { vAutofocus } from '@/directives/vAutofocus'
// import { useCounter } from '@/use/useCounter';
import { useCounterStore } from '@/stores/counter';
const appTitle = 'This is my home page vue '

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px width`)
})

const appTitleRef = ref(null)

onBeforeMount(() => {
  console.log("onBeforeMount")
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

/*
Counter
*/

const counter = useCounterStore();
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
