'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  find(params, populate) {
    console.log(populate);
    return strapi.query('resume').find({ ...params, _limit: 1 }, [
      "languages",
      "technologies",
      "interests",
      "experiences",
      "experiences.details",
      "projects",
      "projects.details",
      "educations",
      "educations.details"
    ]);
  },
};
