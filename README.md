
# DKLV packages for vuejs 3

## Installation

```sh
npm install --save @victor-dklv/vue3-npm
```
### For global use 

After installation go to your main.js and add the package:

```js
import plugin from '@victor-dklv/vue3-npm'
```

Add the plugin to your app:

```js
createApp(App).use(plugin)
```

### To update

```sh
npm update --save @victor-dklv/vue3-npm
```

## Components

### Links

- [Image Slider](#imageslider)

<hr/>

### <a id="imageslider"></a>Image slider

To use the image slider add the dklv-image-slider to your component

Variables:

- image1
  - Type: String
  - Expected: Url
- image2
  - Type: String
  - Expected: Url

#### Example

```html
 <dklv-image-slider :image1="rightImg" :image2="leftImg" />
```

## Developing

### Update code from terminal

```sh
npm run build; git add --all; git commit -m "Autocommit %date:~-4%%date:~3,2%%date:~0,2%.%time:~0,2%%time:~3,2%%time:~6,2%"; git push; npm version patch; npm publish --acces=public
```

### Next features

- 