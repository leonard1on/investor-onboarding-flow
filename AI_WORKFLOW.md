# AI Workflow

## Tools

- VS Code
- GitHub Copilot Chat

## Work Summary

The work focused on the account-creation view in `src/views/accountCreation/accountCreation.tsx`. The initial request was to add a basic React template containing a `div`; a small default-exported `AccountCreation` component was created. The view was subsequently expanded into an account-creation form with first name, last name, email, password visibility control, privacy/terms consent, and a Continue button.

The form uses controlled state for its text fields and consent checkbox. A required-field check was added to `handleSubmit`, and validation state plus field-level `error` and `helperText` props were used to display missing-field feedback after submission.

Later work added boilerplate for the investor-profile flow and reusable UI:

- `src/views/investorProfile/investorProfileWrapper.tsx` received a `currentStep` state and conditional placeholders for steps 0–3, with a Next button.
- `src/components/interstitial/interstitial.tsx` received a basic MUI Dialog with open/close state and placeholder content/actions.
- Investor-profile question views were scaffolded with controlled MUI radio groups: four options for annual household and net worth, and two options for qualified purchaser.
- The qualified-purchaser question was refined with a smaller question-mark icon, vertical alignment with its explanatory text, and explicit JSX line breaks in the radio labels.

## Prompts Summary

Prompts were used to scaffold the account-creation view, add a required-field check during form submission, and investigate why required-field helper text was not appearing. The investigation identified that native browser validation from the HTML `required` attributes can prevent the form's submit handler from running; this prevents the React validation state from being set. The disabled Continue button also prevents submission until consent is checked. The proposed `noValidate` form setting was diagnostic guidance and was not applied in the code during that exchange.

Further prompts requested boilerplate for a step-based investor-profile wrapper, a basic MUI Dialog, and radio-question components consistent with the annual-household view. Follow-up prompts refined the qualified-purchaser display by sizing and aligning its tooltip icon and replacing literal `/n` sequences with JSX line breaks. These requests resulted in new component scaffolds or targeted presentation edits in their respective view/component files.

The workflow-update prompt was also used to summarize the work in this document.

## Decisions

- The account-creation view was kept as a straightforward React component rather than introducing a larger form abstraction.
- Required checks were added in `handleSubmit`, with whitespace-only values rejected for names and email.
- Existing HTML `required` attributes were retained alongside the custom helper-text validation. The follow-up diagnosis explained the interaction between browser-native validation and the custom submit handler; disabling native validation with `noValidate` remains a suggested next step, not an implemented change.
- Consent remains required to continue because the Continue button is disabled until the checkbox is selected.
- A build was suggested to verify the initial component, but permission to run it was denied, so no build result was obtained.
- The investor-profile wrapper uses a numeric step state starting at 0, renders four step placeholders, and advances with a Next button capped at step 3.
- The MUI Dialog and radio groups were kept as simple, self-contained boilerplates. The radio components use parent-provided `value` and `onChange` props, matching the annual-household component pattern; the net-worth ranges were left as placeholders.
- The qualified-purchaser radio choices use “Yes” and “No”; their labels were split across lines using `<br />`, and its question-mark icon inherits the surrounding text size and aligns with the tooltip text.

## AI Mistakes and Refinements

- The first submit guard checked fields and consent before the form's later custom helper-text validation was present. The form was subsequently refined with validation state and field-specific messages; the final visible handler checks the four text fields.
- The helper-text issue was initially not addressed by changing the code. Inspection showed the cause was browser-native constraint validation preventing `handleSubmit` from running, rather than a failure in the MUI `helperText` property itself. The recommended `noValidate` fix has not yet been applied.
- Build validation could not be completed because the user denied permission to run the build command.
- An initial dialog-integration glance at the investor-profile wrapper showed an incomplete `<Intersti` fragment in that file. The MUI Dialog boilerplate was created in its own `interstitial.tsx` component, but the incomplete wrapper integration was not resolved as part of the dialog request.
- The first radio boilerplate used internal state and generic options. When a later view was requested to follow the established annual-household format, it was instead implemented with parent-controlled `value`/`onChange` props, consistent with the then-current annual-household component.
- The qualified-purchaser labels initially contained literal `/n` text; these were corrected to JSX `<br />` elements after the user pointed it out. The icon was also adjusted in response to follow-up alignment feedback.

## Estimated Code Split

Based on the available conversation, the initial component scaffold and submit guard were AI-generated. The form fields and later validation UI appear to have been developed or edited after those changes. An approximate split for the account-creation work is **20% AI-generated and 80% hand-written or hand-edited**. This is an estimate based on conversation history, not a line-by-line authorship audit.

For the later investor-profile and interstitial boilerplates, the component scaffolds and targeted icon/label refinements were generated through Copilot prompts; the user supplied requirements and iterated on the output. Exact line-by-line authorship is unavailable. An approximate overall split for those prompted component changes is **85% AI-generated and 15% hand-written/hand-edited**, with the caveat that the estimate reflects only the changes visible in this chat, not all subsequent workspace edits.