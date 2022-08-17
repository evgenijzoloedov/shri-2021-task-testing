const {spawn} = require("child_process");
const {polling, ping} = require("ping-server");

module.exports = (hermione, opts) => {
    const pingUrl = "http://localhost:4444/wd/hub/status";
    const {pollInterval = 500, maxTime = 5000} = opts;

    const stopSeleniumServer = () => {
        opts.seleniumSubprocess.kill();
    };

    hermione.on(hermione.events.RUNNER_START, async () => {
        if (await ping(pingUrl)) {
            return;
        }
        opts.seleniumSubprocess = spawn("selenium-standalone", ["start"]);
        opts.seleniumSubprocess.on("error", (e) => {
            stopSeleniumServer();
            process.exit(1);
        });
        await polling(
            pingUrl,
            maxTime,
            pollInterval,

        );
    });

    hermione.on(hermione.events.RUNNER_END, () => {
        if (opts.seleniumSubprocess) {
            return new Promise((resolve) => {
                opts.seleniumSubprocess.on("exit", resolve);
                stopSeleniumServer();
            });
        }
    });
};
