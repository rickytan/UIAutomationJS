/**
 * The UIAScrollView class allows access to, and control of, the elements of a scroll view.
 * @constructor
 * @extends UIAElement
 */
var UIAScrollView = function () {

};

UIAScrollView.prototype = UIAElement.prototype;

/**
 * Scrolls up within the specified scroll view.
 */
UIAScrollView.prototype.scrollUp = function () {
};
/**
 * Scrolls down within the specified scroll view.
 */
UIAScrollView.prototype.scrollDown = function () {
};
/**
 * Scrolls left within the specified scroll view.
 */
UIAScrollView.prototype.scrollLeft = function () {
};
/**
 * Scrolls right within the specified scroll view.
 */
UIAScrollView.prototype.scrollRight = function () {
};
/**
 * Scrolls within the specified scroll view until the named element is displayed on the screen.
 * @param {String} name - The name of the element to scroll to.
 * @returns {UIAElement}
 */
UIAScrollView.prototype.scrollToElementWithName = function (name) {
    return new UIAElement;
};
/**
 * Scrolls within the specified scroll view until the matching element is displayed on the screen.
 * @param {String} predicateString - The predicate to define the match criteria.
 * @returns {UIAElement}
 */
UIAScrollView.prototype.scrollToElementWithPredicate = function (predicateString) {
    return new UIAElement;
};
/**
 * Scrolls within the specified scroll view until the element with the specified value for the specified key is displayed on the screen.
 * @param (Object) value - The value for the specified key.
 * @param {String} key - The key for the specified value.
 * @returns {UIAElement}
 */
UIAScrollView.prototype.scrollToElementWithValueForKey = function (value, key) {
    return new UIAElement;
};
