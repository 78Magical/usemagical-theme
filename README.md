<div
    style='text-align:center; cursor:pointer; height:300px; display:flex; justify-content:center; align-items:center; flex-direction:column;'
> <br/>
 <br/>
 <br/>
 <br/>
    <h1 style='
        color:#FFB647; 
        font-family: sans-serif;
        font-size:3rem;
        text-align:center;
        font-weight:800'
    >
       useMagicTheme 🟣📘🍊
    </h1>
    <p style='
        color:#7920FF; '>
        Magical - Build With Magic
        </p>
 <br/>
 <br/>
</div>

useMagicTheme is a magical theme library, useMagicTheme is basically a function that accept a boolean value as a parameter and return  prebuilt object of css HEX value 

# Installation

```js
npm install usemagical-theme
```
or
```js
yarn add usemagical-theme
```

# Usage
```js
Javascript

import {useMagicTheme} from 'usemagical-theme'

const button = document.getElementById('merlinButton')
const { background, brandColor} = useMagicTheme( true )

button.style.backgroundColor = brandColor


```