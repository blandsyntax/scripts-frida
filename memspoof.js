Java.perform(function () {
    const ActivityManager = Java.use("android.app.ActivityManager");
    const MemoryInfo = Java.use("android.app.ActivityManager$MemoryInfo");

    ActivityManager.getMemoryInfo.implementation = function (memInfoObj) {
        // Call the original method first so the object is initialized
        this.getMemoryInfo(memInfoObj);

        // Spoof the memory info fields
        memInfoObj.availMem.value = 5 * 1024 * 1024; // 5MB available RAM
        memInfoObj.lowMemory.value = true;           // Signal low memory condition
        memInfoObj.threshold.value = 10 * 1024 * 1024; // Set threshold to 10MB

        console.log("[+] getMemoryInfo() hooked");
        console.log("    → Reporting availMem: " + memInfoObj.availMem.value + " bytes");
        console.log("    → Reporting lowMemory: " + memInfoObj.lowMemory.value);
        console.log("    → Reporting threshold: " + memInfoObj.threshold.value + " bytes");
    };
});

