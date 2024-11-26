import React from 'react';
import config from '@plone/volto/registry';
import cx from 'classnames';
import { withBlockExtensions } from '@plone/volto/helpers';
import { getSelectedVariation } from './utils';

const FeaturedBlockView = (props) => {
  const { data, className = '', style } = props;

  const variations = config.blocks.blocksConfig['csFeatured'].variations;

  const { variationId, BodyTemplate } = getSelectedVariation(variations, data);

  return (
    <div
      className={cx(
        `block featured-block featured-block-${variationId}`,
        className,
      )}
      style={style}
    >
      <BodyTemplate data={data} isEditMode={false} {...props} />
    </div>
  );
};
export default withBlockExtensions(FeaturedBlockView);
