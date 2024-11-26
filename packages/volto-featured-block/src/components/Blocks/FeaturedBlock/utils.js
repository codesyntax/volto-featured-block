export const getSelectedVariation = (variationsConfig, data) => {
  let selectedVariationInfos;

  const variations = variationsConfig.map((item) => {
    return {
      variationId: item.id,
      BodyTemplate: item.template,
      isDefault: item.isDefault,
    };
  });

  if (!!data?.variation) {
    selectedVariationInfos = variations.filter(
      (item) => item.variationId == data.variation,
    );
  } else {
    selectedVariationInfos = variations.filter((item) => item.isDefault);
  }

  const selectedVariationInfo =
    selectedVariationInfos.length > 0
      ? selectedVariationInfos[0]
      : {
          variationId: variationsConfig[0].id,
          BodyTemplate: variationsConfig[0].template,
        };

  return {
    variationId: selectedVariationInfo.variationId,
    BodyTemplate: selectedVariationInfo.BodyTemplate,
  };
};
