# volto-csFeatured-block

[![Releases](https://gitlab.com/codesyntax/volto-csFeatured-block/-/badges/release.svg)](https://gitlab.com/codesyntax/volto-csFeatured-block/-/releases/permalink/latest)


[Volto](https://github.com/plone/volto) add-on

## Features

Demo GIF

## Getting started

### Try volto-csFeatured-block with Docker

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
   docker run -it --rm -p 3000:3000 --link plone -e ADDONS="@eeacms/volto-csFeatured-block" plone/volto
   ```

1. Go to http://localhost:3000

### Add volto-csFeatured-block to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "volto-csFeatured-block"
   ],

   "dependencies": {
       "volto-csFeatured-block": "^1.0.0"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --addon @eeacms/volto-csFeatured-block
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

See [RELEASE.md](https://gitlab.com/codesyntax/volto-csFeatured-block/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://gitlab.com/codesyntax/volto-csFeatured-block/blob/master/DEVELOP.md).

## Copyright and license

All Rights Reserved.

See [LICENSE.md](https://gitlab.com/codesyntax/volto-csFeatured-block/blob/master/LICENSE.md) for details.


