---
description: "Generates or updates AI_WORKFLOW.md from chat context"
agent: "agent"
---

Analyze our chat history in this session and rewrite `#file:AI_WORKFLOW.md` to reflect our actual work so far. Make sure update the content according to all new prompts provided without eliminating any existing content. Ensure that the document is comprehensive and accurately reflects the work done in this session. Do not include update-ai-workflow prompt invocations in the summary.

Ensure it covers:
1. **Tools**: VS Code + GitHub Copilot Chat.
2. **Prompts Summary**: Chronological retelling of key prompts used in this session in a summarized format.
3. **Decisions**: What you proposed that I accepted, rejected, or modified, with rationale.
4. **AI Mistakes/Suboptimal Output**: Concrete instances where code was corrected or refined.
5. **Code Split**: Estimated ratio of AI-generated vs. hand-written/hand-edited code.

Directly edit `#file:AI_WORKFLOW.md` with the full updated Markdown document.