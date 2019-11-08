// https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/components/_globals.js
import Vue from 'vue'

const requireComponent = require.context (
    '.',
    false,
    /Base[\w-]+\.vue$/
)

requireComponent.keys().forEach(filename => {
    const componentConfig = requireComponent(filename)

    const componentName = filename
        .replace(/^\.\//, '')
        .replace (/\.\w+$/, '')
        .replace (/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase ()

    Vue.component (componentName, componentConfig.default || componentConfig)
})
