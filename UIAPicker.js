/**
 * The UIAPicker class allows access to, and control of, wheel elements within a picker.
 * @constructor
 * @extends UIAElement
 */
var UIAPicker = function() {

};

UIAPicker.prototype = UIAElement.prototype;

/**
 * Returns an array representing the wheels of the specified picker.
 * @returns {UIAElementArray.<UIAPickerWheel>}
 */
UIAPicker.prototype.wheels = function() {
    return new UIAElementArray;
}