/**
 * The UIATabBar class allows access to, and control of, elements within your app’s tab bar
 * @constructor
 */
var UIATabBar = function () {

};
UIATabBar.prototype = UIAElement.prototype;

/**
 * Returns the button currently selected in the tab bar.
 * @returns {UIAButton}
 */
UIATabBar.prototype.selectedButton = function () {
    return new UIAButton;
}