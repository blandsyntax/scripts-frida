Java.perform(function () {
    // hooking stuff up brev 
    const System = Java.use("java.lang.System");
    System.exit.implementation = function (code) {
        console.log("[!] Intercepted System.exit(" + code + ")");
        console.log("    →Stopping the app exit.");
        // Do nothing — should prevent the exit (ig)
    //
    };

    // Hook Process.killProcess(int pid(only))
    const Process = Java.use("android.os.Process");
    Process.killProcess.implementation = function (pid) {
        console.log("[!] Intercepted killProcess(" + pid + ")");
        console.log("    → Preventing the app from self-kill.");
        // Idk just leave it as it is ig 
    };

    // Stop Crash Reporting 
    try {
        const Crashlytics = Java.use("com.google.firebase.crashlytics.FirebaseCrashlytics");
        Crashlytics.recordException.overload("java.lang.Throwable").implementation = function (e) {
            console.log("[!] Intercepted FirebaseCrashlytics.recordException:");
            console.log("    → Exception was: " + e.toString());
            // Skip sending
        };
    } catch (err) {
        console.log("[i] Crashlytics not loaded in this app.");
    }
});

