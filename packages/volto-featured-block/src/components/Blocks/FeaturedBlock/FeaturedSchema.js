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
        fields: ['variation', 'title', 'description', 'link', 'linkText'],
      },
    ],
    properties: {
      variation: {
        title: intl.formatMessage(messages.variation),
        type: 'array',
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
      link: {
        title: intl.formatMessage(messages.featuredLinkUrl),
        description: intl.formatMessage(messages.featuredLinkUrlDescription),
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: ['Title', 'Description', '@type', '@id'],
        allowExternals: true,
      },
      linkText: {
        title: intl.formatMessage(messages.featuredLinkText),
        type: 'string',
      },
    },
    required: [],
  };
};

export default FeaturedSchema;
