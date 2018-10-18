# Startup Landing Page Project written with CSS3 with SASS

[screen-shot](https://media.giphy.com/media/61ScR441CmXv6m8RAt/giphy.gif)

## How to test
1. clone or download this project
2. npm install && npm run build:css && npm run devserver
3. visit http://localhost:8080/public

## Features
1. Flexbox for layout
2. Mixins and Media Queries for responsiveness
```
@mixin respond($breakpoint) {
    @if $breakpoint == phone {
        @media only screen and (max-width: 37.5em) { @content };
    }
    @if $breakpoint == tab-port {
        @media only screen and (max-width: 56.25em) { @content };
    }

    @if $breakpoint == tab-land {
        @media only screen and (max-width: 75em) { @content };
    }

    @if $breakpoint == big-desktop {
        @media only screen and (max-width: 112.5em) { @content };
    }
}
```
3. Pure CSS for the hamburger menu


4. Used 'rem' for typogrpahy
```
html {
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
}
```


## Dependencies
1. [node-sass](https://github.com/sass/node-sass): Compile .scss files to css
2. [autoprefixer](https://github.com/postcss/autoprefixer): Parse CSS and add vendor prefixes to CSS rules using values
3. [postcss-cli](https://github.com/postcss/postcss-cli): Together with autoprefixer, it lints CSS, support variables and mixins, transpile CSS syntax, and etc. inline images, and more.


## Credit
Designed by [Jonas](https://github.com/jonasschmedtmann/advanced-css-course)
