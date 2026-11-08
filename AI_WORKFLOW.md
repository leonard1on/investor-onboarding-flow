# AI Workflow

## Tools

- VS Code
- GitHub Copilot Chat

## Work Summary

The work focused on the account-creation view in `src/views/accountCreation/accountCreation.tsx`. The initial request was to add a basic React template containing a `div`; a small default-exported `AccountCreation` component was created. The view was subsequently expanded into an account-creation form with first name, last name, email, password visibility control, privacy/terms consent, and a Continue button.

The form uses controlled state for its text fields and consent checkbox. A required-field check was added to `handleSubmit`, and validation state plus field-level `error` and `helperText` props were used to display missing-field feedback after submission.

## Prompts Summary

Prompts were used to scaffold the account-creation view, add a required-field check during form submission, and investigate why required-field helper text was not appearing. The investigation identified that native browser validation from the HTML `required` attributes can prevent the form's submit handler from running; this prevents the React validation state from being set. The disabled Continue button also prevents submission until consent is checked. The proposed `noValidate` form setting was diagnostic guidance and was not applied in the code during that exchange.

The workflow-update prompt was also used to summarize the work in this document.

## Decisions

- The account-creation view was kept as a straightforward React component rather than introducing a larger form abstraction.
- Required checks were added in `handleSubmit`, with whitespace-only values rejected for names and email.
- Existing HTML `required` attributes were retained alongside the custom helper-text validation. The follow-up diagnosis explained the interaction between browser-native validation and the custom submit handler; disabling native validation with `noValidate` remains a suggested next step, not an implemented change.
- Consent remains required to continue because the Continue button is disabled until the checkbox is selected.
- A build was suggested to verify the initial component, but permission to run it was denied, so no build result was obtained.

## AI Mistakes and Refinements

- The first submit guard checked fields and consent before the form's later custom helper-text validation was present. The form was subsequently refined with validation state and field-specific messages; the final visible handler checks the four text fields.
- The helper-text issue was initially not addressed by changing the code. Inspection showed the cause was browser-native constraint validation preventing `handleSubmit` from running, rather than a failure in the MUI `helperText` property itself. The recommended `noValidate` fix has not yet been applied.
- Build validation could not be completed because the user denied permission to run the build command.

## Estimated Code Split

Based on the available conversation, the initial component scaffold and submit guard were AI-generated. The form fields and later validation UI appear to have been developed or edited after those changes. An approximate split for the account-creation work is **20% AI-generated and 80% hand-written or hand-edited**. This is an estimate based on conversation history, not a line-by-line authorship audit.