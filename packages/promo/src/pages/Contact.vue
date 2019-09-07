<script>
import DefaultContent from '../components/DefaultContent';
import DimigoMap from '../components/DimigoMap';

export default {
  components: {
    DefaultContent,
    DimigoMap,
  },
  data() {
    return {
      contacts: [
        { title: 'Address', icon: 'home-solid', value: '경기도 안산시 단원구 사세충열로 94' },
        { title: 'Tel.', icon: 'tty-solid', value: '0507-1304-9899' },
        { title: 'Fax', icon: 'fax-solid', value: '0504-486-9899' },
        { title: 'Email', icon: 'envelope-solid', value: 'admin@connectionyouth.org' },
      ],
    };
  },
};
</script>

<template>
  <default-content
    title="Contact Us"
    navi="Contact Us"
  >
    <div class="contact">
      <div class="contact__info">
        <h1 class="contact__title">
          How to contact to <span>Connection</span>
        </h1>
        <div class="contact__list">
          <div
            class="contact__item"
            v-for="(item, key) in contacts"
            :key="key"
          >
            <span class="contact__item-row">
              <img
                class="contact__item-icon"
                :src="require(`../assets/icons/${item.icon}.svg`)"
              />
              <span class="contact__item-title">
                {{ item.title }}
              </span>
            </span>
            <span class="contact__item-row">
              {{ item.value }}
            </span>
          </div>
        </div>
      </div>
      <div class="contact__map">
        <dimigo-map />
      </div>
    </div>
  </default-content>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;

  &__info {
    width: 46%;
  }

  &__map {
    width: 50%;
    height: 20rem;
  }

  &__title {
    padding: .4rem 1.2rem;
    margin-bottom: .5rem;
    border-top: .5px solid #298fe3;
    border-bottom: .5px solid #d9d9d9;
    font-size: 1.5rem;
    line-height: 1.48;
    color: #575757;
    font-weight: 400;

    span {
      color: #298fe3;
    }
  }

  &__list {
    margin-top: 1rem;
    margin-left: 1rem;
  }

  &__item {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  &__item-row {
    line-height: 1.43;
    color: #575757;
    font-weight: normal;
  }

  &__item-title {
    font-weight: 500;
  }

  &__item-icon {
    width: 1rem;
    margin-right: .2rem;
  }
}
</style>
