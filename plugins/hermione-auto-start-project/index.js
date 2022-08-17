const { spawn } = require("child_process");
const { polling, ping } = require("ping-server");

module.exports = (hermione, opts) => {
  const {
    startCommand,
    port,
    path,
    maxTime,
    pollInterval
  } = opts;
  const devServerUrl = `http://localhost:${port}${path}`;
  const stopDevServer = () => {
    if (opts.startSubprocess) opts.startSubprocess.kill();
  };
  hermione.on(hermione.events.RUNNER_START, async () => {
    if (await ping(devServerUrl)) {
      return;
    }
    const [executor, ...args] = startCommand.split(" ");
    opts.startSubprocess = spawn(executor, [...args, `PORT=${port}`]);
    opts.startSubprocess.on("error", (e) => {
      stopDevServer();
      process.exit(1);
    });
    try {
      await polling(devServerUrl, maxTime, pollInterval);
    } catch (error) {
      console.error(error)
      stopDevServer();
      process.exit(1);
    }
  });

  hermione.on(hermione.events.RUNNER_END, () => {
    if (opts.startSubprocess) {
      return new Promise((resolve) => {
        opts.startSubprocess.on("exit", resolve);
        stopDevServer();
      });
    }
  });
};
