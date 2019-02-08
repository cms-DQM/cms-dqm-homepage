// Every property is a service category with an array of services/links.
const config = {
    WBM: [
        {
            id: 'WBM',
            links: [
                {
                    name: 'Primary',
                    link: 'https://cmswbm.cern.ch/'
                },
                {
                    name: 'Secondary',
                    link: 'https://cmswbm2.cern.ch'
                }
            ]
        }
    ],
    Twiki: [
        {
            id: 'CMS_Twiki',
            links: [
                { link: 'https://twiki.cern.ch/twiki/bin/viewauth/CMS/DQM' }
            ]
        }
    ],
    Run_Registry: [
        {
            id: 'New_Run_Registry',
            links: [
                {
                    name: 'Prod Online',
                    link: 'https://cmsrunregistry.web.cern.ch',
                    run_link: run_number =>
                        `/online/runs/all?run_number=${run_number}`
                },
                {
                    name: 'Prod Offline',
                    link: 'https://cmsrunregistry.web.cern.ch',
                    run_link: run_number =>
                        `/offline/workspaces/global?run_number=${run_number}`
                },
                {
                    name: 'Staging',
                    link: 'https://dev-cmsrunregistry.web.cern.ch'
                }
            ]
        },
        {
            id: 'Old_Run_Registry',
            links: [
                {
                    name: 'Online',
                    link: 'https://cmsrunregistry.cern.ch/runregistry/index.jsf'
                },
                {
                    name: 'Offline',
                    link:
                        'https://cmswbmoffshift.web.cern.ch/cmswbmoffshift/runregistry_offline'
                }
            ]
        }
    ],
    DQM_GUI: [
        {
            id: 'DQM_GUI',
            links: [
                { name: 'Online', link: 'https://cmsweb.cern.ch/dqm/online' },
                { name: 'offline', link: 'https://cmsweb.cern.ch/dqm/offline/' }
            ]
        }
    ],
    Meetings: [
        {
            id: 'DQM_Meetings',
            links: [{ link: 'https://indico.cern.ch/category/3904/' }]
        },
        {
            id: 'Run_Meetings',
            links: [{ link: 'https://indico.cern.ch/event/402363' }]
        }
    ],
    Run_Coordination: [
        {
            id: 'Run_Coordination',
            links: [
                {
                    link:
                        'http://schwick.web.cern.ch/schwick/rctools/dailyReport/listReports/'
                }
            ]
        }
    ]
};
