# jQuery Sap

Sap is a jQuery plugin that makes the elements of your choosing sticky (see what we did there?) when scrolling. By default, your elements will stick to the top of the viewport, but this behavior may be changed by setting the `distanceFromTheTop` option.

## Requirements

1. jQuery

## Usage

You can apply Sap to any element in the DOM by simply calling `$(selector).sap()`

    $('#item').sap();

You can also specify the distance from the top of the viewport that you want Sap to activate

    $('#item').sap({
		distanceFromTheTop: 0
	});
	
## Demo

[View Demo Here](http://www.zackkitzmiller.info/sap/)
[View Other Demo](http://www.zackkitzmiller.info/sap/demo.html)

## License

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).