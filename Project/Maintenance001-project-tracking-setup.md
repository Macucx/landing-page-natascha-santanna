# Maintenance001: Set up Markdown work tracking

| Field | Value |
| --- | --- |
| ID | Maintenance001 |
| Type | Maintenance |
| Status | Review |
| Created | 2026-10-01 |
| Updated | 2026-10-01 |
| Priority | Normal |
| Owner | Codex |
| Due | Not scheduled |
| Dependencies | None |
| Related work | User-authorized portfolio setup, 2026-10-01 |

## Request and outcome

The user requested a simpler version of Databased's task control in every owned GitHub repository: a Project folder, individually classified Markdown work records, concrete checklists, technical implementation history, and agent instructions that maintain the records.

This setup applies to `Macucx/landing-page-natascha-santanna`. It establishes tracking for future work; it does not claim that historical features or defects have been migrated.

## Scope

- Included: `Project/README.md`, `Project/INDEX.md`, `Project/TEMPLATE.md`, this setup record, root `AGENTS.md`, and the `CLAUDE.md` bootstrap.
- Excluded: application behavior, runtime configuration, old backlog migration, existing GitHub Issue/Project state, and external GitLab synchronization.

## Acceptance criteria

- [x] A Project folder provides a guide, linked index, reusable template, and this real setup record.
- [x] IDs classify work and remain stable; records contain explicit task checklists and technical evidence sections.
- [x] Root agent instructions require records before future implementation and updates through handoff.
- [x] Existing instructions are preserved and existing canonical work systems are respected.
- [ ] User reviews the delivered tracking convention.

## Task checklist

- [x] Inspect the repository tree and existing agent instructions.
- [x] Define classifications, independent numbering, statuses, and a lightweight lifecycle.
- [x] Prepare the Project guide, index, template, and setup record.
- [x] Integrate the workflow into root AGENTS.md and Claude's bootstrap.
- [x] Validate planned paths, record ID, index links, required sections, and preservation of existing instructions.
- [ ] User reviews the setup; then mark this record and its index row Done if accepted.

## Technical approach and decisions

Use ordinary version-controlled Markdown without a database, generator, plugin dependency, or mandatory new GitHub board. Records are flat files under Project/; type-prefixed IDs identify work, and INDEX.md supplies navigation and status. Filenames use hyphens to simplify shell use and relative links. One template covers features, defects, refactoring, maintenance, documentation, and requested research.

The root agent instructions introduce the record workflow, while CLAUDE.md explicitly points Claude-compatible agents to it. Existing instruction bodies remain intact. Tracking-only Markdown changes have proportional documentation validation; they do not change runtime inputs or require application release/version operations.

## Implementation and progress

Added the guide, template, index, and this work record. Added a required tracking section ahead of existing AGENTS.md content where present; otherwise created a root instruction file. Added a concise CLAUDE.md entry point while preserving its existing body. No runtime/source files were modified.

## Validation

| Check | Expected result | Actual result / evidence |
| --- | --- | --- |
| Repository inventory | Existing instructions and path collisions identified | Default-branch tree inspected; no pre-existing Project path |
| Record structure | Required metadata, acceptance checklist, tasks, technical explanation, validation, and outcome sections present | Prepared record and template checked before publication |
| Local links and index | Guide/template/index links resolve and Maintenance001 has a matching row | Prepared Project paths and links checked before publication |
| Instruction preservation | Existing AGENTS.md and CLAUDE.md bodies retained | Original fetched text retained as the suffix of each updated instruction file |
| Application checks | No runtime-input change | Not run; this change only adds tracking and agent-instruction Markdown |

Remote commit/tree verification is performed after publishing and reported in the delivery response. This record's Git history identifies its publication commit without embedding a self-referential hash.

## Risks, blockers, and remaining work

Agents must read repository instructions for this convention to take effect; these are instructions, not an automated enforcement hook. Existing tasks remain in their current locations. New repositories will need the same bootstrap. User review remains pending.

## Delivery and final result

The repository now has a standard location for future work planning and technical history. Status is Review because user acceptance of the convention has not been recorded. No application deployment or product behavior change is part of this task.

## Activity

- 2026-10-01: Inspected existing instructions and prepared the portfolio-wide Markdown tracking setup under the user's explicit request.
