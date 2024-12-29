import ConditionalLink from '@plone/volto/components/manage/ConditionalLink/ConditionalLink';
import config from '@plone/volto/registry';
import { Button, Grid, GridColumn, GridRow } from 'semantic-ui-react';
export const FeaturedViewImageRight = (props) => {
  const { data } = props;
  let Image = config.getComponent('Image').component;
  return (
    <Grid divided="vertically">
      <GridRow>
        <GridColumn width="6">
          <div className="featured-block-item-content">
            <div className="featured-block-item-content-title">
              {data?.title && (
                <h2>
                  <ConditionalLink to={data?.href?.[0]?.['@id']}>
                    {data?.title}
                  </ConditionalLink>
                </h2>
              )}
            </div>
            <div className="featured-block-item-content-description">
              {data?.description && <h3>{data.description} </h3>}
            </div>
            <div className="featured-block-item-content-link">
              {data?.hrefText && (
                <Button
                  as="a"
                  size="large"
                  href={'' + data?.href?.[0]?.['@id']}
                  primary
                >
                  {data.hrefText}
                </Button>
              )}
            </div>
          </div>
        </GridColumn>
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
      </GridRow>
    </Grid>
  );
};
