import React from 'react';
import FeaturedSchema from './FeaturedSchema';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';

import config from '@plone/volto/registry';
const FeaturedBlockEdit = (props) => {
  const { block, data, onChangeBlock, selected, intl } = props;
  const variationsConfig = config.blocks.blocksConfig['csFeatured'].variations;
  let BodyTemplate = '';
  let variationId = '';
  if (!!data?.variation) {
    for (let variation in variationsConfig) {
      if (variationsConfig[variation].id === data.variation) {
        variationId = data.variation;
        BodyTemplate = variationsConfig[variation].template;
      }
    }
  } else {
    for (let variation in variationsConfig) {
      if (variationsConfig[variation].isDefault === true) {
        variationId = variationsConfig[variation].id;
        BodyTemplate = variationsConfig[variation].template;
      }
    }
  }
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
