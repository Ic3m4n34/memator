<template>
  <div class="the-navbar">
    <nav
      role="navigation"
      aria-label="main navigation"
      :class="{ 'navbar--active': navMobileActive }"
      class="navbar"
    >
      <div class="container">
        <div
          :class="{ 'navbar-menu--active': navMobileActive }"
          class="navbar-menu"
        >
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
import { mapState } from 'vuex';
import Strapi from 'strapi-sdk-javascript/build/main';

const cache = require('memory-cache');

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default {
  name: 'TheNavbar',
  components: {
    NavigationItem: () => import('@/components/navigation-item'),
  },
  computed: {
    ...mapState({
      navMobileActive: state => state.navigation.navMobileActive,
    }),
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
      // cache.put('menulinks', menulinks);
      // console.log('#', cache.get('menulinks'));
      return menulinks;
    },
  },
  mounted() {
    const links = cache.get('menulinks');
    console.log(links);
  },
};
</script>

<style lang="scss">
@import 'assets/scss/base.scss';

.the-navbar {
  border-top: 1px solid #dddddd;

  .navbar {
    align-items: center;
    @include mq(false, $navbar-breakpoint) {
      max-height: 0;
      min-height: 0;
      overflow: hidden;
      transition: max-height 1s;

      &--active {
        max-height: 60vh;
        transition: max-height 1s;
      }
    }

    &-item {
      font-weight: 500;
      border-top: 2px solid transparent;

      &.nuxt-link-exact-active,
      &:hover {
        color: $color-primary;
        border-top: 2px solid $color-primary;
      }
    }

    &-link {
      &:after {
        border-color: $color-primary;
      }

      &:hover {
        color: $color-primary;
      }
    }

    &-menu {
      @include mq(false, $navbar-breakpoint) {
        display: flex;
      }
      &--active {
        flex-direction: column;

        .navbar-item {
          border-bottom: 1px solid #dddddd;
          &:hover {
            border-top: none;
          }

          &.has-dropdown {
            border: none;
            .navbar-link {
              display: none;
            }
          }
        }

        .navbar-dropdown {
          padding: 0;
          .navbar-item {
            font-size: 16px;
            line-height: 24px;
            border-top: 1px solid transparent;
            border-bottom: 1px solid #dddddd;
          }
        }

        .nuxt-link-exact-active {
          border-top: none;
        }
      }
    }

    &-dropdown {
      .navbar-item {
        border-top: 0;
        &:hover {
          color: $color-primary;
        }
      }
    }
  }
}

</style>
