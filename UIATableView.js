/**
 * The UIATableView class allows access to, and control of, elements within a table view in your app.
 * @constructor
 * @extends UIAScrollView
 */
var UIATableView = function () {

};

UIATableView.prototype = UIAScrollView.prototype;


/**
 * Returns an array of the cells within the table view.
 * @returns {UIAElementArray.<UIATableCell>}
 */
UIATableView.prototype.cells = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of the groups within the table view.
 * @returns {UIAElementArray.<UIATableGroup>}
 */
UIATableView.prototype.groups = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of the cells that are visible within the table view.
 * @returns {UIAElementArray.<UIATableCell>}
 */
UIATableView.prototype.visibleCells = function () {
    return new UIAElementArray;
};
