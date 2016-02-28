/**
 * The UIALink class allows access to, and control of, link elements.
 * @constructor
 */
var UIALink = function () {

};

UIALink.prototype = UIAElement.prototype;

/**
 * Returns a string containing a URL.
 * @returns {String}
 */
UIALink.prototype.url = function () {
    return "http://host.com";
};