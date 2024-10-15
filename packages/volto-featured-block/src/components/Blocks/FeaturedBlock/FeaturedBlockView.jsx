import React from 'react';
import config from '@plone/volto/registry';

const FeaturedBlockView = (props) => {
  const { data } = props;
  const variationsConfig = config.blocks.blocksConfig['csFeatured'].variations;
  let BodyTemplate = '';
  for (let variation in variationsConfig) {
    if (variationsConfig[variation].id === data?.variation) {
      BodyTemplate = variationsConfig[variation].template;
    }
  }

  return <BodyTemplate data={data} isEditMode={false} {...props} />;
};
export default FeaturedBlockView;
