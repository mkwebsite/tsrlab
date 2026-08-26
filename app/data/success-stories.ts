export type SuccessStory = {
  slug: string;
  label: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  client: string;
  sector: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export const successStories: SuccessStory[] = [
  {
    slug: 'european-university-horizon-scanning',
    label: 'Client Success Stories',
    title: 'European university | Horizon-scanning report',
    excerpt:
      'Our horizon-scanning report and capability mapping services enabled a leading European university to futureproof its programmes, partnerships, and resources.',
    image: '/images/Global.jpg',
    imageAlt: 'Research and academic collaboration in a modern facility',
    client: 'European university',
    sector: 'Impact & Public Systems',
    challenge:
      'A leading European university needed to anticipate emerging research themes, partnership models, and capability gaps to keep programmes competitive over the next decade.',
    approach:
      'TSR Lab delivered a structured horizon-scanning engagement combining secondary intelligence, expert interviews, and capability mapping across research, teaching, and partnership ecosystems.',
    outcome:
      'Leadership received a decision-ready roadmap to realign programmes, partnerships, and resource priorities around future demand signals.',
  },
  {
    slug: 'poultry-feasibility-operational-fitness',
    label: 'Client Success Stories',
    title: 'Poultry feasibility study | Assessing operational fitness pre investment',
    excerpt:
      'Discover how a poultry feasibility study enabled investor-grade due diligence on a Nigerian poultry operation, benchmarking performance and identifying growth risks.',
    image: '/images/project-2.jpg',
    imageAlt: 'Agricultural operations and processing facility',
    client: 'Private equity / agribusiness investor',
    sector: 'Food & Agri-business',
    challenge:
      'An investor required investor-grade diligence on a Nigerian poultry operation before committing capital, including operational fitness, growth risks, and benchmark performance.',
    approach:
      'We assessed operations, economics, and market context through site-level analysis, peer benchmarking, and scenario-based feasibility modelling.',
    outcome:
      'The client secured a clear go / no-go evidence base with quantified risks, improvement levers, and investment priorities.',
  },
  {
    slug: 'smart-mobility-market-entry',
    label: 'Client Success Stories',
    title: 'Mobility platform | Market entry intelligence',
    excerpt:
      'We equipped a mobility platform with competitive intelligence and demand signals to prioritise city markets and partnership pathways for expansion.',
    image: '/images/Dubai.jpg',
    imageAlt: 'Urban mobility and transport infrastructure',
    client: 'Smart mobility platform',
    sector: 'Smart Mobility',
    challenge:
      'A growth-stage mobility platform needed clarity on where to expand next and how local demand, regulation, and competitors would shape go-to-market choices.',
    approach:
      'TSR Lab combined market sizing, competitive landscaping, and stakeholder insight to rank priority cities and define partnership-led entry options.',
    outcome:
      'The client locked a sequenced expansion plan with evidence-backed market priorities and partnership targets.',
  },
  {
    slug: 'public-systems-digital-innovation',
    label: 'Client Success Stories',
    title: 'Public agency | Digital innovation roadmap',
    excerpt:
      'A public agency partnered with TSR Lab to translate policy priorities into a practical digital innovation roadmap with measurable delivery milestones.',
    image: '/images/about/business-team.jpg',
    imageAlt: 'Public sector and digital transformation collaboration',
    client: 'Public sector agency',
    sector: 'Impact & Public Systems',
    challenge:
      'Leadership wanted to modernise service delivery but lacked a shared roadmap linking policy intent, digital capability, and implementation sequencing.',
    approach:
      'We facilitated discovery workshops, mapped current-state workflows, and designed an AI-ready digital roadmap with phased use cases and governance.',
    outcome:
      'The agency launched with a prioritised portfolio of digital initiatives and clear ownership for delivery and impact tracking.',
  },
];

export function getSuccessStory(slug: string): SuccessStory | undefined {
  return successStories.find((story) => story.slug === slug);
}
