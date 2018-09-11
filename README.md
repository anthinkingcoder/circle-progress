# vue-circle-progress
a vue component of circle progress bar

# install
 ```bash
 $ npm i vue-circle-progress -s
 ```
 
# use npm
```js
  import Vue from 'Vue'
  import CircleProgress from 'vue-circle-xprogress'
  import  'vue-circle-progress/dist/circle-progress.css'
  Vue.use(CircleProgress)
```

# use cdn
```html
<script src="https://cdn.jsdelivr.net/npm/vue-circle-xprogress@0.0.1/dist/circle-progress.min.js"></script>
<link ref="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-circle-xprogress@0.0.1/dist/circle-progress.css">
```
# live example
> [code open](https://codepen.io/zhoulin/pen/jvZeNy)


# start
```html
<template>
  <circle-progress percent="30" size="60">
      <p>30</p>
    </circle-progress>
</template>
<script>
</script>
```

# circle-progress Component
### props
| param | description | type | default |
| :-: | :-: | :-: | :-: |
| percent | 进度百分比 0-100 | Number | 0 |
| size | 大小 | Number | 120 |
| staticWidth | 背景圆环 stroke 宽度 | String | 6 |
| staticColor | 背景圆环 颜色 | String | #E8EAED |
| dynamicWidth | 圆环 stroke 宽度 | Number | 7 |
| dynamicColor | 圆环 颜色 | String | #3864EC |
| dynamicShape | 圆环边角形状 ```round```,```square``` | String | round |
| dashboard | 仪表盘 | Boolean | false |

