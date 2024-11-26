import React from 'react';
import FeaturedImageEditor from '../FeaturedImageEditor';
import { Button } from 'semantic-ui-react';
import { ConditionalLink } from '@plone/volto/components';

const CarouselFeaturedView = (props) => {
  const { data, isEditMode } = props;
  console.log('data', data);
  return (
    <div
      className="banner-top-main"
      style={{
        backgroundImage: `url(${data?.url}/@@images/image)`,
      }}
    >
      <div className="ui two column grid">
        <div className="row">
          <div className="ten wide column left floated"></div>
          <div className="six wide column right floated">
            <div className="banner-top-main-block-title">
              {data.title && (
                <h2>
                  <ConditionalLink
                    to={data?.href?.[0]?.['@id']}
                    condition={!isEditMode}
                  >
                    {data?.title}
                  </ConditionalLink>
                </h2>
              )}
              {data.description && <h3>{data?.description} </h3>}
              {data.hrefText && (
                <Button
                  as="a"
                  size="large"
                  href={'' + data?.link?.[0]?.['@id']}
                  primary
                >
                  {data.hrefText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselFeaturedView;
