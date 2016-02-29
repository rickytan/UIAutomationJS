/**
 * The UIANavigationBar class allows access to, and control of, buttons in your app’s navigation bar.
 * @constructor
 * @extends UIAElement
 */
var UIANavigationBar = function () {

};

UIANavigationBar.prototype = UIAElement.prototype;

/**
 * Returns the left button in the navigation bar.
 * @returns {UIAButton}
 */
UIANavigationBar.prototype.leftButton = function () {
    return new UIAButton;
};
/**
 * Returns the right button in the navigation bar.
 * @returns {UIAButton}
 */
UIANavigationBar.prototype.rightButton = function () {
    return new UIAButton;
};