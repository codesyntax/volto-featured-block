import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, connect } from 'react-redux';
import { compose } from 'redux';
import { Dimmer, Loader, Message } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import { getBaseUrl } from '@plone/volto/helpers';
import { createContent } from '@plone/volto/actions';
import { readAsDataURL } from 'promise-file-reader';

import uploadSVG from '@plone/volto/icons/upload.svg';
import navSVG from '@plone/volto/icons/nav.svg';
import editingSVG from '@plone/volto/icons/editing.svg';
import deleteSVG from '@plone/volto/icons/delete.svg';
import './imageEditor.less';
const messages = defineMessages({
  uploadImage: {
    id: 'Upload image',
    defaultMessage: 'Upload or select an image',
  },
  uploadingFile: {
    id: 'Uploading file',
    defaultMessage: 'Uploading file',
  },
  removeImage: {
    id: 'Remove image',
    defaultMessage: 'Remove',
  },
  editImage: {
    id: 'Edit image',
    defaultMessage: 'Edit',
  },
  editOrRemoveImage: {
    id: 'Edit or remove image',
    defaultMessage: 'Edit or remove image',
  },
});

function onUploadImage(pathname, e, setUploading, dispatch) {
  e.stopPropagation();
  e.preventDefault();
  const target = e.target;
  const file = target.files[0];
  readAsDataURL(file).then((data) => {
    const fields = data.match(/^data:(.*);(.*),(.*)$/);
    dispatch(
      createContent(getBaseUrl(pathname), {
        '@type': 'Image',
        image: {
          data: fields[3],
          encoding: fields[2],
          'content-type': fields[1],
          filename: file.name,
        },
      }),
    );
    setUploading(true);
  });
}

const FeaturedImageEditor = (props) => {
  const {
    data,
    openObjectBrowser,
    selected,
    request,
    block,
    content,
    editable,
    pathname,
    onChangeBlock,
  } = props;

  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!__SERVER__) {
      setUploading(false);
    }
  }, [selected]);

  React.useEffect(() => {
    setTimeout(() => {
      if (request.loaded && !request.loading && uploading) {
        onChangeBlock(block, {
          ...data,
          url: `resolveuid/${content['UID']}`,
          image_alt: content?.image?.filename,
        });
        setUploading(false);
      }
    }, 1000);
    /* eslint-disable-next-line */
  }, [request.loaded, request.loading]);

  const intl = useIntl();
  return (
    <>
      {!data.url && (
        <Message className="image-message">
          {selected && uploading && (
            <Dimmer active>
              <Loader indeterminate>
                {intl.formatMessage(messages.uploadingFile)}
              </Loader>
            </Dimmer>
          )}

          <center>
            <h4>{intl.formatMessage(messages.uploadImage)}</h4>
            {editable && (
              <>
                <p>
                  <label className="file">
                    <Icon className="ui button" name={uploadSVG} size={35} />
                    <input
                      type="file"
                      onChange={(e) =>
                        onUploadImage(pathname, e, setUploading, dispatch)
                      }
                      style={{ display: 'none' }}
                    />
                  </label>
                  <label className="file">
                    <Icon className="ui button" name={navSVG} size={35} />
                    <input
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        openObjectBrowser({
                          onSelectItem: (_url, element) =>
                            onChangeBlock(block, {
                              ...data,
                              url: `resolveuid/${element['UID']}`,
                              image_alt: element.title,
                            }),
                        });
                      }}
                      style={{ display: 'none' }}
                    />
                  </label>
                </p>
              </>
            )}
          </center>
        </Message>
      )}
      {!!data.url && selected && (
        <>
          <Message className="image-message">
            <center>
              <h4>{intl.formatMessage(messages.editOrRemoveImage)}</h4>
              <div className="image-in-row">
                <div
                  role="button"
                  tabindex="0"
                  className="ui image"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    openObjectBrowser({
                      onSelectItem: (url, element) =>
                        onChangeBlock(block, {
                          ...data,
                          url: `resolveuid/${element['UID']}`,
                          image_alt: element?.title,
                        }),
                    });
                  }}
                  onKeyDown={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    openObjectBrowser({
                      onSelectItem: (url, element) =>
                        onChangeBlock(block, {
                          ...data,
                          url: `resolveuid/${element['UID']}`,
                          image_alt: element?.title,
                        }),
                    });
                  }}
                >
                  <div className="image-editor-icon">
                    <Icon className="ui" name={editingSVG} size={35} />
                    {intl.formatMessage(messages.editImage)}
                  </div>
                </div>
                <div
                  role="button"
                  tabindex="0"
                  className="ui image"
                  onClick={() =>
                    onChangeBlock(block, {
                      ...data,
                      url: '',
                      image_alt: '',
                    })
                  }
                  onKeyDown={(e) => {
                    onChangeBlock(block, {
                      ...data,
                      url: '',
                      image_alt: '',
                    });
                  }}
                >
                  <div className="image-editor-icon">
                    <Icon className="ui" name={deleteSVG} size={35} />
                    {intl.formatMessage(messages.removeImage)}
                  </div>
                </div>
              </div>
            </center>
          </Message>
        </>
      )}
    </>
  );
};

export default compose(
  connect(
    (state) => ({
      request: state.content.create,
      content: state.content.data,
    }),
    { createContent },
  ),
)(FeaturedImageEditor);
