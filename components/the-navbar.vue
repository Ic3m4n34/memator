<template>
  <div class="the-navbar">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <NavigationItem
              v-for="(navItem, _id) in navigationLinks"
              :key="_id"
              :navigation-item="navItem"
            />
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              Social Media Icons
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default {
  name: 'TheNavbar',
  components: {
    NavigationItem: () => import('@/components/navigation-item'),
  },
  asyncComputed: {
    async navigationLinks() {
      const { data: { menulinks } } = await strapi.request('post', '/graphql', {
        data: {
          query: `query {
            menulinks {
              _id
              label
              url
              title
              childmenulinks {
                _id
                label
                url
                title
              }
            }
          }
          `,
        },
      });
      return menulinks;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
