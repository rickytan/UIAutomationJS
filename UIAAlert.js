/**
 * The UIAAlert class allows access to, and control of, alerts within your app.
 * @constructor
 * @extends UIAElement
 */
var UIAAlert = function () {

};

UIAAlert.prototype = UIAElement.prototype;

/**
 * Returns the cancel button contained in the alert.
 * @returns {UIAButton}
 */
UIAAlert.prototype.cancelButton = function () {
    return new UIAButton;
};

/**
 * Returns the default button contained in the alert.
 * @returns {UIAButton}
 */
UIAAlert.prototype.defaultButton = function () {
    return new UIAButton;
};
