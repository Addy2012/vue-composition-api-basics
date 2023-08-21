<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label>
                Show dark modals?
                <input type="checkbox" v-model="showDarkModals">
            </label>
        </div>
        <button @click="showModal = true" v-if="showModal === false">Show Modal</button>
        <component :is="showDarkModals?ModalDark:Modal" v-model="showModal" title="My new title">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ipsa beatae, quod deleniti
                magni
                ullam maxime esse reiciendis molestiae! Laboriosam provident veniam soluta dolor officiis vitae deleniti
                praesentium. Minus!</p>
        </component>
    </div>
</template>

<script setup>
/*
    imports
*/
import { ref } from 'vue';
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'

/*
 modals
*/

const showDarkModals = ref(false)
const showModal = ref(false);

</script>
<style></style>