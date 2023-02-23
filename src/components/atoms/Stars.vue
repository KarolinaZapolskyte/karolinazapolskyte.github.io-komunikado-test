<template>
    <div>
        <div v-for="index in 5" :key="index" :class="['fa fa-star', index <= starsAmount ? 'checked' : '']">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        starsAmount: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.fa-star {
    padding: 0 4px;

    &.checked {
        color: #F57F31
    }
}
</style>