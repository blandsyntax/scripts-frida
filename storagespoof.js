Java.perform(function () {
    const StatFs = Java.use("android.os.StatFs");
    StatFs.getAvailableBytes.implementation = function () {
        console.log("[+] Spoofing available storage: 1MB");
        return 1 * 1024 * 1024;
    };
});

