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
      this.title = data.page.Title;
      this.metaDescription = data.page.MetaDescription;
      this.stageImage = `${apiUrl}${data.page.StageImage.url}`;
      console.log('#', this.stageImage);
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
