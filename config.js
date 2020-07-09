// Every property is a service category with an array of services/links.
const config = {
  Twiki: [
    {
      id: 'CMS_Twiki',
      links: [{ link: 'https://twiki.cern.ch/twiki/bin/viewauth/CMS/DQM' }],
    },
  ],
  Run_Registry: [
    {
      id: 'New_Run_Registry',
      links: [
        {
          name: 'Prod Online',
          link: 'https://cmsrunregistry.web.cern.ch/online/global',
          run_link: (run_number) =>
            `?obf%5Brules%5D%5B0%5D%5Bfield%5D=run_number&obf%5Brules%5D%5B0%5D%5Bvalue%5D=${run_number}&obf%5Brules%5D%5B0%5D%5Boperator%5D=%3D&obf%5Bcombinator%5D=and&obf%5Bnot%5D=false&otf%5Brules%5D%5B0%5D%5Bfield%5D=run_number&otf%5Brules%5D%5B0%5D%5Bvalue%5D=${run_number}&otf%5Brules%5D%5B0%5D%5Boperator%5D=%3D&otf%5Bcombinator%5D=and&otf%5Bnot%5D=false`,
        },
        {
          name: 'Prod Offline',
          link: 'https://cmsrunregistry.web.cern.ch/offline/datasets/global',
          run_link: (run_number) =>
            `?oftf%5Brules%5D%5B0%5D%5Bfield%5D=run_number&oftf%5Brules%5D%5B0%5D%5Bvalue%5D=${run_number}&oftf%5Brules%5D%5B0%5D%5Boperator%5D=%3D&oftf%5Bcombinator%5D=and&oftf%5Bnot%5D=false&ofbf%5Brules%5D%5B0%5D%5Bfield%5D=run_number&ofbf%5Brules%5D%5B0%5D%5Bvalue%5D=${run_number}&ofbf%5Brules%5D%5B0%5D%5Boperator%5D=%3D&ofbf%5Bcombinator%5D=and&ofbf%5Bnot%5D=false`,
        },
        {
          name: 'Staging',
          link: 'https://dev-cmsrunregistry.web.cern.ch',
        },
      ],
    },
    {
      id: 'Old_Run_Registry',
      links: [
        {
          name: 'Online',
          link: 'https://cmsrunregistry.cern.ch/runregistry/index.jsf',
        },
        {
          name: 'Offline',
          link: 'https://cmsrunregistry.cern.ch/runregistry_offline',
        },
      ],
    },
  ],
  DQM_GUI: [
    {
      id: 'NEW_DQM_GUI_(beta)',
      links: [
        {
          name: 'Offline',
          link: 'https://dqm-gui.web.cern.ch',
          run_link: (run_number) =>
            `?search_run_number=${run_number}&search_dataset_name=`,
        },
      ],
    },
    {
      id: 'DQM_GUI',
      links: [
        { name: 'Online', link: 'https://cmsweb.cern.ch/dqm/online' },
        {
          name: 'offline_gui',
          link: 'https://cmsweb.cern.ch/dqm/offline',
          run_link: (run_number) => `/start?runnr=${run_number};`,
        },
      ],
    },
  ],
  Historic_DQM: [
    {
      id: 'Historic_DQM',
      links: [
        {
          name: 'hdqm',
          link: 'https://cms-hdqm.web.cern.ch',
          run_link: (run_number) => `?filter=list&filterValue=${run_number}`,
        },
      ],
    },
  ],
  Meetings: [
    {
      id: 'DQM_Meetings',
      links: [{ link: 'https://indico.cern.ch/category/3904/' }],
    },
    {
      id: 'Run_Meetings',
      links: [{ link: 'https://indico.cern.ch/event/402363' }],
    },
  ],
  Run_Coordination: [
    {
      id: 'Run_Coordination',
      links: [
        {
          link:
            'http://schwick.web.cern.ch/schwick/rctools/dailyReport/listReports/',
        },
      ],
    },
  ],
  WBM: [
    {
      id: 'WBM',
      links: [
        {
          name: 'Primary',
          link: 'https://cmswbm.cern.ch/',
        },
        {
          name: 'Secondary',
          link: 'https://cmswbm2.cern.ch',
        },
      ],
    },
    {
      id: 'WBM Offline',
      links: [{ link: 'https://cmswbmoff.web.cern.ch/cmswbmoff/' }],
    },
  ],
  OMS: [
    {
      id: 'OMS',
      links: [
        {
          name: 'OMS',
          link: 'https://cmsoms.cern.ch',
          run_link: (run_number) => `/cms/runs/report?cms_run=${run_number}`,
        },
      ],
    },
  ],
};
