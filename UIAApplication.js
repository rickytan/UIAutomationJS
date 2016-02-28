/**
 * The UIAApplication class allows access to, and control of, app-level user interface elements.
 * @constructor
 */
var UIAApplication = function() {

};
UIAApplication.prototype = {
    /**
     * Returns the action sheet.
     * @returns {UIAActionSheet}
     */
    actionSheet: function() {
        return new UIAActionSheet;
    },
    /**
     * Returns the alert.
     * @returns {UIAAlert}
     */
    alert: function() {
        return new UIAAlert;
    },
    /**
     * Returns a string containing the app’s bundle ID in reverse-DNS format.
     * @returns {String}
     */
    bundleID: function() {
        return "";
    },
    /**
     * Returns the app’s edit menu.
     * @returns {UIAEditingMenu}
     */
    editingMenu: function() {
        return new UIAEditingMenu;
    },
    /**
     * Returns the interface orientation.
     * @returns {Number}
     */
    interfaceOrientation: function() {
        return 0;
    },
    /**
     * Returns the app’s keyboard.
     * @returns {UIAKeyboard}
     */
    keyboard: function() {
        return new UIAKeyboard;
    },
    /**
     * Returns the object that represents the app’s main window.
     * @returns {UIAWindow}
     */
    mainWindow: function() {
        return new UIAWindow;
    },
    /**
     * Returns the app’s navigation bar.
     * @returns {UIANavigationBar}
     */
    navigationBar: function() {
        return new UIANavigationBar;
    },
    /**
     * Returns the app’s navigation bar.
     * @param {String} key - The key representing the preference to be set.
     * @returns {*}
     */
    preferencesValueForKey: function(key) {
        return {};
    },
    /**
     * Sets the value of a specified app user preference.
     * @param {*} value - The new value to set for the specified preference.
     * @param {String} key - The key representing the preference to be set.
     */
    setPreferencesValueForKey: function(value, key) {},
    /**
     * Returns the app’s status bar.
     * @returns {UIAStatusBar}
     */
    statusBar: function() {
        return new UIAStatusBar;
    },
    /**
     * Returns the app’s tab bar.
     * @returns {UIATabBar}
     */
    tabBar: function() {
        return new UIATabBar;
    },
    /**
     * Returns the app’s toolbar.
     * @returns {UIAToolbar}
     */
    toolbar: function() {
        return new UIAToolbar;
    },
    /**
     * Returns a string representing the build version number of the app.
     * @returns {String}
     */
    version: function() {
        return "0.0.0";
    },
    /**
     * Returns an array of objects representing the app’s windows.
     * @returns {UIAElementArray<UIAWindow>}
     */
    windows: function() {
        return new UIAElementArray;
    }
};
