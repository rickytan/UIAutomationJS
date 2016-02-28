/**
 * The UIAHost class allows your script to exercise limited control over the Automation instrument process running on the host computer.
 * @constructor
 */
var UIAHost = function () {
};

UIAHost.prototype = {
    /**
     * Executes a task from the Automation instrument process running on the host.
     * @param {String} path - The pathname of the code to run, relative to the root level of the host’s boot drive.
     * @param {Array} args - An array that specifies the arguments for the code to be run.
     * @param {Number} timeout - The length, in seconds, of the grace period in which the task is expected to execute, before script execution resumes.
     * @returns {Object}
     */
    performTaskWithPathArgumentsTimeout: function (path, args, timeout) {
        return new {
            exitCode: 0,
            stdout: "",
            stderr: ""
        };
    }
}
