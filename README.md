pubsub-js-exception-test
========================

A small example of exception throwing using PubSubJS

This example uses the Web Audio API.
Once initialized it attempts to stop an oscillator that has not been started, throwing an error.
The error on this line differs on different browsers due to the differences in Web Audio implementations.
The behavior we're most interested in occurs in Chrome; the stack trace is not present.
