/**
 * The UIALogger class provides test and error information on retrieval functionality.
 * @constructor
 */
var UIALogger = function () {

};

UIALogger.prototype = {
    /**
     * Logs a message and indicates a test has started.
     * @param {String} message - A string containing the message to log.
     */
    logStart: function (message) {
    },
    /**
     * Logs a message and indicates a test has completed unsuccessfully.
     * @param {String} message
     */
    logFail: function (message) {
    },
    /**
     * Logs a message and indicates a test has terminated abnormally.
     * @param {String} message - A string containing the message to log.
     */
    logIssue: function (message) {
    },
    /**
     * Logs a message and indicates a test has completed successfully.
     * @param {String} message - A string containing the message to log.
     */
    logPass: function (message) {
    },
    /**
     * Logs the specified message and sets the severity level to debug.
     * @param {String} message - A string containing the message to log.
     */
    logDebug: function (message) {
    },
    /**
     * Logs the specified message and sets the severity level to error.
     * @param {String} message - A string containing the message to log.
     */
    logError: function (message) {
    },
    /**
     * Logs the specified message and sets the severity level to message.
     * @param {String} message - A string containing the message to log.
     */
    logMessage: function (message) {
    },
    /**
     * Logs the specified message and sets the severity level to warning.
     * @param {String} message - A string containing the message to log.
     */
    logWarning: function (message) {
    },
};
