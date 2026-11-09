# AI Workflow

## Tools

- VS Code
- GitHub Copilot Chat

## Work Summary
- Working document used: .github\prompts\update-ai-workflow.prompt.md

By using an update prompt, this document was able to be created which roughly summarizes the prompts utilized during the creation of this challenge, decisions made in favor and against AI, mistakes it made that had to be fixed and lastly a rough estimate code split based only on the the changes made with the prompts alone, as Copilot couldn't check exactly what part of the whole code was hand written.

Most of the work done by AI was the creation of boilerplates which resembled already created code but with little variations. This helped build the different components much faster as a huge initial step was swiftly made by Copilot using another file as a blueprint. The prompts done with the AI were mostly conversational (besides the update AI_WORKFLOW document), as it was just used when the situation demanded it

## Prompts Summary

Prompts were used to scaffold the account-creation view, add a required-field check during form submission, and investigate why required-field helper text was not appearing. The investigation identified that native browser validation from the HTML `required` attributes can prevent the form's submit handler from running; this prevents the React validation state from being set. The disabled Continue button also prevents submission until consent is checked. The proposed `noValidate` form setting was diagnostic guidance and was not applied in the code during that exchange.

Further prompts requested boilerplate for a step-based investor-profile wrapper, a basic MUI Dialog, and radio-question components consistent with the annual-household view. Follow-up prompts refined the qualified-purchaser display by sizing and aligning its tooltip icon and replacing literal `/n` sequences with JSX line breaks. These requests resulted in new component scaffolds or targeted presentation edits in their respective view/component files.

More recent prompts requested basic React and MUI boilerplates for identity verification and navigation. The citizenship view was adjusted to support selecting multiple countries and notify its parent with the selected list. The tax-residence and employment views were scaffolded as controlled MUI dropdowns, and the citizenship list was expanded to include several commonly selected countries including Malta. A basic MUI navbar displaying the WillowWealth brand was also added. Follow-up investigation addressed the MUI out-of-range warning for an initially empty tax-residence selection.

Redux work then connected the onboarding screens to the account slice. A store was created with the account reducer; account creation dispatches user information before navigation. The investor-profile flow reads the saved first name for its welcome interstitial and saves the annual income, net worth, and qualified-purchaser answers to their corresponding slice fields. Shared option maps were added to `src/services/utils.tsx` and reused to display and persist income/net-worth labels. Identity verification similarly saves citizenship, tax residence, and employment status on its final step. A final `investScreen` component reads and logs the user, investor-profile, and identity-verification data from the store, while omitting the password.

The mocked onboarding submission was then moved from an in-memory RTK Query `fakeBaseQuery` to an HTTP-shaped request intercepted by MSW. `accountApi` now uses `fetchBaseQuery` to send `POST /api/onboarding` with the full account object as its JSON body. MSW handlers return a delayed success response or a simulated 500 for the test email `fail@example.com`; the browser worker starts in development before React renders. The API reducer and middleware are registered in the Redux store, and the invest screen calls the generated mutation and displays loading, success, and error states.

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
- Account creation saves the user fields before navigating. Investor-profile answers are converted from numeric radio values to the labels in shared option maps and saved in their matching slice fields. The identity-verification final action saves all three selected answers in one action.
- The final invest-screen scaffold logs all three reducer sections for inspection, but excludes the user's password from console output.
- An initial mock design with `fakeBaseQuery` was recognized as an in-memory simulation rather than an HTTP request. To let MSW intercept the endpoint, the implementation was changed to `fetchBaseQuery` and an actual browser `fetch` request to `/api/onboarding`.
- MSW was already installed and its generated service worker file already existed, so no additional dependency installation or worker generation was needed. A deterministic test email (`fail@example.com`) is used to exercise the error response; other account submissions receive a delayed 201 success response.
- The earlier decision not to add React-Redux hooks/provider applied when only direct store access was required. React-Redux was later present and used for the invest screen's `useSelector`; the existing `<Provider>` in `main.tsx` supplies the store to the component.

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
- The initial investor-profile conversion helper functions were not the requested representation. After clarification, they were replaced by explicit number-to-label maps (for example, key `1` maps to `"Under $200,000"`), and the radio options and slice-save logic were updated to use those maps.
- A reactive Redux selector was initially suggested for reading the first name, but the user clarified that a one-time store read was sufficient. The implementation uses `store.getState()`; React-Redux hooks/provider are unnecessary for this current read-only need.
- Identity-verification data was first only logged during earlier iteration. It was subsequently changed to dispatch `setIdentityVerification` on the final screen action, with the final button enabled and relabeled "Save".
- The first implementation of the requested mocked endpoint only constructed an in-memory request object and always returned success, so it could not be intercepted by MSW or exercise the UI error path. It was refined to use `fetchBaseQuery`, real HTTP semantics intercepted by MSW, and a deterministic failure response.

## Estimated Code Split

Based on the available conversation, the initial component scaffold and submit guard were AI-generated. The form fields and later validation UI appear to have been developed or edited after those changes. An approximate split for the account-creation work is **20% AI-generated and 80% hand-written or hand-edited**. This is an estimate based on conversation history, not a line-by-line authorship audit.

For the later investor-profile and interstitial work, Copilot generated the boilerplate scaffolds based on already created work done by hand beforhand, while the application logic and all subsequent changes were done by hand. Exact line-by-line authorship is unavailable, so the overall authorship split cannot be determined reliably.

The identity-verification views and navbar were also created or substantially scaffolded from prompts. The citizenship list expansion and details such as the employment options and dropdown placeholder were AI-edited in response to user requirements. Based on this conversation alone, these newer component changes are estimated to be **85% AI-generated and 15% hand-written/hand-edited**; this is approximate and does not account for edits made outside the chat.

The store setup, slice dispatch wiring, shared option maps, and invest-screen logging scaffold were generated and iterated from prompts. The user clarified the preferred simple store access and number-to-label map structure. An approximate authorship estimate for this Redux integration and its related screen changes is **85% AI-generated and 15% hand-written/hand-edited**, based only on the visible conversation.

The MSW endpoint implementation, request handler, worker startup, and mutation UI integration were also generated and iterated through prompts. An approximate authorship split for this API-mocking change is **90% AI-generated and 10% hand-written/hand-edited**, based on the visible chat and not a line-by-line audit.