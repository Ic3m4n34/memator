'use strict';

/**
 * Blogarticle.js controller
 *
 * @description: A set of functions called "actions" for managing `Blogarticle`.
 */

module.exports = {

  /**
   * Retrieve blogarticle records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.blogarticle.search(ctx.query);
    } else {
      return strapi.services.blogarticle.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a blogarticle record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.blogarticle.fetch(ctx.params);
  },

  /**
   * Count blogarticle records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.blogarticle.count(ctx.query);
  },

  /**
   * Create a/an blogarticle record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.blogarticle.add(ctx.request.body);
  },

  /**
   * Update a/an blogarticle record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.blogarticle.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an blogarticle record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.blogarticle.remove(ctx.params);
  }
};
