/**
 * The UIAPageIndicator class allows access to, and control of, page indicator elements in your app.
 * @constructor
 */
var UIAPageIndicator = function () {

};

UIAPageIndicator.prototype = UIAElement.prototype;

/**
 * Goes to the next (logically, to the right) open view .
 */
UIAPageIndicator.prototype.goToNextPage = function () {
};
/**
 * Goes to the previous (logically, to the left) open view .
 */
UIAPageIndicator.prototype.goToPreviousPage = function () {
};

/**
 * Returns the number of open views.
 * @returns {Number}
 */
UIAPageIndicator.prototype.pageCount = function () {
    return 0;
};

/**
 * Returns the index of the currently open view.
 * @returns {Number}
 */
UIAPageIndicator.prototype.pageIndex = function () {
    return 0;
};
/**
 * Goes to the page specified by the index value.
 * @param {Number} index - The value identifying the selected page.
 */
UIAPageIndicator.prototype.selectPage = function (index) {
};