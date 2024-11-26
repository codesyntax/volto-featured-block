import React from 'react';
import FeaturedSchema from './FeaturedSchema';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';
import config from '@plone/volto/registry';
import { getSelectedVariation } from './utils';
import messages from './messages';
import { useSelector } from 'react-redux';

const FeaturedBlockEdit = (props) => {
  const { block, blocksConfig, data, onChangeBlock, selected, intl } = props;
  const variations = config.blocks.blocksConfig['csFeatured'].variations;

  const { variationId, BodyTemplate } = getSelectedVariation(variations, data);
  const dataAdapter = blocksConfig[data['@type']].dataAdapter;
  const request = useSelector((state) => state.content.subrequests[block]);
  const content = request?.data;

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
          title={intl.formatMessage(messages.featuredBlock)}
          schema={FeaturedSchema(config, intl)}
          onChangeField={(id, value, item) => {
            dataAdapter({
              block,
              data,
              id,
              onChangeBlock,
              value,
              content,
              item,
            });
          }}
          onChangeBlock={onChangeBlock}
          formData={data}
          block={block}
        />
      </SidebarPortal>
    </>
  );
};

export default FeaturedBlockEdit;
