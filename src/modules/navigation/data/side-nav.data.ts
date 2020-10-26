import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['dashboard'],
    },
    {
        text: 'INTERFACE',
        items: ['masters', 'daily_updates'],
    },
    // {
    //     text: 'ADDONS',
    //     items: ['charts', 'tables'],
    // },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/admin/dashboard',
    },
    masters: {
        icon: 'columns',
        text: 'Masters',
        submenu: [
            {
                text: 'Global',
                submenu: [
           
                    {
                        text: 'Module Master',
                        link: '/admin/module',
                    },
                    {
                        text: 'Category Master',
                        link: '/admin/category',
                    },
            
                    ],
                },
                {
                text: 'Location',
                submenu: [
           
                    {
                        text: 'Country',
                        link: '/admin/country',
                    },
                    {
                        text: 'State',
                        link: '/admin/state',
                    },
                    {
                        text: 'City',
                        link: '/admin/city',
                    },
                    {
                        text: 'Locality',
                        link: '/admin/locality',
                    },
            
                    ],
                }
            ]
    },
    location: {
        icon: 'columns',
        text: 'Location',
        submenu: [
            
        ],
    },
    daily_updates: {
        icon: 'book-open',
        text: 'Daily Updates',
        submenu: [
            {
                text: 'Commodity Item Prices',
                link: '/admin/country',
            },
            {
                text: 'Petrol Price',
                link: '/admin/state',
            },
            {
                text: 'Diesel Price',
                link: '/admin/city',
            },
            {
                text: 'Autogas Price',
                link: '/admin/locality',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables',
    },
};
