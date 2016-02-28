/**
 * Returned by a function with return type UIAElement or UIAElementArray if the requested element is not available after
 * the timeout grace period you specify. This mechanism allows your scripting expressions to complete even if an
 * intermediate function in the expression fails temporarily during the grace period. For example, the following code
 * does not raise an exception if the navigation bar does not exist; instead it returns UIAElementNil.
 * ```
 * var backButton = UIATarget.localTarget().frontMostApp().navigationBar().buttons()["Back"];
 * if (backButton.isValid()) {
 *    backButton.tap();
 * } else {
 *    UIALogger.logError("Could not find 'Back' button!");
 * }
 * ```
 * @const
 */
var UIAElementNil = null;


/**
 * The UIAElementArray class supports operations with arrays containing multiple UIAElement objects.
 * You can search the array by name or key/value pairs, or by custom criteria that you specify using a predicate.
 * For detailed information about using predicates, see Predicates Programming Guide.
 *
 * UIAElementArray supports the traditional shorthand syntax for accessing items in native JavaScript objects:
 *
 * dot reference by element name, for example:
 *
 *     var okButton = buttons.OK;
 *
 * bracket reference by index, for example:
 *
 *     var firstElement = elements[0];
 *
 * bracket reference by element name, for example:
 *
 *     var helloWorldText = staticTexts["Hello World"];
 *
 * It is important to note one potentially confusing limitation in using bracket references by element name.
 * If the name of an element happened to be a number, JavaScript would interpret that name as an index,
 * likely yielding incorrect results. For example, consider this array:
 *
 *     var elements = ["DoIt", "Cancel", "1"];
 *
 * If you attempt to access the third element by name with the bracket reference syntax:
 *
 *     elements()["1"]
 *
 * it is actually treated as a reference to the first element, yielding the first element (named “DoIt”) instead.
 * In cases where this problem might occur, you should use the dot reference syntax instead:
 *
 *     elements().firstWithName("1")
 *
 * @constructor
 * @template T
 */
var UIAElementArray = function () {

};

UIAElementArray.prototype = {
    /**
     * Number of elements
     * @returns {Number}
     */
    get length() {
        return 0;
    },
    /**
     * Returns the first element in the array with this name.
     * @param {String} name - A string whose value is the name of the element match on.
     * @returns {T}
     */
    firstWithName: function (name) {
        return null;
    },
    /**
     * Returns the first element in the array matching the given criteria.
     * @param {String} predicateString - A predicate specifying the criteria to match.
     * @returns {T}
     */
    firstWithPredicate: function (predicateString) {
        return null;
    },
    /**
     * Returns the first element in the array with a value that matches the property key.
     * @param {Object} value
     * @param {String} key
     * @returns {T}
     */
    firstWithValueForKey: function (value, key) {
        return null;
    },
    /**
     * Converts the array into a standard JavaScript array.
     * @returns {Array.<T>}
     */
    toArray: function () {
        return [];
    },
    /**
     * Returns all elements in the array with this name.
     * @param {String} name
     * @returns {UIAElementArray.<T>}
     */
    withName: function (name) {
        return new UIAElementArray;
    },
    /**
     * Returns all elements in the array matching the given.
     * @param predicateString
     * @returns {UIAElementArray.<T>}
     */
    withPredicate: function (predicateString) {
        return new UIAElementArray;
    },
    /**
     * Returns all elements in the array with a value that matches the property key.
     * @param {Object} value - A string specifying the value that the specified property, if it exists, should match.
     * @param {String} key - A string specifying the property to test for.
     * @returns {UIAElementArray.<T>}
     */
    withValueForKey: function (value, key) {
        return new UIAElementArray;
    }
};