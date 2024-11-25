export const imageSchemaEnhancer = ({ schema, formData, intl }) => {
  schema.properties.image = {
    widget: 'image',
    title: 'Image',
    mode: 'image',
    multiple: false,
    allowExternals: true,
  };
  schema.fieldsets[0].fields.push('image');

  return schema;
};
