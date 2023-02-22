<template>
    <div class="card">
        <div class="profile-img-border">
            <svg width="74" height="40" viewBox="0 0 74 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M73.6622 24.0037C70.5497 16.87 65.4235 10.7993 58.9121 6.5357C52.4007 2.27207 44.7868 0.000710972 37.0037 1.6681e-07C29.2205 -0.000710638 21.6062 2.26926 15.094 6.53169C8.58179 10.7941 3.45456 16.8639 0.340717 23.997L37 40L73.6622 24.0037Z"
                    fill="white" />
            </svg>
        </div>
        <div class="slider-card">
            <ProfileImage :profileImg="profileImg" />
            <div class="profile-info">
                <div class="name-company">
                    <h2>{{ profileName }}</h2>
                    <p class="company-name">{{ companyName }}</p>
                </div>
                <Stars :starsAmount="starsAmount" />
            </div>
            <p class="description">{{ reviewDescription }}</p>
        </div>
    </div>
</template>

<script>
import ProfileImage from '../atoms/ProfileImage.vue';
import Stars from '../atoms/Stars.vue';

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
        ProfileImage,
        Stars
    }
}
</script>

<style lang="scss" scoped>
p {
    margin: 0;
}

.profile-img-border {
    position: absolute;
    top: 29px;
    left: 34.5px;

@media only screen and (max-width: 768px) {
    top: 32px
}

@media only screen and (max-width: 1024px) {
    top: 130px
}
}

.card {
    width: 416px;

    @media only screen and (max-width: 768px) {
        width: 250px;
    }
}

.slider-card {
    position: absolute;
    bottom: 0;
    background: white;
    border: 4px solid #fff;
    border-radius: 24px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.15);
    padding: 72px 48px 16px 32px;

    @media only screen and (max-width: 1024px) {
        margin-right: 16px;
    }

    .profile-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 8px;

        @media only screen and (max-width: 768px) {
            flex-direction: column;
        }

        .name-company {
            display: flex;
            flex-direction: column;

            @media only screen and (max-width: 768px) {
                margin-bottom: 8px
            }

            h2 {
                margin: 0;
                font-size: 18px;
                font-weight: 700;
                color: #F57F31
            }

            .company-name {
                font-size: 14px;
                color: #333333;
                font-weight: 700
            }
        }
    }

    .description {
        font-size: 18px;
        color: #333333;
    }
}
</style>