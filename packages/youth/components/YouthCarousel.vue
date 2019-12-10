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
    this.mount = true;
  },
  computed: {
    carousel() {
      return this.carousels[this.current - 1];
    },
    isMobile() {
      if (!this.mount) return false;
      return this.windowWidth <= 500;
    },
  },
  data() {
    return {
      mount: false,
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
  <div class="carousel__wrap">
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
          <div
            v-if="!isMobile"
            class="carousel__welcome"
          >
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
    <div
      v-if="isMobile"
      class="carousel__mobile-welcome"
    >
      <h1 class="carousel__mobile-welcome-title">Welcome</h1>
      <p class="carousel__mobile-welcome-rest">To Connection</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/mixins";

@import "../scss/variables";

.carousel {
  position: relative;
  height: 35rem;

  @media (max-height: 1000px) {
    height: 25rem;
  }

  @include until($mobile) {
    height: 20rem;
  }

  &__image {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0 50%;
    z-index: -1;

    @include until(650px) {
      object-position: unset;
    }
  }

  &__image-cover {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, #000000 100%);
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

    @include until($mobile) {
      width: 85%;
    }
  }

  &__welcome {
    padding-bottom: 2rem;
  }

  &__welcome-title {
    font-size: 5rem;
    font-family: "Futura";

    @include until(780px) {
      font-size: 4rem;
    }

    @include until(650px) {
      font-size: 2.5rem;
    }
  }

  &__welcome-rest {
    font-size: 1.7rem;
    font-weight: 400;
    line-height: 1.47;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;

    @include until($mobile) {
      margin-left: auto;
      padding-bottom: 1.5rem;
    }
  }

  &__meta-title {
    text-align: right;
    line-height: 1.43;
    font-size: .8rem;

    @include until($mobile) {
      font-size: 1.1rem;
    }
  }

  &__meta-date {
    text-align: right;
    line-height: 1.5;
    font-size: .65rem;

    @include until($mobile) {
      font-size: .8rem;
    }
  }

  &__controller {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;

    @include until($mobile) {
      display: none;
    }
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

  &__mobile-welcome {
    padding: 1.4rem 1.2rem;
  }

  &__mobile-welcome-title {
    font-family: "Futura";
    font-size: 2.5rem;
  }

  &__mobile-welcome-rest {
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.5;
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
