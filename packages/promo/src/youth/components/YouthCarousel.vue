<script>
export default {
  name: 'YouthCarousel',
  props: {
    duration: {
      type: Number,
      default: 3300,
    },
    carousels: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    this.refreshCarousel();
  },
  computed: {
    carousel() {
      return this.carousels[this.current - 1];
    },
  },
  data() {
    return {
      current: 1,
      intervalId: 0,
    };
  },
  methods: {
    refreshCarousel() {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        if (this.current < this.carousels.length) this.current += 1;
        else this.current = 1;
      }, this.duration);
    },
    moveTo(idx) {
      this.current = idx;
      this.refreshCarousel();
    },
  },
};
</script>

<template>
  <div class="carousel">
    <transition name="fade" :duration="duration" appear>
      <img
        :key="current"
        class="carousel__image"
        :src="require(`../../assets/carousel/${current}.png`)"
      >
    </transition>
    <div class="carousel__image-cover">
      <div class="carousel__content">
        <div class="carousel__welcome">
          <h1 class="carousel__welcome-title">Welcome</h1>
          <p class="carousel__welcome-rest">To Connection</p>
        </div>
        <div class="carousel__meta">
          <span class="carousel__meta-title">
            {{ carousel.title }}
          </span>
          <span class="carousel__meta-date">
            {{ carousel.date }}
          </span>
          <div class="carousel__controller">
            <figure
              v-for="idx in carousels.length"
              :key="idx"
              class="carousel__circle"
              :class="{ current: (idx === current) }"
              @click="moveTo(idx)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  position: relative;
  height: 32rem;

  &__image {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &__image-cover {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 65%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
  }

  &__welcome {
    padding-bottom: 2rem;
  }

  &__welcome-title {
    font-size: 4rem;
    font-family: "Futura";
  }

  &__welcome-rest {
    font-size: 1.5rem;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    line-height: 1.47;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    font-family: "Noto Sans KR", sans-serif;
  }

  &__meta-title {
    text-align: right;
    line-height: 1.43;
    font-size: .8rem;
  }

  &__meta-date {
    text-align: right;
    line-height: 1.5;
    font-size: .65rem;
  }

  &__controller {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  &__circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    margin-left: .6rem;
    cursor: pointer;

    &.current {
      width: 20px;
      height: 10px;
      border-radius: 4px;
      background-color: #298fe3;
    }
  }
}

.fade-enter-active {
  transition: all .3s ease;
}

.fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
