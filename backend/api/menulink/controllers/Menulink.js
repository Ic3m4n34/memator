'use strict';

/**
 * Menulink.js controller
 *
 * @description: A set of functions called "actions" for managing `Menulink`.
 */

module.exports = {

  /**
   * Retrieve menulink records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.menulink.search(ctx.query);
    } else {
      return strapi.services.menulink.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a menulink record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.menulink.fetch(ctx.params);
  },

  /**
   * Count menulink records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.menulink.count(ctx.query);
  },

  /**
   * Create a/an menulink record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.menulink.add(ctx.request.body);
  },

  /**
   * Update a/an menulink record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.menulink.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an menulink record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.menulink.remove(ctx.params);
  }
};
