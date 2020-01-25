# for fixing nested dependencies
- delete node_modules, package-json.lock (Note: npm audit updates package-lock.json, so deleting this file will lose those initial changes)
DO NOT DELETE package.json

# npm install
```
npm i
```
# npm audit fix to resolve as much as you can without manual update
```
npm audit fix
```

# npm audit to see remaining
```
npm audit
```
# install updated versions specified by npm audit: eg
```
npm i specific@1.1.9 other@4.4.4
````
or
```
npm update specific --depth 1
```
# put those files in resolutions like this and add script preinstall
- Note you can use - npx npm-force-resolutions, but this only works locally and not in a pipeline.
package.json
```
...
"resolutions": {
  "specific": "@1.1.9",
  "other": "@4.4.4"
},
"scripts": {
  "preinstall": "npm i npm-force-resolutions && node node_modules/npm-force-resolutions/index.js"
  "test": "echo \"Error: no test specified\" && exit 1"
},
```
# npm install again to fix
```
npm i
```
That's it done!!!
