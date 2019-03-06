'use strict';

/**
 * Childmenulink.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

module.exports = {

  /**
   * Promise to fetch all childmenulinks.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('childmenulink', params);
    // Select field to populate.
    const populate = Childmenulink.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Childmenulink
      .find()
      .where(filters.where)
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(filters.populate || populate);
  },

  /**
   * Promise to fetch a/an childmenulink.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Childmenulink.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Childmenulink
      .findOne(_.pick(params, _.keys(Childmenulink.schema.paths)))
      .populate(populate);
  },

  /**
   * Promise to count childmenulinks.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('childmenulink', params);

    return Childmenulink
      .countDocuments()
      .where(filters.where);
  },

  /**
   * Promise to add a/an childmenulink.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Childmenulink.associations.map(ast => ast.alias));
    const data = _.omit(values, Childmenulink.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Childmenulink.create(data);

    // Create relational data and return the entry.
    return Childmenulink.updateRelations({ _id: entry.id, values: relations });
  },

  /**
   * Promise to edit a/an childmenulink.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Childmenulink.associations.map(a => a.alias));
    const data = _.omit(values, Childmenulink.associations.map(a => a.alias));

    // Update entry with no-relational data.
    const entry = await Childmenulink.updateOne(params, data, { multi: true });

    // Update relational data and return the entry.
    return Childmenulink.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an childmenulink.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Select field to populate.
    const populate = Childmenulink.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await Childmenulink
      .findOneAndRemove(params, {})
      .populate(populate);

    if (!data) {
      return data;
    }

    await Promise.all(
      Childmenulink.associations.map(async association => {
        if (!association.via || !data._id) {
          return true;
        }

        const search = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: data._id } : { [association.via]: { $in: [data._id] } };
        const update = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: null } : { $pull: { [association.via]: data._id } };

        // Retrieve model.
        const model = association.plugin ?
          strapi.plugins[association.plugin].models[association.model || association.collection] :
          strapi.models[association.model || association.collection];

        return model.update(search, update, { multi: true });
      })
    );

    return data;
  },

  /**
   * Promise to search a/an childmenulink.
   *
   * @return {Promise}
   */

  search: async (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('childmenulink', params);
    // Select field to populate.
    const populate = Childmenulink.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    const $or = Object.keys(Childmenulink.attributes).reduce((acc, curr) => {
      switch (Childmenulink.attributes[curr].type) {
        case 'integer':
        case 'float':
        case 'decimal':
          if (!_.isNaN(_.toNumber(params._q))) {
            return acc.concat({ [curr]: params._q });
          }

          return acc;
        case 'string':
        case 'text':
        case 'password':
          return acc.concat({ [curr]: { $regex: params._q, $options: 'i' } });
        case 'boolean':
          if (params._q === 'true' || params._q === 'false') {
            return acc.concat({ [curr]: params._q === 'true' });
          }

          return acc;
        default:
          return acc;
      }
    }, []);

    return Childmenulink
      .find({ $or })
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  }
};
