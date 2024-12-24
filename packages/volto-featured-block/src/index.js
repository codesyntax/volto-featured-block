import homeBand from '@plone/volto/icons/image-wide.svg';
import FeaturedBlockView from './components/Blocks/FeaturedBlock/FeaturedBlockView';
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
      id: 'csFeatured', // The name (id) of the block
      title: 'Featured', // The display name of the block
      icon: homeBand, // The icon used in the block chooser
      group: 'common', // The group (blocks can be grouped, displayed in the chooser)
      view: FeaturedBlockView, // The view mode component
      edit: FeaturedBlockEdit, // The edit mode component. No need to define it, it will use the default one
      restricted: false, // If the block is restricted, it won't show in the chooser
      mostUsed: true, // A meta group `most used`, appearing at the top of the chooser
      blockHasOwnFocusManagement: false, // Set this to true if the block manages its own focus
      sidebarTab: 1, // The sidebar tab you want to be selected when selecting the block
      security: {
        addPermission: [], // Future proof (not implemented yet) add user permission role(s)
        view: [], // Future proof (not implemented yet) view user role(s)
      },
      dataAdapter: FeaturedBlockDataAdapter,
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
