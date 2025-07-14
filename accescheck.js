Java.perform(function () {
    const AccessibilityServiceInfo = Java.use("android.accessibilityservice.AccessibilityServiceInfo");

    AccessibilityServiceInfo.getId.implementation = function () {
        console.log("AccessibilityServiceInfo been accessed twin.");
        return this.getId();
    };
});

