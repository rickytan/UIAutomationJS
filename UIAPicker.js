/**
 * The UIAPicker class allows access to, and control of, wheel elements within a picker.
 * @constructor
 */
var UIAPicker = function() {

};

UIAPicker.prototype = UIAElement.prototype;

/**
 * Returns an array representing the wheels of the specified picker.
 * @returns {UIAElementArray}
 */
UIAPicker.prototype.wheels = function() {
    return new UIAElementArray;
}