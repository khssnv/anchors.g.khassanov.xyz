# anchors.khassanov.xyz

An example of scrolling to a tag inside a flexbox on page load with Nuxt.
There is no issue with it when you have a full page scroll bar, default browser behavior handles `#section` part.
However it requires more efforts if there is a flex item with overflow wich you want to open on a certain tag.

The trick is to click on anchor programmatically.
It makes possible to open a page on a certain section by links like `https://anchors.khassanov.xyz/#section-2`.
