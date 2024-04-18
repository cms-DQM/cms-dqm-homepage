// There are two items, external (goes on the left, and dqm_links goes on the middle)
// Every property is a service category with an array of services/links.
const config = {
  external: {
    Meetings: [
      {
        id: 'PPD',
        links: [{ link: 'https://indico.cern.ch/category/3877/' }],
      },
      {
        id: 'Run_Coordination',
        links: [{ link: 'https://indico.cern.ch/category/1354/' }],
      },
    ],
    Run_Coordination: [
      {
        id: 'Daily_meeting_report',
        links: [
          {
            link:
              'http://schwick.web.cern.ch/schwick/rctools/dailyReport/listReports/',
          },
        ],
      },
      {
        id: 'Control_room_contact_list',
        links: [
          {
            link:
              'https://twiki.cern.ch/twiki/bin/view/CMS/OnlineWBContactList',
          },
        ],
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
          {
            name: 'OMS API',
            link: 'https://cmsoms.cern.ch/agg/api/v1',
            run_link: (run_number) => `/lumisections?filter[run_number]=${run_number}&page[limit]=5000`,
          },
        ],
      },
    ],
    CMS_Online: [
      {
        id: 'CMS_Online',
        links: [{ link: 'http://cmsonline.cern.ch/' }],
      },
      {
        id: 'Elog',
        links: [
          {
            link:
              'https://cmsonline.cern.ch/webcenter/portal/cmsonline/pages_common/elog?__adfpwp_action_portlet=683379043&__adfpwp_backurl=https%3A%2F%2Fcmsonline.cern.ch%3A443%2Fwebcenter%2Fportal%2Fcmsonline%2Fpages_common%2Felog%3F_afrRedirect%3D9715040540107362%26__adfpwp_mode.623564097%3D1&_piref683379043.strutsAction=%2FviewSubcatMessages.do%3FcatId%3D493%26subId%3D20%26page%3D1',
          },
        ],
      },
      {
        id: 'Shift_List_Tool',
        links: [
          {
            link:
              'https://cmsonline.cern.ch/webcenter/portal/cmsonline/pages_common/shiftlist',
          },
        ],
      },
    ],
    E_groups: [
      {
        id: 'E-groups',
        links: [
          {
            link: 'https://e-groups.cern.ch/e-groups/EgroupsSearchForm.do',
          },
        ],
      },
    ],
    Web_Mail: [{ id: 'Web_Mail', links: [{ link: 'https://mmm.cern.ch/' }] }],
  },
  dqm_links: {
    Twiki: [
      {
        id: 'CMS_DQM_Main_Twiki',
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
    ],
    DQM_GUI: [
      {
        id: 'NEW_DQM_GUI_(beta)',
        links: [
          {
            name: 'Online',
            link: 'https://cmsweb.cern.ch/dqm/online-new/',
            run_link: (run_number) =>
              `?search_run_number=${run_number}&search_dataset_name=`,
          },
          {
            name: 'Offline',
            link: 'https://cmsweb-testbed.cern.ch/dqm/offline-test-new/',
            run_link: (run_number) =>
              `?search_run_number=${run_number}&search_dataset_name=`,
          },
        ],
      },
      {
        id: 'DQM_GUI',
        links: [
          {
            name: 'Online',
            link: 'https://cmsweb.cern.ch/dqm/online',
            run_link: (run_number) =>
              `/start?runnr=${run_number};dataset=/Global/Online/ALL;sampletype=online_data;workspace=Everything`,
          },
          {
            name: 'Offline',
            link: 'https://cmsweb.cern.ch/dqm/offline',
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
    DQM_Squared_Mirror: [
      {
        id: 'DQM_Squared_Mirror',
        links: [
          {
            name: 'DQM^2 Mirror',
            link: 'https://cmsweb.cern.ch/dqm/dqm-square/',
            run_link: (run_number) => `?run=${run_number}&db=production`, 
          },
        ],
      },
    ],
    PR_Inspector: [
      {
        id: 'PR_Inspector',
        links: [
          {
            name: 'PR Inspector',
            link: 'https://prinspector.web.cern.ch/',
          },
        ],
      },
    ],
    DIALS: [
      {
        id: 'DIALS',
        links: [
          {
            name: 'DIALS',
            link: 'https://cmsdials.web.cern.ch/',
            run_link: (run_number) => `/runs/${run_number}`, 
          },
        ],
      },
    ],
    Meetings: [
      {
        id: 'DQM_Meetings',
        links: [{ link: 'https://indico.cern.ch/category/3904/' }],
      },
    ],
    DQM_Contact: [
      {
        id: 'DQM_Contact_List',
        links: [
          { link: 'https://twiki.cern.ch/twiki/bin/view/CMS/DQMContacts' },
        ],
      },
    ],
    DQM_Github_repo: [
      {
        id: 'DQM_Github_Repo',
        links: [
          { link: 'https://github.com/cms-DQM/' },
        ],
      },
    ],
  },
};
