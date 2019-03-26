import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default {
  name: 'PageMixin',
  data() {
    return {
      title: null,
      metaDescription: null,
      stageImage: null,
      stageImageAltText: null,
    };
  },
  asyncComputed: {
    /* async pageContent() {
      const { data } = await strapi.request('post', '/graphql', {
        data: {
          query: `
            query {
              page(id: "5c914997620d1f860014dd7f") {
                Title,
                MetaDescription,
                StageImage {
                  name,
                  url,
                },
                StageImageAltText,
              }
            }
          `,
        },
      });
      return data.page;
    }, */
  },
  methods: {
    async fetchPageData() {
      const { data } = await strapi.request('post', '/graphql', {
        data: {
          query: `
            query {
              page(id: "5c914997620d1f860014dd7f") {
                Title,
                MetaDescription,
                StageImage {
                  name,
                  url,
                },
                StageImageAltText,
              }
            }
          `,
        },
      });
      console.log(data);
      this.title = data.page.Title;
      this.metaDescription = data.page.MetaDescription;
      this.stageImage = data.page.StageImage.url;
      this.stageImageAltText = data.page.StageImageAltText;
    },
  },
  mounted() {
    this.fetchPageData();
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.metaDescription },
      ],
    };
  },
};
