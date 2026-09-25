/** Reject runtime-skipped tests even when conditional skips evade static lint. */
export default class NoSkippedTests {
  onTestRunEnd(modules) {
    const skipped = modules.flatMap((module) =>
      [...module.children.allTests()].filter((test) => test.result().state === "skipped"),
    );
    if (skipped.length)
      throw new Error(
        `Skipped/todo tests require a tracked exception: ${skipped.map((test) => test.fullName).join(", ")}`,
      );
  }
}
