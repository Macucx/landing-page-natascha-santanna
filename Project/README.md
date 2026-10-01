# Project work records

This directory is the repository's lightweight work journal. Keep one Markdown record per feature, defect, or other bounded task, from the first plan through delivery. Start with [INDEX.md](INDEX.md) and copy [TEMPLATE.md](TEMPLATE.md).

## Naming and classification

Use `<Type><NNN>-<short-kebab-case-title>.md`, for example `Feature001-right-side-bar.md`, `Feature002-new-color-scheme.md`, `Feature003-new-logging.md`, and `Issue001-users-cannot-login.md`. These are naming examples, not planned work.

| Prefix | Use |
| --- | --- |
| Feature | Add or extend product behavior |
| Issue | Investigate or fix a defect; this filename is not a GitHub Issue number |
| Refactor | Restructure implementation without intentionally changing behavior |
| Maintenance | Dependencies, tooling, infrastructure, configuration, or repository workflow |
| Documentation | Manuals, architecture documentation, and user/developer guides |
| Research | A requested investigation, comparison, or technical decision |

Number each type independently, using the highest existing number plus one, padded to at least three digits. Search existing records before allocating an ID. Never reuse an ID or renumber history. If concurrent work collides, the later change takes the next free ID and updates its links. Keep the ID stable if the title changes.

## Workflow

1. Read root `AGENTS.md`, applicable directory instructions, this guide, and `INDEX.md`.
2. Reuse the record for the same task. For a new change or requested substantial investigation, copy the template before implementation, allocate an ID, and add a linked index row.
3. Record the desired outcome, scope, acceptance criteria, dependencies, and an ordered checklist. Include specific verification steps; split unrelated requests into separate records.
4. Update the record as work progresses: completed tasks, decisions, affected components, technical implementation, validation, blockers, and remaining work.
5. Commit the record and its index update with the related implementation. Use the repository's existing branch/push rules; never force-push for this workflow.
6. Before reporting completion, reconcile the checklist, acceptance evidence, status, index, and delivery references. If publication is unavailable, state that clearly. Preserve partial progress.

Explain technical behavior, architecture, data flow, interfaces, configuration, error handling, and operational implications in concise English. Include paths when useful. Avoid line-by-line code commentary, large code dumps, raw private logs, credentials, or invented evidence. Record exact validation commands and observed results; explicitly say when a check was not run and why. Link an existing GitHub Issue, PR, or decision rather than duplicating its entire contract. Commit identity can be found through the record's Git history; add PR or commit links when known without creating a self-referential commit loop.

A question answered entirely in chat does not require a record. A request to create/change repository content, fix a problem, or persist a substantial investigation does. A work record does not expand authorization or automatically authorize unrelated backlog tasks.

## Status

| Status | Meaning |
| --- | --- |
| Backlog | Captured; not ready or not selected |
| Ready | Scope and acceptance criteria are clear; dependencies permit starting |
| In Progress | Active implementation or investigation |
| Blocked | Cannot proceed; record the reason and next action |
| Review | Implementation and technical checks complete; required review/acceptance remains |
| Done | Acceptance criteria and required validation/review are satisfied |
| Cancelled | Work deliberately stopped; preserve its reason and history |

Use `Not scheduled` when no deadline was supplied. Never invent a delivery date. Use ISO dates for actual activity and updates. Keep completed records in this directory; `INDEX.md` provides navigation.

## Relationship to existing governance

These records provide a readable plan and technical history. Existing repository-specific authorization, test, review, Git, and release rules continue to govern implementation. Where GitHub Issues/Projects are already canonical, link that work and reflect its authoritative status; a Markdown record cannot bypass it. Do not bulk-migrate old tasks or edit generated queues as part of this setup.

For changes confined to `Project/*.md` and agent-instruction Markdown, validate Markdown structure, local links, IDs, index consistency, and the intended diff. Such tracking-only updates do not change the running application and do not require an application rebuild/restart, a product version bump/tag, or application tests. If runtime/build inputs or application code/configuration change, the normal repository requirements apply.
