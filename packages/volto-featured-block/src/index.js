import homeBand from '@plone/volto/icons/image-wide.svg';
import BlockSettingsSchema from '@plone/volto/components/manage/Blocks/Block/Schema';
import {
  FeaturedBlockView,
  FeaturedBlockEdit,
} from './components/Blocks/FeaturedBlock';
import {
  CarouselFeaturedView,
  FeaturedViewImageLeft,
  FeaturedViewImageRight,
} from './components/Blocks/FeaturedBlock/Variations';
import { imageSchemaEnhancer } from './components/Blocks/FeaturedBlock/utils';
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
      edit: FeaturedBlockEdit, // The edit mode component
      schema: BlockSettingsSchema,
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
          isDefault: true,
          title: 'Banner',
          template: CarouselFeaturedView,
        },
        {
          id: 'left',
          isDefault: true,
          title: 'Image Left',
          template: FeaturedViewImageLeft,
        },
        {
          id: 'right',
          isDefault: true,
          title: 'Image Right',
          template: FeaturedViewImageRight,
        },
      ],
    },
  };
  return config;
};

export default applyConfig;
