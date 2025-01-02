import { FeaturedBaseView } from './FeaturedBaseView';
import { LEFT } from '../constants';
export const FeaturedViewImageLeftRichText = (props) => {
  return <FeaturedBaseView {...props} imagePosition={LEFT} richText={true} />
};
