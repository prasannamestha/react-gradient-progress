# React Gradient Progress

> Simple and light circular progressbar with gradient

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
| `fontSize`         | The size of the percentage text. Default: `'30px'`.                                                                                                                                                                                    |
| `fontColor`              | The color of the font. Default: `'inherit'`.                                                                                                                                                                                     |
| `fontFamily`       | Font family. Default: `inherit`.                                                                                                                                         |
| `primaryColor`        | The Gradient color. Should be an array of size 2. Default: `['#00BBFF', '#92d7f1']`.                                                                                                                                                                                 |
| `secondaryColor` | The color of the uncovered percentage. Default: `'transparent'`.                                                                                              |
| `fill`  | Color to fill in the progressbar. Default: `'transparent'`.                                                                                                                                                         |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
