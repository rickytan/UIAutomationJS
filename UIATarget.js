"use strict";

/**
 * @const
 */
var DEVICE_ORIENTATION = {
    UIA_DEVICE_ORIENTATION_UNKNOWN: 0,
    UIA_DEVICE_ORIENTATION_PORTRAIT: 1,
    UIA_DEVICE_ORIENTATION_PORTRAIT_UPSIDEDOWN: 2,
    UIA_DEVICE_ORIENTATION_LANDSCAPELEFT: 3,
    UIA_DEVICE_ORIENTATION_LANDSCAPERIGHT: 4,
    UIA_DEVICE_ORIENTATION_FACEUP: 5,
    UIA_DEVICE_ORIENTATION_FACEDOWN: 6
};

/**
 * The UIATarget class represents high-level user interface elements of the system under test (SUT)—that is,
 * your app, the iOS, and the connected device on which they’re running. Your test scripts,
 * written in JavaScript and running in conjunction with the UI Automation instrument,
 * use this class and related UI Automation classes to exercise the SUT and log results.

 * For the sake of simplicity and consistency with other Apple documentation,
 * this document describes device operations and user interface actions as though they were performed by a user.
 * In practice, the Automation instrument simulates these operations and actions.

 * For an explanation of how to use this class and related classes, see Automating UI Testing in Instruments User Guide.
 * @constructor
 */
var UIATarget = function () {
};

/**
 * Returns an object representing the system under test (SUT).
 * @static
 * @returns {UIATarget}
 */
UIATarget.localTarget = function () {
    return new UIATarget();
};

/**
 * Called by UI Automation to allow your script to respond to alerts.
 * @param {UIAAlert} alert - An object representing the alert encountered.
 * @type {Function}
 * @static
 * @returns {Boolean} - Returns true if successful. Returns false to cause the default alert handler to run.
 */
UIATarget.onAlert = function (alert) {
    return false;
};

