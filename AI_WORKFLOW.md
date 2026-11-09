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

More recent prompts requested basic React and MUI boilerplates for identity verification and navigation. The citizenship view was adjusted to support selecting multiple countries and notify its parent with the selected list. The tax-residence and employment views were scaffolded as controlled MUI dropdowns, and the citizenship list was expanded to include several commonly selected countries including Malta. A basic MUI navbar displaying the WillowWealth brand was also added. Follow-up investigation addressed the MUI out-of-range warning for an initially empty tax-residence selection.

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
- The identity-verification components follow controlled-component patterns: citizenship sends a `string[]` of selected countries, while the tax-residence and employment dropdowns use single selections. The employment options reflect the suggested common statuses. The country list was intentionally kept static and expanded with a small set of common countries, including Malta.
- The navbar was kept as a minimal MUI component with the WillowWealth wordmark rather than adding navigation links not requested.
- For the tax-residence empty-value warning, the select received an explicit empty placeholder option; the user asked to address this directly without requiring a build.

## AI Mistakes and Refinements

- The first submit guard checked fields and consent before the form's later custom helper-text validation was present. The form was subsequently refined with validation state and field-specific messages; the final visible handler checks the four text fields.
- The helper-text issue was initially not addressed by changing the code. Inspection showed the cause was browser-native constraint validation preventing `handleSubmit` from running, rather than a failure in the MUI `helperText` property itself. The recommended `noValidate` fix has not yet been applied.
- Build validation could not be completed because the user denied permission to run the build command.
- An initial dialog-integration glance at the investor-profile wrapper showed an incomplete `<Intersti` fragment in that file. The MUI Dialog boilerplate was created in its own `interstitial.tsx` component, but the incomplete wrapper integration was not resolved as part of the dialog request.
- The first radio boilerplate used internal state and generic options. When a later view was requested to follow the established annual-household format, it was instead implemented with parent-controlled `value`/`onChange` props, consistent with the then-current annual-household component.
- The qualified-purchaser labels initially contained literal `/n` text; these were corrected to JSX `<br />` elements after the user pointed it out. The icon was also adjusted in response to follow-up alignment feedback.
- An initial tax-residence implementation had an inconsistent controlled-value contract: it was treated as a single select in the component while its parent provided an empty string array, and earlier option values were numeric. This could produce MUI's out-of-range warning. The prop and parent state were aligned to a single string country value, then an empty placeholder option was added for the initial value.
- The target for a later request to match the citizenship-verification boilerplate was ambiguous. Rather than guessing between tax residence and employment, the assistant asked which view was intended; the user selected employment.
- The first employment-view boilerplate kept the existing numeric prop contract and used numeric menu values, while later tax-residence selection work used string country names. These are separate single-select data models, but callers must keep their selected value types consistent with the menu options.

## Estimated Code Split

Based on the available conversation, the initial component scaffold and submit guard were AI-generated. The form fields and later validation UI appear to have been developed or edited after those changes. An approximate split for the account-creation work is **20% AI-generated and 80% hand-written or hand-edited**. This is an estimate based on conversation history, not a line-by-line authorship audit.

For the later investor-profile and interstitial work, Copilot generated the boilerplate scaffolds, while the application logic and all subsequent changes were done by hand. Exact line-by-line authorship is unavailable, so the overall authorship split cannot be determined reliably.

The identity-verification views and navbar were also created or substantially scaffolded from prompts. The citizenship list expansion and details such as the employment options and dropdown placeholder were AI-edited in response to user requirements. Based on this conversation alone, these newer component changes are estimated to be **85% AI-generated and 15% hand-written/hand-edited**; this is approximate and does not account for edits made outside the chat.