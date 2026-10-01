export interface Link {
    name: string;
    link: string;
    icon: string;
};

export const ConcactLinks: Link[] = [
    {
        name: 'Email',
        link: 'mailto:liurongshuo2022@outlook.com',
        icon: 'mdi-email',
    },
    {
        name: 'GitHub',
        link: 'https://github.com/lrs2187',
        icon: 'mdi-github',
    },
    {
        name: 'WakaTime',
        link: 'https://wakatime.com/@lrs2187',
        icon: 'mdi-alpha-w-circle-outline',
    },
    {
        name: 'QQ',
        link: 'https://qm.qq.com/q/Vkri9CwriW',
        icon: 'mdi-qqchat',
    },
    {
        name: 'BiliBili',
        link: 'https://space.bilibili.com/3546802271816188',
        icon: 'mdi-youtube',
    },
];

export const NavbarLinks: Link[] = [
    {
        name: 'GitHub',
        link: 'https://github.com/lrsgzs/www-home',
        icon: 'mdi-github',
    },
];

export interface Project {
    name: string;
    id: string;
    icon: string;
    description: string;
    features: string[];
    links: Link[];
    main: boolean;
};

export const Projects: Project[] = [
    {
        name: 'SuperAutoIsland',
        id: 'sai',
        icon: '/projects/sai.png',
        description: 'ClassIsland 自动化进化',
        features: [
            '使用 Blockly 构建自动化工作流',
            '复用 ClassIsland 规则集、行动组'
        ],
        links: [
            {
                name: 'GitHub',
                link: 'https://github.com/lrsgzs/SuperAutoIsland',
                icon: 'mdi-github',
            }
        ],
        main: true,
    },
];
