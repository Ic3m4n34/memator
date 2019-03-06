'use strict';

/**
 * Childmenulink.js controller
 *
 * @description: A set of functions called "actions" for managing `Childmenulink`.
 */

module.exports = {

  /**
   * Retrieve childmenulink records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.childmenulink.search(ctx.query);
    } else {
      return strapi.services.childmenulink.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a childmenulink record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.childmenulink.fetch(ctx.params);
  },

  /**
   * Count childmenulink records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.childmenulink.count(ctx.query);
  },

  /**
   * Create a/an childmenulink record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.childmenulink.add(ctx.request.body);
  },

  /**
   * Update a/an childmenulink record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.childmenulink.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an childmenulink record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.childmenulink.remove(ctx.params);
  }
};
