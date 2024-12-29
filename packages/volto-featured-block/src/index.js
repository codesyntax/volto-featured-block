import homeBand from '@plone/volto/icons/image-wide.svg';
import FeaturedBlockView from './components/Blocks/FeaturedBlock/FeaturedBlockView';
import FeaturedSchema from './components/Blocks/FeaturedBlock/FeaturedSchema';
import FeaturedBlockEdit from './components/Blocks/FeaturedBlock/FeaturedBlockEdit';
import { CarouselFeaturedView } from './components/Blocks/FeaturedBlock/Variations/CarouselFeaturedView';
import { FeaturedViewImageLeft } from './components/Blocks/FeaturedBlock/Variations/FeaturedViewImageLeft';
import { FeaturedViewImageLeftRichText } from './components/Blocks/FeaturedBlock/Variations/FeaturedViewImageLeftRichText';
import { FeaturedViewImageRight } from './components/Blocks/FeaturedBlock/Variations/FeaturedViewImageRight';
import { FeaturedViewImageRightRichText } from './components/Blocks/FeaturedBlock/Variations/FeaturedViewImageRightRichText';

import { FeaturedBlockDataAdapter } from './components/Blocks/FeaturedBlock/FeaturedAdapter';

const applyConfig = (config) => {
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
    csFeatured: {
      id: 'csFeatured',
      title: 'Featured',
      icon: homeBand,
      group: 'common',
      view: FeaturedBlockView,
      edit: FeaturedBlockEdit,
      blockSchema: FeaturedSchema, // We define the schema here and the Edit component will use this
      restricted: false,
      mostUsed: true,
      blockHasOwnFocusManagement: false,
      sidebarTab: 1,
      security: {
        addPermission: [],
        view: [],
      },
      dataAdapter: FeaturedBlockDataAdapter, // Used by the Edit component. See there for more information
      variations: [
        {
          id: 'carousel',
          isDefault: false,
          title: 'Banner',
          template: CarouselFeaturedView,
        },
        {
          id: 'left',
          isDefault: false,
          title: 'Image Left',
          template: FeaturedViewImageLeft,
        },
        {
          id: 'left-richtext',
          isDefault: false,
          title: 'Image Left (with RichText)',
          template: FeaturedViewImageLeftRichText,
        },
        {
          id: 'right',
          isDefault: true,
          title: 'Image Right',
          template: FeaturedViewImageRight,
        },
        {
          id: 'right-richtext',
          isDefault: false,
          title: 'Image Right (with RichText)',
          template: FeaturedViewImageRightRichText,
        },
      ],
    },
  };
  return config;
};

export default applyConfig;
