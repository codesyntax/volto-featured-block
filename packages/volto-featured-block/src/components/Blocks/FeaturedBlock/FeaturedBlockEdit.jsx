import React from 'react';
import FeaturedSchema from './FeaturedSchema';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';
import config from '@plone/volto/registry';
import { getSelectedVariation } from './utils';

const FeaturedBlockEdit = (props) => {
  const { block, data, onChangeBlock, selected, intl } = props;
  const variations = config.blocks.blocksConfig['csFeatured'].variations;

  const { variationId, BodyTemplate } = getSelectedVariation(variations, data);

  React.useEffect(() => {
    onChangeBlock(block, {
      ...data,
      variation: variationId,
    });
    /* eslint-disable-next-line */
  }, []);
  return (
    <>
      <BodyTemplate
        onChangeBlock={onChangeBlock}
        isEditMode={true}
        {...props}
      />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          title="Featured block"
          schema={FeaturedSchema(config, intl)}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
          block={block}
        />
      </SidebarPortal>
    </>
  );
};

export default FeaturedBlockEdit;
