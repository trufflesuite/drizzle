# Test app

## Project setup

**NOTE** @drizzle/vue-plugin is not published on npm.

To build in the interim:
* Clone from [@drizzle/vue-plugin
   repo](https://github.com/cds-consensys/drizzle-vue-plugin)

   ```
   $ git clone git@github.com:cds-consensys/drizzle-vue-plugin.github
   $ cd drizzle-vue-plugin
   $ npm install
   $ npm run build:bundle
   $ npm link
   ```

* Now from the root of the Test app
    ```
    $ npm link @drizzle/vue-plugin
    ```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build:bundle
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
