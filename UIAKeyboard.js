/**
 * The UIAKeyboard class allows access to, and control of, elements within your app’s keyboard.
 * @constructor
 */
var UIAKeyboard = function () {

};

UIAKeyboard.prototype = UIAElement.prototype;

/**
 * Returns an array representing the keys of the specified keyboard.
 * @returns {UIAElementArray}
 */
UIAKeyboard.prototype.keys = function () {
    return new UIAElementArray;
};

/**
 * Taps the keys of the specified keyboard as required to generate the specified string.
 * @param {String} string - The string to be typed on the keyboard.
 */
UIAKeyboard.prototype.typeString = function (string) {

};