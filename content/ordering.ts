// Section -> Chapter -> Module

export type SectionID =
  | 'microeconomics';

export type Chapter = {
  name: string;
  items: string[];
  description?: string;
};

const MODULE_ORDERING: { [key in SectionID]: Chapter[] } = {
  microeconomics: [
    {
      name: 'Basic Economic Concepts',
      items: ['scarcity', 'resource-allocation'],
    },
    {
      name: 'Supply and Demand',
      items: [],
    },
    {
      name: 'Production, Cost, and the Perfect Competition Model',
      items: [],
    },
    {
      name: 'Imperfect Competition',
      items: [],
    },
    {
      name: 'Factor Markets',
      items: [],
    },
    {
      name: 'Market Failure and the Role of Government',
      items: [],
    },
  ],
};

export default MODULE_ORDERING;
export const SECTIONS: SectionID[] = Object.keys(
  MODULE_ORDERING
) as SectionID[];
export const SECTION_LABELS: { [key in SectionID]: string } = {
  microeconomics: 'AP Microeconomics',
};
export const SECTION_SEO_DESCRIPTION: { [key in SectionID]: string } = {
  microeconomics:
    'AP Microeconomics Desription',
};
export const SECTION_SEO_TITLES: { [key in SectionID]: string } = {
  microeconomics: 'AP Microeconomics Topics',
};

const moduleIDToSectionMap: { [key: string]: SectionID } = {};

SECTIONS.forEach(section => {
  MODULE_ORDERING[section].forEach(category => {
    category.items.forEach(moduleID => {
      moduleIDToSectionMap[moduleID] = section;
    });
  });
});

export { moduleIDToSectionMap };
export { moduleIDToURLMap };

const moduleIDToURLMap: { [key: string]: string } = {};

SECTIONS.forEach(section => {
  MODULE_ORDERING[section].forEach(category => {
    category.items.forEach(moduleID => {
      moduleIDToURLMap[moduleID] = `/${section}/${moduleID}`;
    });
  });
});
