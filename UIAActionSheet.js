/**
 * The UIAActionSheet class allows access to, and control of, action sheets within your app.
 * @constructor
 */
var UIAActionSheet = function() {

};

UIAActionSheet.prototype = UIAElement.prototype;

/**
 * Returns the Cancel button in the action sheet.
 * @returns {UIAButton}
 */
UIAActionSheet.prototype.cancelButton = function() {
    return new UIAButton;
}
