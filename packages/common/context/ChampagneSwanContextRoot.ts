export const ChampagneSwanContextRoot = {
    appName: 'champagne swan story app',
    navRoot: {
        home: {
            label: 'Home',
            path: '/',
        },
    },
    contentRoot: {
        home: {
            leafs: {
                hero: {
                    textContent: {
                        title: 'aes·thet·ic',
                        description: `\u221e`,
                    },
                    iconDefinitions: {
                        email: {
                            title: 'Phone',
                            url: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/icons/icons_jeliza-01.svg',
                        },
                        github: {
                            title: 'Email',
                            url: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/icons/icons_jeliza_envelope.svg',
                        },
                        mobile: {
                            title: 'Address',
                            url: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/icons/icons_jeliza_phone.svg',
                        },
                    },
                    assetUrls: {
                        heroBackground:
                            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/img/hero.jpeg',
                    },
                },
            },
        },
        nav: {
            leafs: {
                contacts: {
                    textContent: {
                        webSite: 'molitio.com',
                        email: 'web-dev@molitio.com',
                        phoneMain: '+36 99 999 9999',
                        phoneSecondary: '+36 99 999 9999',
                    },
                    assetUrls: {
                        emailHref: 'mailto:web-dev@molitio.com',
                        webSiteHref: 'https://molitio.com',
                        phoneMainHref: 'tel:+36999999999',
                        phoneSecondaryHref: 'tel:+36999999999',
                        logoImage:
                            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/logo/jeliza_logo_horizontal_jeliza_logo_horizontal.svg',
                    },
                },
            },
        },
        footer: {
            leafs: {
                maintainer: {
                    textContent: {
                        maintainer: `© 2022 All Rights Reserved | molitio llc. - ${'champagne swan app story'}`,
                    },
                },
            },
        },
    },
};
