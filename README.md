# volto-featured-block


[Volto](https://github.com/plone/volto) add-on to create pages with arbitrary content based on a simple schema (title + image + text), that can be extended using schemaEnhancers and that support variations. The content of the block is not based in some other content of the site (for instance in [volto-blocks-grid](https://github.com/kitconcept/volto-blocks-grid) the Teaser block content comes initially from a given content of the site.

This block is intended to build front pages or landing pages where usually a lot of simple content need to be added and that content is not coming from existing content.

It provides extension mechanisms using schemaExtenders and variations to add new templates or fields to it.

## Features

Demo GIF

## Getting started

### Try volto-featured-block with Docker

1. Get the latest Docker images

   ```
   docker pull plone
   docker pull plone/volto
   ```

1. Start Plone backend
   ```
   docker run -d --name plone -p 8080:8080 -e SITE=Plone -e PROFILES="profile-plone.restapi:blocks" plone
   ```

1. Start Volto frontend

   ```
   docker run -it --rm -p 3000:3000 --link plone -e ADDONS="@codesyntax/volto-featured-block" plone/volto
   ```

1. Go to http://localhost:3000

### Add volto-featured-block to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@codesyntax/volto-featured-block"
   ],

   "dependencies": {
       "@codesyntax/volto-featured-block": "^1.0.0"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --addon @codesyntax/volto-featured-block
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/codesyntax/volto-featured-block/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/codesyntax/volto-featured-block/blob/master/DEVELOP.md).

## Copyright and license

See [LICENSE.md](https://github.com/codesyntax/volto-featured-block/blob/master/LICENSE.md) for details.

