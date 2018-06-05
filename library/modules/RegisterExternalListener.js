'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegisterExternalListener = RegisterExternalListener;
function RegisterExternalListener(methodName, callback) {
    /**
     * LEGACY
     *  bind the function to the window to allow
     *  the user to use the legacy functions
     *  Application.ExternalCall and
     *  Application.ExternalEval.
     */
    window[methodName] = function (parameter) {
        callback(parameter);
    };

    /**
     * Bind the function in the ReactUnityWebGL
     * object so the user can use a JSLib file
     * to make direct calls into React.
     */
    if (typeof window.ReactUnityWebGL === 'undefined') window.ReactUnityWebGL = {};
    window.ReactUnityWebGL[methodName] = function (parameter) {
        callback(parameter);
    };
}