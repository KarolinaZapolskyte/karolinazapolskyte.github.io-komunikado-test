<template>
  <div id="app">
    <ReviewSection pageTitle="What 400+ reviews say about us" :reviews="reviews" />
  </div>
</template>
    
<script>
import ReviewSection from '../components/templates/ReviewSection.vue'

export default {
  components: {
    ReviewSection
  },
  data() {
    return {
      reviews: [
        { profileImg: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg', profileName: 'Karolina Z', companyName: 'Komunikado', reviewDescription: 'Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder var konverteringerne steget mere end 150%.', starsAmount: 5 },
        { profileImg: 'https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=', profileName: 'Karolina Z', companyName: 'Komunikado', reviewDescription: 'Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder var konverteringerne steget mere end 150%.', starsAmount: 4 },
        { profileImg: 'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg', profileName: 'Karo', companyName: 'Komunikado', reviewDescription: 'Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder var konverteringerne steget mere end 150%.', starsAmount: 5 },
        { profileImg: 'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg', profileName: 'Karo', companyName: 'Komunikado', reviewDescription: 'Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder var konverteringerne steget mere end 150%.', starsAmount: 5 },
        { profileImg: 'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg', profileName: 'Karo', companyName: 'Komunikado', reviewDescription: 'Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder var konverteringerne steget mere end 150%.', starsAmount: 1 },
        { profileImg: 'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg', profileName: 'Person', companyName: 'Freelancer', reviewDescription: 'Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder var konverteringerne steget mere end 150%.', starsAmount: 3 },
        { profileImg: 'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg', profileName: 'Karo', companyName: 'Komunikado', reviewDescription: 'Det nye website blev lanceret i februar 2018 og allerede inden for de første 6 måneder var konverteringerne steget mere end 150%.', starsAmount: 5 }
      ]
    }
  }
}
</script>
  
<style lang="scss">

body {
  margin: 0;
  overflow-y: hidden
}

#app {
  max-width: 1440px;
  margin: 80px auto;
  font-family: 'Roboto', sans-serif;

  @media only screen and (max-width: 768px) {
    margin: 40px 0
  }
}
</style>
  