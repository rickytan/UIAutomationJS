/**
 * The UIACollectionView class allows access to, and control of, elements within a collection view in your app.
 * @constructor
 * @extends UIAScrollView
 */
var UIACollectionView = function() {

};

UIACollectionView.prototype = UIAScrollView.prototype;
/**
 * Returns an array of elements within the collection view.
 * @returns {UIAElementArray.<UICollectionCell>}
 */
UIACollectionView.prototype.cells = function() {
    return new UIAElementArray;
};
/**
 * Returns an array visible elements within the collection view.
 * @returns {UIAElementArray.<UICollectionCell>}
 */
UIACollectionView.prototype.visibleCells = function() {
    return new UIAElementArray();
};