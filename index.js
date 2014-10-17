/*jshint strict: true */
/*global $, PubSub, alert */

(function($, PubSub) {
    "use strict";

    // Create Web Audio API context
    function createAudioContext(callback, errback) {
        var ContextClass = (window.AudioContext ||
            window.webkitAudioContext ||
            window.mozAudioContext ||
            window.oAudioContext ||
            window.msAudioContext);
        if (!ContextClass) {
            errback("Web Audio API not available");
        }
        var ctx = new ContextClass();
        callback(ctx);
    }

    $(document).ready(function () {
        PubSub.subscribe("AUDIO READY", function (msg, ctx) {
            var osc = ctx.createOscillator();
            osc.stop();  // throws an error
        });
        createAudioContext(
            function(ctx) {
                PubSub.publishSync("AUDIO READY", ctx);
            },
            function(err) {
                alert(err);
            }
        );
    });
})($, PubSub);