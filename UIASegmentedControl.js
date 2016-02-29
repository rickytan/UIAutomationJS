/**
 * The UIASegmentedControl class allows access to, and control of, elements within segmented controls in your app.
 * @constructor
 * @extends UIAElement
 */
var UIASegmentedControl = function () {

};

UIASegmentedControl.prototype = UIAElement.prototype;
/**
 * Returns the currently selected button within the segmented control.
 * @returns {UIAElement}
 */
UIASegmentedControl.prototype.selectedButton = function () {
    return new UIAElement;
};
