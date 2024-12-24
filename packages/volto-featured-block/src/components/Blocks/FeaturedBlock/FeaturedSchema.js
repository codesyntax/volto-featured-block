import messages from './messages';

import { withVariationSchemaEnhancer } from '@plone/volto/helpers/Extensions/withBlockSchemaEnhancer';

const FeaturedSchema = (config, intl) => {
  return {
    title: 'Featured',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'description', 'url', 'href', 'hrefText'],
      },
    ],
    properties: {
      title: {
        title: intl.formatMessage(messages.featuredTitle),
        type: 'string',
      },
      description: {
        title: intl.formatMessage(messages.featuredDescription),
        type: 'string',
      },
      href: {
        title: intl.formatMessage(messages.featuredLinkUrl),
        description: intl.formatMessage(messages.featuredLinkUrlDescription),
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: ['Title', 'Description', '@type', '@id'],
        allowExternals: true,
      },
      hrefText: {
        title: intl.formatMessage(messages.featuredLinkText),
        type: 'string',
      },
      url: {
        widget: 'image',
        title: 'Image',
        mode: 'image',
        multiple: false,
        allowExternals: true,
      },
    },
    required: [],
  };
};

export default FeaturedSchema;
