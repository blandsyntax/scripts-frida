Java.perform(function () {
    const Build = Java.use("android.os.Build");
    Build.TAGS.value = "release-keys";

    const Paths = Java.use("java.io.File");
    Paths.exists.implementation = function () {
        const name = this.getAbsolutePath();
        if (name.includes("su") || name.includes("magisk")) {
            console.log("[+] Hiding root path: " + name);
            return false;
        }
        return this.exists.call(this);
    };
});

