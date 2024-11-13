import React from 'react';
import config from '@plone/volto/registry';
import cx from 'classnames';
import { withBlockExtensions } from '@plone/volto/helpers';

const FeaturedBlockView = (props) => {
  const { data, className = '' } = props;
  const variationsConfig = config.blocks.blocksConfig['csFeatured'].variations;
  let BodyTemplate = '';
  for (let variation in variationsConfig) {
    if (variationsConfig[variation].id === data?.variation) {
      BodyTemplate = variationsConfig[variation].template;
    }
  }

  return (
    <div className={cx('block featured-block', className)}>
      <BodyTemplate data={data} isEditMode={false} {...props} />
    </div>
  );
};
export default withBlockExtensions(FeaturedBlockView);
