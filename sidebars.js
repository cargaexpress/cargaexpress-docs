// @ts-check

const sidebars = {
  tutorialSidebar: [
    'intro',
    'project/problem-and-goals',
    {
      type: 'category',
      label: 'Project',
      items: [
        'project/business-context',
        'project/source-register',
        'project/project-status',
      ],
    },
    {
      type: 'category',
      label: 'Requirements',
      items: [
        'requirements/canonical-states',
        'requirements/business-rules',
        'requirements/functional-requirements',
        'requirements/sla-and-delay',
      ],
    },
    {
      type: 'category',
      label: 'Backlog',
      items: [
        'backlog/story-format-and-traceability',
        'backlog/sprint-2-stories',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/architecture-overview',
        'architecture/data-flow',
        'architecture/data-model',
        'architecture/architecture-decisions',
        'architecture/backend-stack',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/ingestion-strategies',
        'integrations/type-a-webhook',
        'integrations/type-b-simulator',
        'integrations/type-c-batch',
      ],
    },
    {
      type: 'category',
      label: 'Sprints',
      items: [
        'sprints/sprint-overview',
        'sprints/sprint-1',
        'sprints/sprint-2',
        'sprints/sprint-3',
      ],
    },
    {
      type: 'category',
      label: 'Planning',
      items: [
        'planning/pitch-and-costs',
        'planning/seed-data',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/local-development',
        'operations/airflow-orchestration',
        'operations/testing-guide',
      ],
    },
    'glossary',
  ],
};

export default sidebars;
