/**
 * The UIAPopover class provides methods for accessing and manipulating popovers and the elements they contain.
 * @constructor
 * @extends UIAElement
 */
var UIAPopover = function () {

};

UIAPopover.prototype = UIAElement.prototype;

/**
 * Returns the action sheet contained by the popover.
 * @returns {UIAActionSheet}
 */
UIAPopover.prototype.actionSheet = function () {
    return new UIAActionSheet;
};
/**
 * Returns the navigation bar contained by the popover.
 * @returns {UIANavigationBar}
 */
UIAPopover.prototype.navigationBar = function () {
    return new UIANavigationBar;
};
/**
 * Returns the tab bar contained by the popover.
 * @returns {UIATabBar}
 */
UIAPopover.prototype.tabBar = function () {
    return new UIATabBar;
};
/**
 * Returns the toolbar contained by the popover.
 * @returns {UIAToolbar}
 */
UIAPopover.prototype.toolbar = function () {
    return new UIAToolbar;
};
/**
 * Dismisses a popover by tapping outside the popover and within the region defined for dismissal.
 */
UIAPopover.prototype.dismiss = function () {
};