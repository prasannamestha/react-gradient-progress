# React Gradient Progress

> Simple and light circular progressbar with gradient

![React gradient progress bar](https://miro.medium.com/max/875/1*6eFjvxycuyCzO-jui0d6Dw.png)

[![NPM](https://img.shields.io/npm/v/react-gradient-progress.svg)](https://www.npmjs.com/package/react-gradient-progress) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

Using npm

```bash
npm i -s react-gradient-progress
```

## Basic Usage

```javascript
import {CircleProgress} from 'react-gradient-progress'

<CircleProgress percentage={90} />
```

## Props

| Name                | Description                                                                                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `percentage`             | Percentage progress. Required.                                                                                                                                                          |
| `width`          | Width of the progressbar container in px. Default: `200`.                                                                                                                                                                                        |
| `strokeWidth`          | The stroke width of the progress bar. Default: `5`.                                                                                                                                                                                      |
| `strokeLinecap` | Stroke linecap type. Default: `'round'`. Accepted values: 'butt', 'round', 'square' |
| `fontSize`         | The size of the percentage text. Default: `'30px'`.                                                                                                                                                                                    |
| `fontColor`              | The color of the font. Default: `'inherit'`.                                                                                                                                                                                     |
| `fontFamily`       | Font family. Default: `inherit`.                                                                                                                                         |
| `primaryColor`        | The Gradient color. Should be an array of size 2. Default: `['#00BBFF', '#92d7f1']`.                                                                                                                                                                                 |
| `secondaryColor` | The color of the uncovered percentage. Default: `'transparent'`.                                                                                              |
| `fill`  | Color to fill in the progressbar. Default: `'transparent'`.                                                                                                                                                         |

## Read more
[https://medium.com/better-programming/build-beautiful-gradient-enabled-circular-progress-bars-in-react-d0a746deed0](https://medium.com/better-programming/build-beautiful-gradient-enabled-circular-progress-bars-in-react-d0a746deed0)

## Buy me a coffee if you like this repo
[![Send me a tip](https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png)](https://www.buymeacoffee.com/prasanna)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
