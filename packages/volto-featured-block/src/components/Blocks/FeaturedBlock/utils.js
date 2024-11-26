export const imageSchemaEnhancer = ({ schema, formData, intl }) => {
  schema.properties.url = {
    widget: 'image',
    title: 'Image',
    mode: 'image',
    multiple: false,
    allowExternals: true,
  };
  schema.fieldsets[0].fields.push('url');

  return schema;
};
