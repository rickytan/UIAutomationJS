/**
 * The UIAElement class is the superclass for all user interface elements in the context of the Automation instrument
 * for automating user interface testing of iOS apps.
 * @constructor
 */
var UIAElement = function () {

};

UIAElement.prototype = Object.prototype;

/**
 * Returns the screen position to tap for the specified element.
 * @returns {Point}
 */
UIAElement.prototype.hitpoint = function () {
    return new Point;
};
/**
 * Returns the position of the object on the main screen.
 * @returns {Rect}
 */
UIAElement.prototype.rect = function () {
    return new Rect;
};
/**
 * Returns an array of the activity indicators contained by the specified object.
 * @returns {UIAElementArray.<UIActivityIndicator>}
 */
UIAElement.prototype.activityIndicators = function () {
    return new UIAElementArray;
};
/**
 * Returns an object representing an activity view.
 * @returns {UIAActivityView}
 */
UIAElement.prototype.activityView = function () {
    return new UIAActivityView;
};
/**
 * Returns an array containing the parents of the specified object.
 * @returns {UIAElementArray.<UIAElement>}
 */
UIAElement.prototype.ancestry = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of buttons contained by the specified object.
 * @returns {UIAElementArray.<UIAButton>}
 */
UIAElement.prototype.buttons = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of collection views contained by the specified object.
 * @returns {UIAElementArray.<UIACollectionView>}
 */
UIAElement.prototype.collectionViews = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of elements contained by the specified object.
 * @returns {UIAElementArray.<UIAElement>}
 */
UIAElement.prototype.elements = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of images contained by the specified object.
 * @returns {UIAElementArray.<UIAElement>}
 */
UIAElement.prototype.images = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of links contained by the specified object.
 * @returns {UIAElementArray.<UIALink>}
 */
UIAElement.prototype.links = function () {
    return new UIAElementArray;
};
/**
 * Returns the app’s navigation bar.
 * @returns {UIAElement}
 */
UIAElement.prototype.navigationBar = function () {
    return new UIAElement;
};
/**
 * Returns an array of navigation bar objects contained by this object.
 * @returns {UIAElementArray.<UIANavigationBar>}
 */
UIAElement.prototype.navigationBars = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of page indicators contained by the specified object.
 * @returns {UIAElementArray.<UIAPageIndicator>}
 */
UIAElement.prototype.pageIndicators = function () {
    return new UIAElementArray;
};
/**
 * Returns the parent of the specified element.
 * @returns {UIAElement}
 */
UIAElement.prototype.parent = function () {
    return new UIAElement;
};
/**
 * Returns an array of picker objects contained by the specified object.
 * @returns {UIAElementArray.<UIAPicker>}
 */
UIAElement.prototype.pickers = function () {
    return new UIAElementArray;
};
/**
 * Returns the popover object associated with the specified object, if one exists.
 * @returns {UIAPopover}
 */
UIAElement.prototype.popover = function () {
    return new UIAPopover;
};
/**
 * Returns an array of progress indicators contained by the specified object.
 * @returns {UIAElementArray.<UIAProgressIndicator>}
 */
UIAElement.prototype.progressIndicators = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of scroll views contained by the specified object.
 * @returns {UIAElementArray.<UIAScrollView>}
 */
UIAElement.prototype.scrollViews = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of search bars contained by the specified object.
 * @returns {UIAElementArray.<UIASearchBar>}
 */
UIAElement.prototype.searchBars = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of secure text fields contained by the specified object.
 * @returns {UIAElementArray.<UIASecureTextField>}
 */
UIAElement.prototype.secureTextFields = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of segmented controls contained by the specified object.
 * @returns {UIAElementArray.<UIASegmentedControl>}
 */
UIAElement.prototype.segmentedControls = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of sliders contained by the specified object.
 * @returns {UIAElementArray.<UIASlider>}
 */
UIAElement.prototype.sliders = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of static texts contained by the specified object.
 * @returns {UIAElementArray.<UIAStaticText>}
 */
UIAElement.prototype.staticTexts = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of switches contained by the specified object.
 * @returns {UIAElementArray.<UIASwitch>}
 */
UIAElement.prototype.switches = function () {
    return new UIAElementArray;
};
/**
 * Returns the specified tab bar.
 * @returns {UIAElement}
 */
UIAElement.prototype.tabBar = function () {
    return new UIAElement;
};
/**
 * Returns an array of tab bars contained by this object.
 * @returns {UIAElementArray.<UIATabBar>}
 */
