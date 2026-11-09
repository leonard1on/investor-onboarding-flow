# investor-onboarding-flow :1st_place_medal:
WillowWealth investor onboarding flow challenge project.

## Motivation :question:
It is WillowWealth investor onboarding flow where you create an account, answers a short series of investor-profile and regulatory questions, and lands on a final screen ready to invest.

## Installation and How to run it :runner:
```bash
git clone https://github.com/leonard1on/investor-onboarding-flow.git
cd investor-onboarding-flow
npm install
npm run dev
```
## Decisions and Trade-offs :brain:
- One decision I made early on which I really liked how it turned out, was to make a wrapper component that contained the three steps for a specific feature. This made it possible to have logic separated for each step, but the data and layout in a single managable component. 
- With more time I will definitely have created more detailed CSS files to reuse styles across the application
- I would have added a block to the router to prevent going to further steps of the onboarding without having the information of the user. Obviously to make this perfect it will definitely require some kind of backend data
- Add Regex and validations to the email, passwords.
- One trade-off I had to make to shorten time spent on the app was to use Copilot to create boilerplates based on the first components I made. Since most views were similar, it worked nicely, but I would have preferred to make more reusable form components like the interstitial.
- I would have added a reusable alert Toast for successful, error and warning to the project which appears for a few seconds in a corner. 

## Happy Coding :computer:
