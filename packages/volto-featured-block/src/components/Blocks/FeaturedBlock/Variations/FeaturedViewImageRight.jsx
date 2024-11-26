import { ConditionalLink } from '@plone/volto/components';
import { Button, GridRow, GridColumn, Grid } from 'semantic-ui-react';
import config from '@plone/volto/registry';
export const FeaturedViewImageRight = (props) => {
  const { data } = props;
  let Image = config.getComponent('Image').component;
  return (
    <Grid divided="vertically">
      <GridRow>
        <GridColumn width="6">
          <div className="featured-block-item-content">
            {data?.title && (
              <h2>
                <ConditionalLink to={data?.href?.[0]?.['@id']}>
                  {data?.title}
                </ConditionalLink>
              </h2>
            )}
            {data?.description && <h3>{data.description} </h3>}

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
