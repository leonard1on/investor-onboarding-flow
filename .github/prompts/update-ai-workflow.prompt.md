---
description: "Generates or updates AI_WORKFLOW.md from chat context"
agent: "agent"
---

Analyze our chat history in this session and rewrite `#file:AI_WORKFLOW.md` to reflect our actual work so far. Make sure update the content according to all new prompts provided without eliminating or updating any existing content by adding information to the correct area. Ensure that the document is comprehensive and accurately reflects the work done in this session. Do not include update-ai-workflow prompt invocations in the summary.

Ensure it covers:
1. **Tools**: VS Code + GitHub Copilot Chat.
2. **Prompts Summary**: Retelling of key prompts used in this session in a summarized format, without listing every individual prompt use. Mainly a summary of how AI prompts were used in the changes made (not a list). Make sure to detail based on the prompts and what was created from them, not explaining what each component is about.
3. **Decisions**: What you proposed after receiving a prompt that I accepted, rejected, or modified, with rationale.
4. **AI Mistakes/Suboptimal Output**: Concrete instances where code was corrected or refined in a summarized format.
5. **Code Split**: Estimated ratio of AI-generated vs. hand-written/hand-edited code in the components.

Directly edit `#file:AI_WORKFLOW.md` with the full updated Markdown document.