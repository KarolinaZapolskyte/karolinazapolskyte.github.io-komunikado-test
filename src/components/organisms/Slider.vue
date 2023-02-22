<template>
    <div>
        <ReviewCard :profileImg="profileImg" :profileName="profileName" :companyName="companyName"
            :reviewDescription="reviewDescription" :starsAmount="starsAmount" />
    </div>
</template>

<script>
import ReviewCard from '../molecules/ReviewCard.vue';
export default {
    props: {
        profileImg: {
            type: String,
            default: ''
        },
        profileName: {
            type: String,
            default: ''
        },
        companyName: {
            type: String,
            default: ''
        },
        reviewDescription: {
            type: String,
            default: ''
        },
        starsAmount: {
            type: Number,
            default: 0
        }
    },
    components: {
        ReviewCard,
    }
}
</script>

<style lang="scss" scoped></style>