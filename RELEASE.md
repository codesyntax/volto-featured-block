## Release

### Automatic release using GitHub actions

* The release process is automated using GitHub actions.
* Pull Requests coming from develop branch to main will be handled automatically and after merging them a new release will be published.
* To update the version number to a higher one (major versions, etc. Add the new version in a change in the package.json file in the develop branch)

### Manual release from the develop branch ( beta release )

#### Installation and configuration of release-it

You need to first install the [release-it](https://github.com/release-it/release-it)  client.

   ```
   npm install -g release-it
   ```
   
Release-it uses the configuration written in the [`.release-it.json`](./.release-it.json) file located in the root of the repository.
   
Release-it is a tool that automates 4 important steps in the release process:

1. Version increase in `package.json` ( increased from the current version in `package.json`)
2. `CHANGELOG.md` automatic generation from commit messages ( grouped by releases )
3. GitHub release on the commit with the changelog and package.json modification on the develop branch
4. NPM release ( by default it's disabled, but can be enabled in the configuration file )

To configure the authentification, you need to export GITHUB_TOKEN for [GitHub](https://github.com/settings/tokens) 

   ```
   export GITHUB_TOKEN=XXX-XXXXXXXXXXXXXXXXXXXXXX
   ```
 
 To configure npm, you can use the `npm login` command or use a configuration file with a TOKEN :
 
   ```
   echo "//registry.npmjs.org/:_authToken=YYYYYYYYYYYYYYYYYYYYYYYYYYYYYY" > .npmrc
   ```

#### Using release-it tool
  
There are 3 yarn scripts that can be run to do the release

##### yarn release-beta

Automatically calculates and presents 3 beta versions - patch, minor and major for you to choose ( or Other for manual input). 

```
? Select increment (next version): 
❯ prepatch (0.1.1-beta.0) 
  preminor (0.2.0-beta.0) 
  premajor (1.0.0-beta.0) 
  Other, please specify... 
```

##### yarn release-major-beta

Same as `yarn release-beta`, but with premajor version pre-selected.
    
##### yarn release

Generic command, does not automatically add the `beta` to version, but you can still manually write it if you choose Other.

#### Important notes

> Do not use release-it tool on master branch, the commit on CHANGELOG.md file and the version increase in the package.json file can't be done without a PULL REQUEST.  

> Do not keep Pull Requests from develop to master branches open when you are doing beta releases from the develop branch. As long as a PR to master is open, an automatic script will run on every commit and will update both the version and the changelog to a production-ready state - ( MAJOR.MINOR.PATCH mandatory format for version).

