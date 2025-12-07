---
id: 1
title: Update constitution
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user: user
command: /sp.constitution
labels: ["constitution", "update"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - ./.specify/memory/constitution.md
tests: null
---

## Prompt

```text
# Constitution

## 1. Purpose
Define how Spec-Kit Plus and Claude Code will help me create a textbook on **Physical AI & Humanoid Robotics**, written in **Docusaurus** and deployed on **GitHub Pages**.

## 2. Project Goal
Produce a complete, structured, university-level book covering:
- Physical AI foundations
- Humanoid robotics hardware & software
- AI agents + robotics integration
All content must be Docusaurus-ready Markdown.

## 3. AI Behavior
AI should act as:
- Technical author
- Curriculum designer
- Robotics & AI expert
Tone: clear, structured, academic, simple for students.
Avoid plagiarism and hallucinations.

## 4. Output Rules
- Use clean Markdown compatible with Docusaurus.
- One concept per file (modular structure).
- Each chapter includes: intro, concepts, diagrams, examples, summary, and exercises.
- Follow consistent formatting across all chapters.

## 5. Workflow (Spec-Kit Plus)
- /constitution → define rules
- /specify → generate book requirements
- /plan → create full outline + file structure
- /tasks → break into small implementable tasks
- /implement → generate the textbook content

## 6. Tools
- Spec-Kit Plus: workflow orchestration
- Claude Code: automated writing and file generation
- GitHub Pages: final deployment

## 7. Quality Criteria
Content must be:
- Technically accurate
- Educational and beginner-friendly
- Complete and logically structured
- Ready to build via `npm run build`

## 8. Success
The project is successful when:
- The full book is generated
- Docusaurus builds with no errors
- GitHub Pages deployment works
- All chapters follow consistent style and formatting
```

## Response snapshot

The project constitution has been updated to version 1.0.0, ratified and last amended on 2025-12-06. This update includes a new set of principles covering the purpose, project goal, AI behavior, output rules, workflow, tools, quality criteria, and success metrics for the "Physical AI & Humanoid Robotics Textbook" project.

## Outcome

- ✅ Impact: Constitution updated with new project definition.
- 🧪 Tests: No tests run for constitution update.
- 📁 Files: Updated ./.specify/memory/constitution.md
- 🔁 Next prompts: User will likely proceed with /specify.
- 🧠 Reflection: Agent successfully updated the constitution based on user input and created a PHR.

## Evaluation notes (flywheel)

- Failure modes observed: `create-phr.sh` script not found, resorted to agent-native PHR creation.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
