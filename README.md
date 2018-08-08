# vue-backTop

![image](https://img.shields.io/badge/vue-2.5.17-blue.svg)
![image](https://img.shields.io/badge/vue--cli-3.0.0-green.svg)

> A Vue.js components to scroll to top

## Install
```
$ npm install vue-backtop-pack
```

## Usage
```javascript
import Vue from 'vue'
import vueBacktopPack from 'vue-backtop-pack'

Vue.use(vueBacktopPack)
```

or

```html
<script src="vue.min.js"></script>
<!-- must place this line after vue.js -->
<script src="vue-backtop-pack.umd.min.js"></script>
```

## Demo
```html
<!-- default -->
<vue-backTop></vue-backTop>

<vue-backTop :height="600" :bottom="50" :right="30" @onClick="handleOnClick" @complete="handleComplete">
    <span>scrollTop</span>
</vue-backTop>
```

## Options
Property | Description | Type | Default
|:---:|---|:---:|:---:|
| height | visible height | Number | 400
| bottom | distance to the bottom | Number | 30
| right | distance to the right | Number | 30
| duration | animation time | Number | 1000

### Callback
| Name | Description |
|:---:|---|
| onClick | when click
| complete | when scroll to top complete
