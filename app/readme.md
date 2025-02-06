# How to add a new version

Copy the latest folder version and increment the version number.

In the layouts folder duplicate the latest base-v(x).html and home-v(x).html and increment it.
In the base file link the side navigation and increment the version number.
In the home file link to the latest base file.

In the layouts/partials duplicate and increment side-navigation-v(x).html
Update all the links in the side navigation to point to the correct version eg href="/v3/"

In the latest version folder. Update all the pages to link to the latest base file or home file as required.

In the routes.js copy a version of the routes and then increment the version number in the links.

There may be hard coded links in the html files that need to be updated.

## Suggestions to improve

The layout files are a bit of a mess and a new version of each layout file is currently required for each version

The javascript file from the gov is an import from a CDN due to conflicts, it would be better to use the gov.uk javascript built files just incase there are updates.

Resolve the style conflicts in the main or an additional scss file and remove the need to embedded and inline styles.

Separate out the routes into a separate file and import them into the main routes.js file.