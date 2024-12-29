import React from 'react';
import cx from 'classnames';
import { withBlockExtensions } from '@plone/volto/helpers';

const FeaturedBlockView = (props) => {
  const { data, variation, className = '', style } = props;

  const BodyTemplate = variation.template;
  return (
    <div
      className={cx(
        `block featured-block featured-block-${variation.id}`,
        className,
      )}
      style={style}
    >
      <BodyTemplate data={data} isEditMode={false} {...props} />
    </div>
  );
};
// the withBlockExtensions call will make variations available out of the box
export default withBlockExtensions(FeaturedBlockView);
