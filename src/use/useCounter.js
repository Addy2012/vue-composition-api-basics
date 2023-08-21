import { reactive, watch, computed, nextTick, onMounted } from 'vue'

export function useCounter() {
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



    const increaseCounter = async (amount) => {
        if (counterData.count <= 10) {
            counterData.count += amount;
        }
        await nextTick(() => {
            console.log('do somehting when counter is updated')
        })
    }

    const decreaseCounter = (amount) => {
        if (counterData.count >= 0) {
            counterData.count -= amount;
        }
    }

    onMounted(() => {
        console.log("onMounted")
    })

    return {
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter
    }
}