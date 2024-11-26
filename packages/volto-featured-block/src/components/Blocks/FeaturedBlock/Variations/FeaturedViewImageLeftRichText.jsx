import { ConditionalLink } from '@plone/volto/components';
import { Button, GridRow, GridColumn, Grid } from 'semantic-ui-react';
import config from '@plone/volto/registry';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';
export const FeaturedViewImageLeftRichText = (props) => {
  const { data, isEditMode } = props;
  let Image = config.getComponent('Image').component;
  return (
    <Grid divided="vertically">
      <GridRow>
        <GridColumn width="6">
          {data?.url?.length > 0 && (
            <Image
              item={{
                '@id': data.url,
                image_field: data.image_field,
                image_scales: data.image_scales,
              }}
              alt=""
              sizes="50vw"
              responsive={true}
            />
          )}
        </GridColumn>
        <GridColumn width="6">
          <div className="featured-block-item-content">
            {data?.title && (
              <div className="featured-block-item-content-title">
                <h2>
                  <ConditionalLink to={data?.href?.[0]?.['@id']}>
                    {data?.title}
                  </ConditionalLink>
                </h2>
              </div>
            )}
            {data?.description && (
              <div className="featured-block-item-content-description">
                {data?.description && <h3>{data.description} </h3>}
              </div>
            )}
            <div className="featured-block-item-content-value">
              {isEditMode ? (
                <DetachedTextBlockEditor {...props} />
              ) : (
                <TextBlockView {...props} />
              )}
            </div>

            {data?.hrefText && (
              <div className="featured-block-item-content-link">
                <Button
                  as="a"
                  size="large"
                  href={'' + data?.href?.[0]?.['@id']}
                  primary
                >
                  {data.hrefText}
                </Button>
              </div>
            )}
          </div>
        </GridColumn>
      </GridRow>
    </Grid>
  );
};
