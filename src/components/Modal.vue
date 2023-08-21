<template>
    <teleport to=".modal-container">
        <div class="modal" v-if="modelValue">
            <h1>
                {{ title }}
            </h1>
            <slot></slot>
            <button @click="$emit('update:modelValue', false)">Hide modal</button>
            <div>
                Username is: {{ userData.username }}
            </div>
        </div>
    </teleport>
</template>

<script setup>
/* 
    import
*/
import { inject } from 'vue'

/* 
    props
*/
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'No title specified'
    },
})

/* 
    emits
*/
const emit = defineEmits(['update:modelValue'])
/* 
    inject
*/
const userData = inject('userData')

</script>

<style>
.modal {
    background: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    widows: 100%;
    height: 100%;
    z-index: 1;
}
</style>