# jsxx

JSX eXperimental. It adds few features to [JSX][jsx] language used in
[React][react].

## Namespaces supports

So `<module:component />` compiles to `module.component(null)`.

## `<template>` element

jsxx handles `<template>` element by compiling it to a function which accepts
two arguments and returns an array of element children. So the following
snippet:

    <template>
      Hello, {name}
    </template>

is compiled into

    function(props, state) {
      return ['Hello, ', name]
    }

## Installation and usage

Install from npm:

    % npm install jsxx

Use from command line:

    % jsxx ./main.jsx > main.js

or with browserify:

    % browserify -t jsxx/transform ./index.js > ./bundle.js

[jsx]: http://facebook.github.io/react/docs/jsx-in-depth.html
[react]: http://facebook.github.io/react/
