# CargaExpress Supply Chain Documentation

This repository contains the English-language Docusaurus documentation for the CargaExpress Supply Chain project.

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm run start
```

Open `http://localhost:3000`.

## Validate a production build

```bash
npm run build
```

The static site is generated in `build/`. Building does not publish the site.

## Project structure

- `docs/project/` — business context and source register
- `docs/requirements/` — canonical shipment states, business rules, functional requirements
- `docs/backlog/` — story format and traceability
- `docs/architecture/` — architecture, conceptual data model, ADR register
- `docs/integrations/` — push/pull/file ingestion and Type B API simulator
- `docs/sprints/` — documented sprint scope and delivery status
- `docs/planning/` — pitch and cost considerations
- `docs/operations/` — local development and validation

## Source integrity

The approved backlog and project repositories remain authoritative. Where the exact text of a requirement or acceptance criterion was not available in the retrieved project context, the documentation marks it for verification rather than inventing it. Keep planned capabilities separate from implemented and accepted functionality.

## GitHub Pages

The Docusaurus configuration targets the project site `https://cargaexpress.github.io/cargaexpress-docs/`. This is a target configuration only; publishing is not complete until the Git repository, branch, and GitHub Pages deployment workflow are verified.
