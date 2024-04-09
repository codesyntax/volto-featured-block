import { Component } from '@plone/volto/components'
import { ConditionalLink } from '@plone/volto/components';
import { Button, GridRow, GridColumn, Grid } from 'semantic-ui-react';


export const FeaturedViewImageLeft = (props) => {

    const { data } = props;
    return (
        <Grid divided="vertically">
            <GridRow>
                <GridColumn width="6">
                    {data?.image?.length > 0 &&
                        <Component componentName="Image"
                            item={data?.image[0]}
                            alt=""
                        sizes="50vw"
                        responsive
                        />
                    }
                </GridColumn>
                <GridColumn width="6">
                    <div className="banner-top-main-block-title">
                    {data?.title && (
                        <h2>
                            <ConditionalLink
                                to={data?.link?.[0]?.['@id']}
                            >
                                {data?.title}
                            </ConditionalLink>
                        </h2>
                    )}
                    {data?.description && <h3>{data.description} </h3>}
                    {data?.linkText && (
                        <Button
                            as="a"
                            size="large"
                            href={'' + data?.link?.[0]?.['@id']}
                            primary
                        >
                            {data.linkText}
                        </Button>
                    )}
                </div>
                </GridColumn>
            </GridRow>
        </Grid>
        
        
        )
}