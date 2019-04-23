<template>
  <div class="footer">
    <footer>
      <div class="container">
        <div class="footer-container">
          <div class="footer__branding">
            <nuxt-link
              to="/"
              title="Startseite"
            >
              <img
                src="/images/tierphysiotherapie-meyer-logo.png"
                alt="Tierphysiotherapie Meyer Logo"
                class="footer__branding-logo"
              />
            </nuxt-link>
            <p class="text">
              Helfen Sie Ihrem Tier dabei,<br /> das Leben zu führen,<br /> das es verdient!
            </p>
          </div>
          <div class="footer__links">
            <h4 class="footer__headline h4">
              Links
            </h4>
            <div class="footer__links-container">
              <ul>
                <li
                  v-for="link in links"
                  :key="link._id"
                >
                  <nuxt-link
                    :to="link.url"
                    class="footer__link"
                  >
                    <img
                      src="/images/icons/link-arrow.png"
                      :alt="`Footer Link - ${link.label}`"
                    />
                    {{ link.label }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__social">
            <h4 class="footer__headline h4">
              Social Media
            </h4>
            <div class="footer__social-icons">
              <ul>
                <li
                  v-for="link in socialMediaLinks"
                  :key="link.label"
                >
                  <a
                    :href="link.url"
                    :title="`Zu ${link.label}`"
                    target="_blank"
                  >
                    <img
                      :src="link.image"
                      :alt="`${link.label} Icon`"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer__copyright">
              Copyright © 2019 Tierphysiotherapie Meyer
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

const SOCIAL_MEDIA_LINKS = [
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/tierphysiotherapie.pmeyer',
    image: '/images/icons/facebook.png',
  },
  {
    label: 'Instagram',
    url: 'instagram.com',
    image: '/images/icons/instagram.png',
  },
  {
    label: 'YouTube',
    url: 'youtube.com',
    image: '/images/icons/youtube.png',
  },
];

export default {
  name: 'Footer',
  data() {
    return {
      links: () => [],
      socialMediaLinks: SOCIAL_MEDIA_LINKS,
    };
  },
  methods: {
    async fetchLinks() {
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
      const filteredLinks = menulinks.filter(menulink => menulink.url !== '');
      this.links = filteredLinks;
    },
  },
  mounted() {
    this.fetchLinks();
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/base';

.footer {
  background-color: #373737;
  color: #ffffff;

  &__headline {
    @include font-size(22px, 24px);
    font-weight: 500;
    margin-bottom: 24px;
  }

  &-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    @include mq($mq-medium) {
      flex-direction: row;
      justify-content: space-between;
    }

    > div {
      width: 30%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      @include mq($mq-medium) {
        justify-content: flex-start;
        text-align: left;
      }
    }
  }

  &__branding {
    &-logo {
      max-width: 178px;
      margin-bottom: 24px;
    }
  }

  &__link {
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      margin-right: 12px;
      width: 18px;
    }
    &:hover {
      color: #ffffff;
      text-decoration: underline;
    }
  }

  &__links {
    &-container {
      li {
        margin-bottom: 6px;
      }
    }
  }

  &__social-icons {
    ul {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      width: 50%;
      margin-bottom: 24px;
    }

    li {
      img {
        margin-right: 12px;
        width: 36px;
      }
      a {
        color: #ffffff;
        display: flex;
        flex-direction: row;
        align-items: center;
        &:hover {
          color: #ffffff;
          text-decoration: underline;
        }
      }
    }
  }
}

</style>
