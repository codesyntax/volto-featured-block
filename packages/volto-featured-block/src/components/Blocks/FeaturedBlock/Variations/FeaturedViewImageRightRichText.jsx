import { FeaturedBaseView } from './FeaturedBaseView';
import {  RIGHT } from '../constants';
export const FeaturedViewImageRightRichText = (props) => {
  return <FeaturedBaseView {...props} imagePosition={RIGHT} richText={true} />;
};
