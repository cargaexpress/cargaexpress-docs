// @ts-check

const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Project',
      items: ['project/business-context', 'project/source-register'],
    },
    {
      type: 'category',
      label: 'Requirements',
      items: ['requirements/canonical-states', 'requirements/business-rules', 'requirements/functional-requirements'],
    },
    {
      type: 'category',
      label: 'Backlog',
      items: ['backlog/story-format-and-traceability'],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: ['architecture/architecture-overview', 'architecture/data-model', 'architecture/architecture-decisions'],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: ['integrations/ingestion-strategies', 'integrations/type-b-simulator'],
    },
    {
      type: 'category',
      label: 'Sprints',
      items: ['sprints/sprint-overview', 'sprints/sprint-1', 'sprints/sprint-3'],
    },
    {
      type: 'category',
      label: 'Planning',
      items: ['planning/pitch-and-costs'],
    },
    {
      type: 'category',
      label: 'Operations',
      items: ['operations/local-development'],
    },
  ],
};

export default sidebars;

