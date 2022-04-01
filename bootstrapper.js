import * as NHLAServer from "./bin/server.js";

//? USAGE:
//? node bootstrapper.js 5666
//?                     ^port^

function Main() {
  //* Say hello
  console.log(
    "NHLA - Github/xXPinkkiPoni96Xx <yeaboicheese@gmail.com> - Apache-2.0"
  );

  //* Remove command processor from process arguments
  let argv = process.argv.slice(2);

  if (!argv[0]) {
    console.log("No port was given.");
    process.exit(1);
  }

  //* Start server with given port (this should not return)
  NHLAServer.NHLAServer(parseInt(argv[0]));
}
Main();
