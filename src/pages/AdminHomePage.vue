<template>
  <v-row class="mx-0" style="height: 100%">
    <v-col class="admin-area col-12 pa-0">
      <router-link :to="{ name: 'admin-userlist' }">
        <a class="admin-href">
          <transition
            @before-enter="userFadeInUp"
            @enter="enter"
            @after-enter="algorithmCall"
          >
            <div v-show="userShow" class="admin-text font-weight-bold" data-text="USER">
              USER
            </div>
          </transition>
          <div :style="{ 'background-image' :theaterImage }" class="admin-image-user" />
        </a>
      </router-link>
    </v-col>
    <v-col class="admin-area col-12 pa-0">
      <router-link :to="{ name: 'admin-algorithm-select' }">
        <a class="admin-href">
          <transition
            @before-enter="algorithmFadeInUp"
          >
            <div v-show="algorithmShow" class="admin-text font-weight-bold" data-text="ALGORITHM">
              ALGORITHM
            </div>
          </transition>
          <div :style="{ 'background-image' :clusteringImage }" class="admin-image" />
        </a>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      userShow: false,
      algorithmShow: false,
    }
  },
  computed: {
    theaterImage() {
      return `url('assets/background-images/Admin/theater.jpeg')`
    },
    moviesImage() {
      return `url('assets/background-images/Admin/movies.jpg')`
    },
    clusteringImage() {
      return `url('assets/background-images/Admin/algorithm.jpg')`
    }
  },
  mounted() {
    var self = this
    setTimeout(function() {
      self.userShow = true;
    }, 500)
  },
  methods: {
    enter(el, done) {
      setTimeout(function() {
        done()
      }, 500)
    },
    userFadeInUp(el) {
      el.classList.add("animated");
      el.classList.add("fadeInUp");
    },
    algorithmCall() {
      this.algorithmShow = true;
    },
    algorithmFadeInUp(el) {
      el.classList.add("animated");
      el.classList.add("fadeInUp");
    },
  }  
}
</script>

<style scoped>
.admin-area {
  width: 100%;
  cursor: pointer;
  position: relative;
  text-align: center;
  white-space: normal;
}

.admin-href {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.admin-href:hover .admin-image {
  transform: scale(1.1);
}

.admin-href:hover .admin-text:before {
  width: 0%;
}

.admin-text {
  z-index: 1;
  position: absolute;
  will-change: opacity;
  font-size: 50px;
  font-weight: 500;
  transform: translate(-50%, -50%);
  backface-visibility: hidden;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-fill-color: rgba(0, 0, 0, 0); 
  -webkit-text-stroke-color: white;
}

.admin-text:before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  color: red;
  transition: 0.5s;
  -webkit-text-fill-color: white; 
}

.admin-image {
  background-size: cover;
  background-position: 70% 50%;
  opacity: 0.3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.8s ease-in-out;
}

.admin-image-user {
  background-size: cover;
  background-position: 70% 30%;
  opacity: 0.3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.8s ease-in-out;
}

.admin-href:hover .admin-image-user {
  transform: scale(1.1);
}

.admin-href:hover .admin-text:before {
  width: 0%;
}
</style>
