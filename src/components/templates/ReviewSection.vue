<template>
    <div>
        <h1>{{ pageTitle }}</h1>
        <div class="slider">
            <div class="slider-bg"></div>
            <div class="cards">
                <Slider v-for="(review, index) in reviews" :key="index" :profileImg="review.profileImg"
                    :profileName="review.profileName" :companyName="review.companyName"
                    :reviewDescription="review.reviewDescription" :starsAmount="review.starsAmount" class="slider-cards" />
            </div>
        </div>
        <div class="arrows">
            <img src="../../assets/arrow-left.svg" alt="Arrow left" id="prev-btn" />
            <img src="../../assets/arrow-right.svg" alt="Arrow right" id="next-btn" />
        </div>
    </div>
</template>

<script>
import Slider from '../../components/organisms/Slider.vue';

export default {
    props: {
        pageTitle: {
            type: String,
            default: ''
        },
        reviews: {
            type: Array,
            default: () => ({})
        }
    },
    components: {
        Slider
    },
    mounted() {
        // load slick-carousel & jquery packages
        require('slick-carousel');
        const $ = require('jquery').noConflict();

        // slick slider settings
        $(document).ready(function () {
            $('.cards').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
                variableWidth: true,
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        });
        // add functionality to left & right arrows
        $('#prev-btn').click(function () {
            $('.cards').slick('slickPrev');
        });

        $('#next-btn').click(function () {
            $('.cards').slick('slickNext');
        });
    },
}
</script>

<style lang="scss">
@import url('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
@import url('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css');

h1 {
    margin: 0 auto 48px 176px;
    font-weight: 700;
    max-width: 416px;

    @media only screen and (max-width: 768px) {
        margin: 0 16px 32px 16px;
    }

    @media only screen and (max-width: 1024px) {
        margin: 0 32px 48px 32px;
    }
}

.slider {
    display: flex;
    flex-direction: row;
    position: relative;
    height: 384px;

    @media only screen and (max-width: 768px) {
        height: 450px
    }

    .slider-bg {
        position: absolute;
        z-index: 0;
        margin: 0 64px;
        width: 88%;
        border-radius: 24px;
        background: #F57F31;
        height: 308px;

        @media only screen and (max-width: 768px) {
            width: 90%;
            margin: 0 16px;
            height: 400px
        }

        @media only screen and (max-width: 1024px) {
            width: 90%;
            margin: 0 32px;
            height: 308px
        }
    }

    .cards {
        position: absolute;
        bottom: 0;
        z-index: 1;
        max-width: 1440px;

        @media only screen and (max-width: 1440px) {
            width: 100%;
            max-width: 100%;
        }

        .slider-cards {
            position: relative;
            min-width: 416px;
            margin-right: 32px;
            height: 320px;

            @media only screen and (max-width: 768px) {
                min-width: 250px;
                height: 400px;
            }

            @media only screen and (max-width: 1024px) {
                min-width: 350px;
                height: 400px;
            }

            .slider-card {
                height: 176px;
                margin-right: 32px;

                @media only screen and (max-width: 768px) {
                    height: 250px;

                    margin-right: 16px;
                }

                @media only screen and (max-width: 1024px) {
                    height: 150px;
                    margin-right: 16px;
                }
            }
        }
    }
}

.arrows {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 360px;
    margin: 40px auto 0 auto;

    @media only screen and (max-width: 1024px) {
        display: none
    }

    img {
        cursor: pointer
    }
}

// slider & active slide slyling
.slick-list {
    padding-bottom: 24px !important;

    @media only screen and (max-width: 768px) {
        padding: 0 90px 24px 90px !important
    }

    .slick-current {
        .slider-card {
            border: 4px solid #F5B431;
        }

        .profile-img-border svg>path {
            fill: #F5B431
        }
    }
}
</style>