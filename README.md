# AlphaExcel

AlphaExcel is a 0.5KB standalone module for converting numbers into Excel like column names and Excel column letters back into numbers.

##### Syntax
```javascript
alphaExcel(thisArg);

// thisArg
// Value to be converted
// {string} {number}
```

##### Example

```javascript
var numberToColumn = alphaExcel(10);
console.log(numberToColumn); // "J"

var columnToNumber = alphaExcel("AA");
console.log(numberToColumn); // 27
```

## Manual installation
Drop your files into the required folder, make sure you're using the files from the `dist` folder, which is the compiled production-ready code. Ensure you place the script before the closing `</body>` tag so the DOM tree is populated when the script runs.
	
```html
<body>
	<!-- html content above -->
	<script src="dist/alphaexcel.min.js"></script>
  <script>
  var numberToColumn = alphaExcel(10);
  console.log(numberToColumn);
  </script>
</body>
```

## Release history
- 1.0.0
  - Initial release