UIAElement.prototype.tabBars = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of table views contained by the specified object.
 * @returns {UIAElementArray.<UIATableView>}
 */
UIAElement.prototype.tableViews = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of text fields contained by the specified object.
 * @returns {UIAElementArray.<UIATextField>}
 */
UIAElement.prototype.textFields = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of text views contained by the specified object.
 * @returns {UIAElementArray.<UIATextView>}
 */
UIAElement.prototype.textViews = function () {
    return new UIAElementArray;
};
/**
 * Returns the specified toolbar.
 * @returns {UIAElement}
 */
UIAElement.prototype.toolbar = function () {
    return new UIAElement;
};
/**
 * Returns an array of toolbars contained by this object.
 * @returns {UIAElementArray.<UIAToolbar>}
 */
UIAElement.prototype.toolbars = function () {
    return new UIAElementArray;
};
/**
 * Returns an array of web views contained by the specified object.
 * @returns {UIAElementArray.<UIAWebView>}
 */
UIAElement.prototype.webViews = function () {
    return new UIAElementArray;
};
/**
 * Double-taps the specified element.
 */
UIAElement.prototype.doubleTap = function () {
};
/**
 * Drags within the bounds of an element.
 * @param {{
     *   UIAElement.prototype.touchCount = Number,
     *   UIAElement.prototype.duration = Number,
     *   UIAElement.prototype.startOffset = Point,
     *   UIAElement.prototype.endOffset = Point
     * }} options - A dictionary that specifies characteristics of the gesture. Valid keys are as UIAElement.prototype.follows =
 * * touchCount. The number of touches to use in the specified gesture. (Effectively, the number of fingers a user
 * would use to make the specified gesture.) The default touch count value is 1.
 * * duration. The length of hold time for the specified gesture. The default duration value for a tap is 0.
 * The default value for touch-and-hold gestures (such as drag, pinch open, and pinch close) is 1.
 * * startOffset. The first offset to use for a multiple-point gesture. The default value is {UIAElement.prototype.x =0.0, UIAElement.prototype.y =0.0}.
 * See the discussion for details.
 * * endOffset. The last offset to use for a multiple-point gesture. The default value is {UIAElement.prototype.x =0.0, UIAElement.prototype.y =0.0}.
 * See the discussion for details.
 */
UIAElement.prototype.dragInsideWithOptions = function (options) {
};
/**
 * Flicks within the bounds of an element.
 * @param {{
     *   UIAElement.prototype.touchCount = Number,
     *   UIAElement.prototype.startOffset = Point,
     *   UIAElement.prototype.endOffset = Point
     * }} options - A dictionary that specifies characteristics of the gesture. Valid keys are as UIAElement.prototype.follows =
 * * touchCount. The number of touches to use in the specified gesture. (Effectively, the number of fingers a user
 * would use to make the specified gesture.) The default touch count value is 1.
 * * startOffset. The first offset to use for a multiple-point gesture. The default value is {UIAElement.prototype.x =0.0, UIAElement.prototype.y =0.0}.
 * See the discussion for details.
 * * endOffset. The last offset to use for a multiple-point gesture. The default value is {UIAElement.prototype.x =0.0, UIAElement.prototype.y =0.0}.
 * See the discussion for details.
 */
UIAElement.prototype.flickInsideWithOptions = function (options) {
};
/**
 * Perform a rotation gesture centered on the specified element.
 * @param {{
     *   UIAElement.prototype.centerOffest = Point,
     *   UIAElement.prototype.duration = Number,
     *   UIAElement.prototype.radius = Number,
     *   UIAElement.prototype.roration = Number,
     *   UIAElement.prototype.touchCount = Number
     * }} options - A dictionary that specifies characteristics of the rotation gesture. Valid keys are as UIAElement.prototype.follows =
 * * centerOffset. The offset to use for the center of the rotate gesture. The default offset value is {UIAElement.prototype.x =0.0, UIAElement.prototype.y =0.0}.
 * * duration. The length of hold time for the specified gesture, in seconds. The default duration value is 1.
 * * radius. The distance in points from the center to the edge of the circular path.
 * * rotation. The length of rotation in radians. The default is pi (π).
 * * touchCount. The number of touches to use in the specified gesture. (Effectively, the number of fingers a user
 * would use to make the specified gesture.) Valid values are 1 to 5. The default is 2.
 */
UIAElement.prototype.rotateWithOptions = function (options) {
};
/**
 * Scrolls until the specified element is visible in a container view. Use this method with tables and web views.
 */
