/**
 * The UIAWindow class allows access to, and control of, your app’s window elements.
 * @constructor
 */
var UIAWindow = function () {

};

UIAWindow.prototype = UIAElement.prototype;

/**
 * Returns the content area of the window (below the navigation bar and above the tab bar or toolbar.
 * @returns {Rect}
 */
UIAWindow.prototype.contentArea = function () {
    return new Rect;
};
/**
 * Returns the the app’s navigation bar.
 * @returns {UIANavigationBar}
 */
UIAWindow.prototype.navigationBar = function () {
    return new UIANavigationBar;
};
/**
 * Returns an array of the navigation bars contained by this object.
 * @returns {UIAElementArray<UIANavigationBar>}
 */
UIAWindow.prototype.navigationBars = function () {
    return new UIAElementArray;
};
/**
 * Returns the app’s tab bar.
 * @returns {UIATabBar}
 */
UIAWindow.prototype.tabBar = function () {
    return new UIATabBar;
};
/**
 * Returns an array of tab bars contained by this object.
 * @returns {UIAElementArray<UIATabBar>}
 */
UIAWindow.prototype.tabBars = function () {
    return new UIAElementArray;
};
/**
 * Returns the the app’s toolbar.
 * @returns {UIAToolbar}
 */
UIAWindow.prototype.toolbar = function () {
    return new UIAToolbar;
};
/**
 * Returns an array of toolbars contained by this object.
 * @returns {UIAElementArray<UIAToolbar>}
 */
UIAWindow.prototype.toolbars = function () {
    return new UIAElementArray;
};