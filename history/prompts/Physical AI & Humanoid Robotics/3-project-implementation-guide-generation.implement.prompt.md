---
id: 3
title: Project Implementation Guide Generation
stage: implement
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: Physical AI & Humanoid Robotics
branch: main
user: iqra
command: /sp.implement

labels: ["implementation", "guide", "textbook", "research"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- C:\Users\iqra\specs\main\implementation-guide.md
tests:
null
---

## Prompt

```text
/sp.implement/sp.implement

Generate implementation instructions for the entire project defined in the spec and plan:

Project:
“Physical AI & Humanoid Robotics” full textbook (6 chapters)
+ Integrated Research Paper Module on K–12 AI Classroom Efficiency.

------------------------------------------------------------
IMPLEMENTATION REQUIREMENTS
------------------------------------------------------------

1. Create the full folder and file structure:
   /book
     /chapters
        /01-Intro-Physical-AI
        /02-ROS2-Robotic-Nervous-System
        /03-Digital-Twin-Gazebo-Unity
        /04-Isaac-AI-Robot-Brain
        /05-Vision-Language-Action
        /06-Capstone-Autonomous-Humanoid
     /research-paper
     /diagrams
     /code
     /hardware-appendix
     /cloud-appendix
     /assets

2. For each chapter folder, generate:
   - README.md (chapter overview)
   - main.md (full chapter draft placeholder)
   - diagrams-to-add.txt
   - code-examples.md
   - references.md

3. Generate implementation scripts for:
   - Diagrams
   - ROS 2 example code
   - Gazebo world templates
   - Isaac Sim sample scripts
   - VLA (LLM-to-ROS2) pipeline example

4. Generate implementation tasks that:
   - Map exactly to the /sp.tasks output
   - Include command-level instructions
   - Include file paths for each artifact
   - Show where each chapter draft will be written
   - Show how to integrate citations, diagrams, tables

5. Generate implementation plan for the research paper:
   - research-paper/
       - outline.md
       - sources.bib
       - draft.md
       - analysis.md
       - APA-formatting-guide.md
   - Steps for collecting 8+ peer-reviewed sources
   - Steps for evidence extraction
   - Steps for writing 3000–5000 word draft
   - Final formatting instructions

6. Ensure implementation describes:
   - How all folders sync with the plan.md milestones
   - How writers use these folders during each week
   - How to run “specifyplus build” for output

7. Output MUST be in clean Markdown.
8. Output MUST be executable as a full implementation guide.

Return the complete implementation instructions as Markdown.
```

## Response snapshot

A complete implementation guide for the "Physical AI & Humanoid Robotics Textbook + K-12 AI Efficiency Research Module" has been generated and saved to `C:\Users\iqra\specs\main\implementation-guide.md`. The guide details the step-by-step process for setting up the project structure, generating content, integrating various components, and managing the research paper, all aligned with the project's task list and timeline. It includes command-level instructions, file paths, and conceptual outlines for various implementation scripts.

## Outcome

- ✅ Impact: A comprehensive implementation guide for the textbook and research module was created.
- 🧪 Tests: No automated tests were run for implementation guide generation.
- 📁 Files: One implementation guide file created: C:\Users\iqra\specs\main\implementation-guide.md.
- 🔁 Next prompts: Proceed with the implementation by following the generated guide.
- 🧠 Reflection: Successfully generated a detailed implementation guide, covering all user requirements and mapping to previous plan and tasks. Handled the PowerShell script failure for PHR creation by using agent-native tools.

## Evaluation notes (flywheel)

- Failure modes observed: null
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
