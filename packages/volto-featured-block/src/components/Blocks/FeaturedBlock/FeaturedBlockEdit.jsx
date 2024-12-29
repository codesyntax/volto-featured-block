import React from 'react';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';
import messages from './messages';
import { useSelector } from 'react-redux';
import { withBlockExtensions } from '@plone/volto/helpers';

const FeaturedBlockEdit = (props) => {
  const {
    block,
    blocksConfig,
    data,
    onChangeBlock,
    selected,
    intl,
    variation,
  } = props;

  const BodyTemplate = variation.template;
  // Use the dataAdapter defined in the block configuration
  // this way we can adapt the information coming from the imagewidget
  // on the first moment when we select or upload the image using this widget
  // this data adapter makes the properties `image_field`, `image_scales` and `url`
  // available right away in the block `data`, and this way we can easily interact
  // with the variations of the block to see the image rendered correctly
  const dataAdapter = blocksConfig[data['@type']].dataAdapter;
  const schema = blocksConfig[data['@type']].blockSchema;
  const request = useSelector((state) => state.content.subrequests[block]);
  const content = request?.data;

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
          schema={schema({ ...props })}
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

// the withBlockExtensions call will make variations available out of the box
export default withBlockExtensions(FeaturedBlockEdit);
