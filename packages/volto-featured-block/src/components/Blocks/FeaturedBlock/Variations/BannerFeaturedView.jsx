import React from 'react';
import { Button } from 'semantic-ui-react';
import { ConditionalLink } from '@plone/volto/components';

export const BannerFeaturedView = (props) => {
  const { data, isEditMode } = props;
  return (
    <div
      className="banner-top-main"
      style={{
        backgroundImage: `url(${data?.url}/@@images/image)`,
      }}
    >
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
  );
};
