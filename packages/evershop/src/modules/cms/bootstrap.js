const config = require('config');
const registerDefaultPageCollectionFilters = require('./services/registerDefaultPageCollectionFilters');
const {
  defaultPaginationFilters
} = require('../../lib/util/defaultPaginationFilters');
const { addProcessor } = require('../../lib/util/registry');

module.exports = () => {
  const themeConfig = {
    logo: {
      alt: undefined,
      src: undefined,
      width: undefined,
      height: undefined
    },
    headTags: {
      links: [],
      metas: [],
      scripts: [],
      bases: []
    },
    copyRight: `VKU graduation project`
  };
  config.util.setModuleDefaults('themeConfig', themeConfig);
  config.util.setModuleDefaults('system', {
    file_storage: 'local'
  });

  // Reigtering the default filters for attribute collection
  addProcessor(
    'cmsPageCollectionFilters',
    registerDefaultPageCollectionFilters,
    1
  );
  addProcessor(
    'cmsPageCollectionFilters',
    (filters) => [...filters, ...defaultPaginationFilters],
    2
  );
};
