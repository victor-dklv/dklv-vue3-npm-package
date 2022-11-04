
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

### For local use

After installation go to your vue component and add the package:

```js
import plugin from '@victor-dklv/vue3-npm'

export default {
    components:{
        plugin
    }
}
```

### To update

```sh
npm update --save @victor-dklv/vue3-npm
```

## Components

### Links

- [Image Slider](#imageslider)
- [Image Carousel](#imagecarousel)

<hr/>

### <a id="imageslider"></a>Image slider

To use the image slider add the dklv-image-slider to your component.

#### Variables:

> - image1
>   - Type: String
>   - Expected: Url
>   - Required: True
> - image2
>   - Type: String
>   - Expected: Url
>   - Required: True

#### Example

```html
 <dklv-image-slider :image1="rightImg" :image2="leftImg" />
```

<hr/>

### <a id="imagecarousel"></a>Image carousel

To use the image carousel add the dklv-image-carousel to your component.

#### Variables:

> - images
>   - Type: Array
>   - Expected: Array of urls
>   - Required: True
> - height
>   - Type: Number
>   - Expected: Height in px
>   - Required: False
> - autoscroll
>   - Type: Boolean
>   - Expected: true or false
>   - Required: False

#### Example

```html
 <dklv-image-carousel :imagelist="imgList" :height="carouselHeight" :autoscroll="false"/>
```

## Developing

### Login as npm user

```powershell
# Check if user is logged in
npm whomani
# Login as authorized user
npm login
```

### Update code from terminal

```powershell
# Build the updates
npm run build; 
# Commit the changes to git
git add --all; 
$date = Get-Date -Format "dd/MM/yyy HH:mm"; 
git commit -m "Autocommit $date";
#Get new patch version and publish to npm
npm version patch;
npm publish --acces=public
#push all changes to github
git push;
```

### Next features

- 