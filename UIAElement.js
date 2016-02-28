/**
 * The UIAElement class is the superclass for all user interface elements in the context of the Automation instrument
 * for automating user interface testing of iOS apps.
 * @constructor
 */
var UIAElement = function () {

};

UIAElement.prototype = {
    /**
     * Returns the screen position to tap for the specified element.
     * @returns {Point}
     */
    hitpoint: function () {
        return new Point;
    },
    /**
     * Returns the position of the object on the main screen.
     * @returns {Rect}
     */
    rect: function () {
        return new Rect;
    },
    /**
     * Returns an array of the activity indicators contained by the specified object.
     * @returns {UIAElementArray}
     */
    activityIndicators: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an object representing an activity view.
     * @returns {UIAActivityView}
     */
    activityView: function () {
        return new UIAActivityView;
    },
    /**
     * Returns an array containing the parents of the specified object.
     * @returns {UIAElementArray}
     */
    ancestry: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of buttons contained by the specified object.
     * @returns {UIAElementArray}
     */
    buttons: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of collection views contained by the specified object.
     * @returns {UIAElementArray}
     */
    collectionViews: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of elements contained by the specified object.
     * @returns {UIAElementArray}
     */
    elements: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of images contained by the specified object.
     * @returns {UIAElementArray}
     */
    images: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of links contained by the specified object.
     * @returns {UIAElementArray}
     */
    links: function () {
        return new UIAElementArray;
    },
    /**
     * Returns the app’s navigation bar.
     * @returns {UIAElement}
     */
    navigationBar: function () {
        return new UIAElement;
    },
    /**
     * Returns an array of navigation bar objects contained by this object.
     * @returns {UIAElementArray}
     */
    navigationBars: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of page indicators contained by the specified object.
     * @returns {UIAElementArray<UIAPageIndicator>}
     */
    pageIndicators: function () {
        return new UIAElementArray;
    },
    /**
     * Returns the parent of the specified element.
     * @returns {UIAElement}
     */
    parent: function () {
        return new UIAElement;
    },
    /**
     * Returns an array of picker objects contained by the specified object.
     * @returns {UIAElementArray<UIAPicker>}
     */
    pickers: function () {
        return new UIAElementArray;
    },
    /**
     * Returns the popover object associated with the specified object, if one exists.
     * @returns {UIAPopover}
     */
    popover: function () {
        return new UIAPopover;
    },
    /**
     * Returns an array of progress indicators contained by the specified object.
     * @returns {UIAElementArray<UIAProgressIndicator>}
     */
    progressIndicators: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of scroll views contained by the specified object.
     * @returns {UIAElementArray<UIAScrollView>}
     */
    scrollViews: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of search bars contained by the specified object.
     * @returns {UIAElementArray<UIASearchBar>}
     */
    searchBars: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of secure text fields contained by the specified object.
     * @returns {UIAElementArray<UIASecureTextField>}
     */
    secureTextFields: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of segmented controls contained by the specified object.
     * @returns {UIAElementArray<UIASegmentedControl>}
     */
    segmentedControls: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of sliders contained by the specified object.
     * @returns {UIAElementArray<UIASlider>}
     */
    sliders: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of static texts contained by the specified object.
     * @returns {UIAElementArray<UIAStaticText>}
     */
    staticTexts: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of switches contained by the specified object.
     * @returns {UIAElementArray<UIASwitch>}
     */
    switches: function () {
        return new UIAElementArray;
    },
    /**
     * Returns the specified tab bar.
     * @returns {UIAElement}
     */
    tabBar: function () {
        return new UIAElement;
    },
    /**
     * Returns an array of tab bars contained by this object.
     * @returns {UIAElementArray<UIATabBar>}
     */
    tabBars: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of table views contained by the specified object.
     * @returns {UIAElementArray<UIATableView>}
     */
    tableViews: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of text fields contained by the specified object.
     * @returns {UIAElementArray<UIATextField>}
     */
    textFields: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of text views contained by the specified object.
     * @returns {UIAElementArray<UIATextView>}
     */
    textViews: function () {
        return new UIAElementArray;
    },
    /**
     * Returns the specified toolbar.
     * @returns {UIAElement}
     */
    toolbar: function () {
        return new UIAElement;
    },
    /**
     * Returns an array of toolbars contained by this object.
     * @returns {UIAElementArray<UIAToolbar>}
     */
    toolbars: function () {
        return new UIAElementArray;
    },
    /**
     * Returns an array of web views contained by the specified object.
     * @returns {UIAElementArray<UIAWebView>}
     */
    webViews: function () {
        return new UIAElementArray;
    },
    /**
     * Double-taps the specified element.
     */
    doubleTap: function () {
    },
    /**
     * Drags within the bounds of an element.
     * @param {{
     *   touchCount: Number,
     *   duration: Number,
     *   startOffset: Point,
     *   endOffset: Point
     * }} options - A dictionary that specifies characteristics of the gesture. Valid keys are as follows:
     * * touchCount. The number of touches to use in the specified gesture. (Effectively, the number of fingers a user
     * would use to make the specified gesture.) The default touch count value is 1.
     * * duration. The length of hold time for the specified gesture. The default duration value for a tap is 0.
     * The default value for touch-and-hold gestures (such as drag, pinch open, and pinch close) is 1.
     * * startOffset. The first offset to use for a multiple-point gesture. The default value is {x:0.0, y:0.0}.
     * See the discussion for details.
     * * endOffset. The last offset to use for a multiple-point gesture. The default value is {x:0.0, y:0.0}.
     * See the discussion for details.
     */
    dragInsideWithOptions: function (options) {
    },
    /**
     * Flicks within the bounds of an element.
     * @param {{
     *   touchCount: Number,
     *   startOffset: Point,
     *   endOffset: Point
     * }} options - A dictionary that specifies characteristics of the gesture. Valid keys are as follows:
     * * touchCount. The number of touches to use in the specified gesture. (Effectively, the number of fingers a user
     * would use to make the specified gesture.) The default touch count value is 1.
     * * startOffset. The first offset to use for a multiple-point gesture. The default value is {x:0.0, y:0.0}.
     * See the discussion for details.
     * * endOffset. The last offset to use for a multiple-point gesture. The default value is {x:0.0, y:0.0}.
     * See the discussion for details.
     */
    flickInsideWithOptions: function (options) {
    },
    /**
     * Perform a rotation gesture centered on the specified element.
     * @param {{
     *   centerOffest: Point,
     *   duration: Number,
     *   radius: Number,
     *   roration: Number,
     *   touchCount: Number
     * }} options - A dictionary that specifies characteristics of the rotation gesture. Valid keys are as follows:
     * * centerOffset. The offset to use for the center of the rotate gesture. The default offset value is {x:0.0, y:0.0}.
     * * duration. The length of hold time for the specified gesture, in seconds. The default duration value is 1.
     * * radius. The distance in points from the center to the edge of the circular path.
     * * rotation. The length of rotation in radians. The default is pi (π).
     * * touchCount. The number of touches to use in the specified gesture. (Effectively, the number of fingers a user
     * would use to make the specified gesture.) Valid values are 1 to 5. The default is 2.
     */
    rotateWithOptions: function (options) {
    },
    /**
     * Scrolls until the specified element is visible in a container view. Use this method with tables and web views.
     */
    scrollToVisible: function () {
    },
    /**
     * Taps the specified element.
     */
    tap: function () {
    },
    /**
     * Performs the specified gesture on the specified element using a dictionary to specify gesture attributes.
     * @param {{
     *   tapCount: Number,
     *   touchCount: Number,
     *   duration: Number,
     *   tapOffset: Point
     * }} options - A dictionary that specifies characteristics of the gesture. Valid keys are as follows:
     * * tapCount. The number of taps that compose the specified gesture. The default value is 1 (single tap).
     * * touchCount. The number of touches to use in the specified gesture. (Effectively, the number of fingers a user
     * would use to make the specified gesture.) The default touch count value is 1.
     * * duration. The length of hold time for the specified gesture. The default duration value for a tap is 0.
     * The default value for touch-and-hold gestures (such as drag, pinch open, and pinch close) is 1.
     * * tapOffset. The offset to use for the specified tap gesture. The default offset value is {x:0.0, y:0.0}.
     * See the discussion for details.
     */
    tapWithOptions: function (options) {
    },
    /**
     * Touches the specified element and holds for the specified duration.
     * @param {Number} duration - The length of time to hold the touch on the element, in seconds.The default duration
     * value for a tap is 0. The default value for touch-and-hold gestures (such as drag, pinch open, and pinch close) is 1.
     */
    touchAndHold: function (duration) {
    },
    /**
     * Performs a two-finger (two-touch) tap on this element.
     */
    twoFingerTap: function () {
    },
    /**
     * Use these methods to determine whether an element is still valid.
     * @returns {Boolean}
     */
    checkIsValid: function () {
        return false;
    },
    /**
     * Determines whether the specified element receives keyboard input.
     * @returns {Number} - Returns 1 if the specified element is the receiver of keyboard input, 0 if not.
     * If the status is not available, it returns null.
     */
    hasKeyboardFocus: function () {
        return 0;
    },
    /**
     * Determines whether the specified element is enabled.
     * @returns {Number} - Returns 1 if the specified element is enabled, 0 if not. If the status is not available, it returns null.
     */
    isEnabled: function () {
        return 0;
    },
    /**
     * Returns the specified element’s validity status as of the most recent access.
     * @returns {Boolean}
     */
    isValid: function () {
        return false;
    },
    /**
     * Determines whether the specified element is visible on the screen.
     * @returns {Number} - Returns 1 if the user interface element represented by the specified element is visible on screen,
     * 0 if not. If the status is not available, it returns null.
     */
    isVisible: function () {
        return 0;
    },
    /**
     * Waits for the specified element to become invalid.
     * @returns {Boolean}
     */
    waitForInvalid: function () {
        return false;
    },
    /**
     * Returns a string containing the label attribute of the element.
     * @returns {String}
     */
    lable: function () {
        return "";
    },
    /**
     * Returns a string containing the name attribute of the element.
     * @returns {String}
     */
    name: function () {
        return "";
    },
    /**
     * Returns a string containing a value attribute specific to the type of element.
     * @returns {String}
     */
    value: function () {
        return "";
    },
    /**
     * Returns an element whose name attribute matches a specified string.
     * @param {String} name - A string containing the name to test for.
     * @returns {UIAElement}
     */
    withName: function (name) {
        return new UIAElement;
    },
    /**
     * Returns the element matching the specified criteria.
     * @param {String} predicateString - A string specifying the match criteria.
     * @returns {UIAElement}
     */
    withPredicate: function (predicateString) {
        return new UIAElement;
    },
    /**
     * Returns the element containing the specified property with the specified value.
     * @param {Object} value - A string specifying the value that the specified property, if it exists, should match.
     * @param {String} key - A string specifying the property to test for.
     * @returns {UIAElement}
     */
    withValueForKey: function(value, key) {
        return new UIAElement;
    },
    /**
     * Logs information about the specified element.
     */
    logElement: function() {},
    /**
     * Logs information about the specified element and all of its subelements.
     */
    logElementTree: function() {}
};