UIATarget.prototype = {
    /**
     * Returns an object representing the machine that is host to the current target.
     * @returns {UIAHost}
     */
    host: function () {
        return new UIAHost();
    },
    /**
     * Renders your app inactive for the specified duration.
     * @param {Number} duration - The time, in seconds, for the app to remain inactive.
     * @returns {Boolean}
     */
    deactivateAppForDuration: function (duration) {
        return false;
    },
    /**
     * Returns an object representing your app.
     * @returns {UIAApplication}
     */
    frontMostApp: function () {
        return new UIAApplication();
    },
    /**
     * Returns the device model. Examples of model strings are iPhone and iPod touch.
     * @returns {String}
     */
    model: function () {
        return new String();
    },
    /**
     * Returns the device name.
     * @returns {String}
     */
    name: function () {
        return new String();
    },
    /**
     * Returns the rectangle surrounding the device’s main screen.
     * @returns {Rect}
     */
    rect: function () {
        return new Rect();
    },
    /**
     * Returns the name of the operating system running on the device.
     * @returns {String}
     */
    systemName: function () {
        return new String();
    },
    /**
     * Returns the current version of the operating system running on the device.
     * @returns {String}
     */
    systemVersion: function () {
        return new String();
    },
    /**
     * Returns the current orientation of the device.
     * @returns {Number}
     */
    deviceOrientation: function () {
        return DEVICE_ORIENTATION.UIA_DEVICE_ORIENTATION_UNKNOWN;
    },
    /**
     * Changes the device orientation to the specified new deviceOrientation value.
     * @param {Number} orientation
     */
    setDeviceOrientation: function (orientation) {
    },
    /**
     * Specifies a change in device’s latitude and longitude.
     * @param {{
     *   latitude: Number,
     *   longitude: Number
     * }} coordinates
     * @returns {Boolean}
     */
    setLocation: function (coordinates) {
        return false;
    },
    /**
     * Specifies a change in the device’s latitude, longitude, and other characteristics.
     * @param {{
     *   latitude: Number,
     *   longitude: Number
     * }} coordinates
     * @param {{
     *   altitude: Number,
     *   horizontalAccuracy: Number,
     *   verticalAccuracy: Number,
     *   course: Number,
     *   speed: Number
     * }} options
     * @returns {Boolean}
     */
    setLocationWithOptions: function (coordinates, options) {
        return false;
    },
    /**
     * Presses the volume down hardware button.
     */
    clickVolumeDown: function () {
    },
    /**
     * Presses the volume up hardware button.
     */
    clickVolumeUp: function () {
    },
    /**
     * Holds down the volume down hardware button for the specified duration.
     * @param {Number} duration
     */
    holdVolumeDown: function (duration) {
    },
    /**
     * Presses and holds the volume up hardware button for the specified duration.
     * @param {Number} duration
     */
    holdVolumeUp: function (duration) {
    },
    /**
     * Locks the device, using a lock event, for the specified duration.
     * @param {Number} duration
     */
    lockForDuration: function (duration) {
    },
    /**
     * Locks the device, using a lock event.
     */
    lock: function () {
    },
    /**
     * Simulates a shake action on the device. The shake action triggers a UIEvent of
     * type UIEventSubtypeMotionShake, but does not affect the accelerometer itself.
     */
    shake: function () {
    },
    /**
     * Unlocks the device using an unlock event followed by a drag of the slider.
     */
    unlock: function () {
    },
    /**
     * Drags from a specified starting screen location to a specified ending
     * screen location, for a specified length of time.
     * @param {(Rect|Point)} fromPointObject - The rect or point from which the drag action is to begin.
     * @param {(Rect|Point)} toPointObject - The rect or point at which the drag action is to end.
     * @param {Number} duration - The length of time, in seconds, between starting and stopping the gesture.
     */
    dragFromToForDuration: function (fromPointObject, toPointObject, duration) {
    },
    /**
     * Double-taps the specified element or at the specified screen location.
     * @param {(Rect|Point|UIAElement)} tapPointObject - A rect, point, or UIAElement.
     */
    doubleTap: function (tapPointObject) {
    },
    /**
     * Flicks from the specified starting screen location to the specified ending screen location.
     * @param {(Rect|Point)} fromPointObject - The rect or point from which the flick action is to begin.
     * @param {(Rect|Point)} toPointObject - The rect or point at which the flick action is to end.
     */
    flickFromTo: function (fromPointObject, toPointObject) {
    },
    /**
     * Pinches (performs a pinch-close gesture) from a specified starting screen
     * location to a specified ending screen location, for a specified length of time.
     * @param {(Rect|Point)} fromPointObject - The rect or point from which the pinch-close action is to begin.
     * @param {(Rect|Point)} toPointObject - The rect or point at which the pinch-close action is to end.
     * @param {Number} duration - The length of time, in seconds, between starting and stopping the gesture.
     */
    pinchCloseFromToForDuration: function (fromPointObject, toPointObject, duration) {
    },
    /**
     * Stretches (performs a pinch-open gesture) from a specified starting screen
     * location to a specified ending screen location, for a specified length of time.
     * @param {(Rect|Point)} fromPointObject - The rect or point from which the pinch-open action is to begin.
     * @param {(Rect|Point)} toPointObject - The rect or point at which the pinch-open action is to end.
     * @param {Number} duration - The length of time, in seconds, between starting and stopping the gesture.
     */
    pinchOpenFromToForDuration: function (fromPointObject, toPointObject, duration) {
    },
    /**
     * Performs a rotation gesture at the specified location.
     * @param {Point} location - The point object at center of the rotation gesture,
     * with properties for x and y, corresponding to the analogous CGPoint Cocoa structure.
     * The relevant coordinates are screen-relative and are adjusted to account
     * for device orientation.
     * @param {{
     *   duration: Number,
     *   radius: Number,
     *   rotation: Number,
     *   touchCount: Number
     * }} options - A dictionary that specifies characteristics of the rotation gesture. Valid keys are as follows:
     * * duration. The length of hold time, in seconds, for the specified gesture. The default duration value is 1.
     * * radius. The distance in points from the center to the edge of the circular path.
     * * rotation. The length of rotation in radians. The default is pi (π).
     * * touchCount. The number of touches to use in the specified gesture (effectively, the number of fingers a user
     * would use to make the specified gesture.) Valid values are 1 to 5. The default is 2.
     */
    rotateWithOptions: function (location, options) {
    },
    /**
     * Taps the specified element or the specified screen location.
     * @param {(Rect|Point|UIAElement)} tapPointObject - A rect, point, or UIAElement.
     */
    tap: function (tapPointObject) {
    },
    /**
     * Taps the specified element with the specified options.
     * @param {(Rect|Point|UIAElement)} tapPointObject - A rect, point, or UIAElement.
     * @param {{
     *   tapCount: Number,
     *   touchCount: Number,
     *   duration: Number
     * }} options - A dictionary that specifies characteristics of the gesture. Valid keys are as follows:
     * * tapCount. The number of taps that compose the specified gesture. The default value is 1 (single tap).
     * * touchCount. The number of touches to use in the specified gesture. (Effectively, the number of fingers a user
     * would use to make the specified gesture.) The default touch count value is 1.
     * * duration. The length of hold time for the specified gesture. The default duration value for a tap is 0.
     */
    tapWithOptions: function (tapPointObject, options) {
    },
    /**
     * Touches the specified element, or the specified screen location, and holds for the specified duration.
     * @param {(Rect|Point|UIAElement)} tapPointObject - A rect, point, or UIAElement.
     * @param {Number} duration - The length of time, in seconds, to hold the touch.
     */
    touchAndHold: function (tapPointObject, duration) {
    },
    /**
     * Takes a screen shot of the specified rectangular portion of the device screen.
     * @param {Rect} rect - The rect that defines the area of the screen to capture.
     * @param {String} imageName - A string to use as the name for the resultant image file.
     */
    captureRectWithName: function (rect, imageName) {
    },
    /**
     * Takes a screen shot of the entire device screen.
     * @param {String} imageName - A string to use as the name for the resultant image file
     */
    captureScreenWithName: function (imageName) {
    },
    /**
     * Retrieves the previous timeout value from a stack, restores it as the current timeout value, and returns it.
     * @returns {Number} - The timeout value last stored on the stack with pushTimeout.
     */
    popTimeout: function () {
        return 0.0;
    },
    /**
     * Stores the current timeout value on a stack and sets a new timeout value.
     * @param {Number} timeoutValue - The length of the grace period, in seconds.
     */
    pushTimeout: function (timeoutValue) {
    },
    /**
     * Sets a new timeout value.
     * @param {Number} timeout - A number representing the length,in seconds, of the grace period.
     */
    setTimeout: function (timeout) {
    },
    /**
     * Returns the current timeout value.
     * @returns {Number}
     */
    timeout: function () {
        return 0.0;
    },
    /**
     * Delays script **execution** for the specified time.
     * @param {Number} timeInterval - The time to delay, in seconds.
     * @returns {Boolean}
     */
    delay: function (timeInterval) {
        return false;
    }
};
