import messages from './messages';
const FeaturedSchema = (config, intl) => {
  const variationsConfig = config.blocks.blocksConfig['csFeatured'].variations;
  const variations = Object.keys(variationsConfig).map((variation) => [
    variationsConfig[variation].id,
    variationsConfig[variation].title,
  ]);

  return {
    title: 'Featured',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'variation',
          'title',
          'description',
          'url',
          'href',
          'hrefText',
        ],
      },
    ],
    properties: {
      variation: {
        title: intl.formatMessage(messages.variation),
        type: 'choice',
        choices: [...variations],
      },
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
