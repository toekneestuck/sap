# jQuery Sap

Sap is a jQuery plugin that makes the elements of your choosing sticky (see what we did there?) when scrolling. By default, your elements will stick to the top of the viewport, but this behavior may be changed by setting the `distanceFromTheTop` option.

This fork of Sap attempts to better the resetting of the element by caching its original position attribute instead of assuming 'static' and also provides the option of passing a manual width. This is particularly useful for elements where you want the width to be 100% (or any non-pixel-based width) and don't want Sap setting the original elements to an absolute pixel width. It also toggles an editable class on the element for additional styling when active.

## Requirements

1. jQuery

## Usage

You can apply Sap to any element in the DOM by simply calling `$(selector).sap()`

    $('#item').sap();

You can also specify the distance from the top of the viewport that you want Sap to activate

    $('#item').sap({
		distanceFromTheTop: 0
	});

You can override a class that is applied when Sap activates:

	$('#item').sap({
		class : 'my-new-class'
	});

You can override the width of both the shim and when the element is reset

	$('#item').sap({
		width : '100%'
	});
	
## Demo

[View Demo Here](http://www.zackkitzmiller.info/sap/)
[View Other Demo](http://www.zackkitzmiller.info/sap/demo2.html)

## Known Issues

* Sap does not work on iOS.
* Sap does not always reset default CSS properly. 

## License

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).