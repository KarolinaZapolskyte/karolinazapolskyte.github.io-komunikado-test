<template>
    <div>
        <div :style="`background-image:url('${profileImg}')`" class="profile-img"></div>
    </div>
</template>

<script>
export default {
    props: {
        profileImg: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>

.profile-img {
    min-width: 72px;
    width: 72px;
    height: 72px;
    background-position: center;
    background-size: cover;
    border-radius: 100%;
    position: absolute;
    top: -20px;
    left: 32px;
}</style>