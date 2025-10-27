### Title
CI Workflow Failure: Formatting and Error Checks Needed

### Body
The CI workflow run failed at [this job](https://github.com/roninbuilders/contracts/actions/runs/18812186866/job/53675135337). The error details indicate that some issues occurred during the checks, leading to an exit code 1. The logs suggest the following:

- Checked 19 files in 115ms. No fixes applied.
- Found 1 error.
- Exit code 1 was returned by the process.

### Steps to Reproduce
1. Trigger a CI workflow run.
2. Observe the error message and logs.

### Suggested Solution
- Update the CI workflow to include a formatting step before running checks.
- Review the existing checks to ensure robustness and identify the root cause of the error.

### Reference
[Failed Job Run Logs](https://github.com/roninbuilders/contracts/actions/runs/18812186866/job/53675135337)