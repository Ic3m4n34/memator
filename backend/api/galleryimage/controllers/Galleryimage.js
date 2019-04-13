'use strict';

/**
 * Galleryimage.js controller
 *
 * @description: A set of functions called "actions" for managing `Galleryimage`.
 */

module.exports = {

  /**
   * Retrieve galleryimage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.galleryimage.search(ctx.query);
    } else {
      return strapi.services.galleryimage.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a galleryimage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.galleryimage.fetch(ctx.params);
  },

  /**
   * Count galleryimage records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.galleryimage.count(ctx.query);
  },

  /**
   * Create a/an galleryimage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.galleryimage.add(ctx.request.body);
  },

  /**
   * Update a/an galleryimage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.galleryimage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an galleryimage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.galleryimage.remove(ctx.params);
  }
};