UIAElement.prototype.scrollToVisible = function () {
};
/**
 * Taps the specified element.
 */
UIAElement.prototype.tap = function () {
};
/**
 * Performs the specified gesture on the specified element using a dictionary to specify gesture attributes.
 * @param {{
     *   UIAElement.prototype.tapCount = Number,
     *   UIAElement.prototype.touchCount = Number,
     *   UIAElement.prototype.duration = Number,
     *   UIAElement.prototype.tapOffset = Point
     * }} options - A dictionary that specifies characteristics of the gesture. Valid keys are as UIAElement.prototype.follows =
 * * tapCount. The number of taps that compose the specified gesture. The default value is 1 (single tap).
 * * touchCount. The number of touches to use in the specified gesture. (Effectively, the number of fingers a user
 * would use to make the specified gesture.) The default touch count value is 1.
 * * duration. The length of hold time for the specified gesture. The default duration value for a tap is 0.
 * The default value for touch-and-hold gestures (such as drag, pinch open, and pinch close) is 1.
 * * tapOffset. The offset to use for the specified tap gesture. The default offset value is {UIAElement.prototype.x =0.0, UIAElement.prototype.y =0.0}.
 * See the discussion for details.
 */
UIAElement.prototype.tapWithOptions = function (options) {
};
/**
 * Touches the specified element and holds for the specified duration.
 * @param {Number} duration - The length of time to hold the touch on the element, in seconds.The default duration
 * value for a tap is 0. The default value for touch-and-hold gestures (such as drag, pinch open, and pinch close) is 1.
 */
UIAElement.prototype.touchAndHold = function (duration) {
};
/**
 * Performs a two-finger (two-touch) tap on this element.
 */
UIAElement.prototype.twoFingerTap = function () {
};
/**
 * Use these methods to determine whether an element is still valid.
 * @returns {Boolean}
 */
UIAElement.prototype.checkIsValid = function () {
    return false;
};
/**
 * Determines whether the specified element receives keyboard input.
 * @returns {Number} - Returns 1 if the specified element is the receiver of keyboard input, 0 if not.
 * If the status is not available, it returns null.
 */
UIAElement.prototype.hasKeyboardFocus = function () {
    return 0;
};
/**
 * Determines whether the specified element is enabled.
 * @returns {Number} - Returns 1 if the specified element is enabled, 0 if not. If the status is not available, it returns null.
 */
UIAElement.prototype.isEnabled = function () {
    return 0;
};
/**
 * Returns the specified element’s validity status as of the most recent access.
 * @returns {Boolean}
 */
UIAElement.prototype.isValid = function () {
    return false;
};
/**
 * Determines whether the specified element is visible on the screen.
 * @returns {Number} - Returns 1 if the user interface element represented by the specified element is visible on screen,
 * 0 if not. If the status is not available, it returns null.
 */
UIAElement.prototype.isVisible = function () {
    return 0;
};
/**
 * Waits for the specified element to become invalid.
 * @returns {Boolean}
 */
UIAElement.prototype.waitForInvalid = function () {
    return false;
};
/**
 * Returns a string containing the label attribute of the element.
 * @returns {String}
 */
UIAElement.prototype.lable = function () {
    return "";
};
/**
 * Returns a string containing the name attribute of the element.
 * @returns {String}
 */
UIAElement.prototype.name = function () {
    return "";
};
/**
 * Returns a string containing a value attribute specific to the type of element.
 * @returns {String}
 */
UIAElement.prototype.value = function () {
    return "";
};
/**
 * Returns an element whose name attribute matches a specified string.
 * @param {String} name - A string containing the name to test for.
 * @returns {UIAElement}
 */
UIAElement.prototype.withName = function (name) {
    return new UIAElement;
};
/**
 * Returns the element matching the specified criteria.
 * @param {String} predicateString - A string specifying the match criteria.
 * @returns {UIAElement}
 */
UIAElement.prototype.withPredicate = function (predicateString) {
    return new UIAElement;
};
/**
 * Returns the element containing the specified property with the specified value.
 * @param {Object} value - A string specifying the value that the specified property, if it exists, should match.
 * @param {String} key - A string specifying the property to test for.
 * @returns {UIAElement}
 */
UIAElement.prototype.withValueForKey = function (value, key) {
    return new UIAElement;
};
/**
 * Logs information about the specified element.
 */
UIAElement.prototype.logElement = function () {
};
/**
 * Logs information about the specified element and all of its subelements.
 */
UIAElement.prototype.logElementTree = function () {
};

