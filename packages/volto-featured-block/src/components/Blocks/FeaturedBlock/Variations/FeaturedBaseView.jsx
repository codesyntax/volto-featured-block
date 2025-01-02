import { ConditionalLink } from '@plone/volto/components';
import { Button, GridRow, GridColumn, Grid } from 'semantic-ui-react';
import config from '@plone/volto/registry';
import { LEFT, RIGHT } from '../constants';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';

export const FeaturedBaseView = (props) => {
  const { data, isEditMode, imagePosition, richText } = props;
  let Image = config.getComponent('Image').component;
  return (
    <Grid divided="vertically">
      <GridRow>
        {imagePosition === LEFT && (
          <GridColumn width="6">
            {data?.url?.length > 0 ? (
              <Image
                item={{
                  '@id': data.url,
                  image_field: data.image_field,
                  image_scales: data.image_scales,
                }}
                alt={data.title}
                sizes="50vw"
                responsive={true}
              />
            ) : isEditMode ? (
              <img
                src={
                  config.getComponent({
                    name: 'DefaultImage',
                    dependencies: ['listing', 'summary'],
                  }).component || DefaultImageSVG
                }
                alt={''}
                width="400"
                height="300"
              />
            ) : (
              ''
            )}
          </GridColumn>
        )}
        <GridColumn width="6">
          <div className="featured-block-item-content">
            <div className="featured-block-item-content-title">
              {data?.title && (
                <h2>
                  <ConditionalLink
                    condition={!isEditMode}
                    to={data?.href?.[0]?.['@id']}
                  >
                    {data?.title}
                  </ConditionalLink>
                </h2>
              )}
            </div>
            <div className="featured-block-item-content-description">
              {data?.description && <h3>{data.description} </h3>}
            </div>
            {richText && (
              <div className="featured-block-item-content-value">
                {isEditMode ? (
                  <DetachedTextBlockEditor {...props} />
                ) : (
                  <TextBlockView {...props} />
                )}
              </div>
            )}
            <div className="featured-block-item-content-link">
              {data?.hrefText && (
                <Button
                  as="a"
                  size="large"
                  href={!isEditMode ? data?.href?.[0]?.['@id'] : null}
                  primary
                >
                  {data.hrefText}
                </Button>
              )}
            </div>
          </div>
        </GridColumn>
        {imagePosition === RIGHT && (
          <GridColumn width="6">
            {data?.url?.length > 0 ? (
              <Image
                item={{
                  '@id': data.url,
                  image_field: data.image_field,
                  image_scales: data.image_scales,
                }}
                alt={data.title}
                sizes="50vw"
                responsive={true}
              />
            ) : isEditMode ? (
              <img
                src={
                  config.getComponent({
                    name: 'DefaultImage',
                    dependencies: ['listing', 'summary'],
                  }).component || DefaultImageSVG
                }
                alt={''}
                width="400"
                height="300"
              />
            ) : (
              ''
            )}
          </GridColumn>
        )}
      </GridRow>
    </Grid>
  );
};
