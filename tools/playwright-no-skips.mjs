/** Make skipped browser tests fail CI instead of silently weakening the gate. */
export default class NoSkippedBrowserTests {
  onEnd(result) {
    if (result.status === "passed" && this.skipped) return { status: "failed" };
  }
  onTestEnd(test, result) {
    if (result.status === "skipped") {
      this.skipped = true;
      console.error(`Skipped browser test requires a tracked exception: ${test.title}`);
    }
  }
}
