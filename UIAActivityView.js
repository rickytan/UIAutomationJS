/**
 * The UIAActivityView class allows access to, and control of, activity views within your app.
 * @constructor
 * @extends UIAElement
 */
var UIAActivityView = function() {

};

UIAActivityView.prototype = UIAElement.prototype;

/**
 * Returns the cancel button in the activity view.
 * @returns {UIAButton}
 */
UIAActivityView.prototype.cancelButton = function() {
    return new UIAButton;
}