/**
 * The CGPoint type in iOS
 * @constructor
 */
var Point = function () {
};

Point.prototype = {
    x: 0,
    y: 0
};

/**
 * The CGSize type in iOS
 * @constructor
 */
var Size = function () {
};

Size.prototype = {
    width: 0,
    height: 0
};

/**
 * The CGRect type in iOS
 * @constructor
 */
var Rect = function () {
};

Rect.prototype = {
    origin: new Point,
    size: new Size
};







