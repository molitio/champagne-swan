export const ChampagneSwanContextRoot = {
  appName: "champagne swan story app",
  navRoot: {
    home: {
      label: "Home",
      path: "/",
    },
  },
  contentRoot: {
    home: {
      leafs: {
        hero: {
          textContent: {
            title: "TISZTASÁG FELSŐFOKON!",
            description: `Cégünk magas színvonalon kínál takarító szolgáltatást szállodák, irodaházak és magánszemélyek részére,
valamint vállaljuk nagy belmagasságú ipari üzemek, gyártó csarnokok, raktárak és logisztikai központok speciális takarítását!`,
            desciptionSubText: `Oldalunk fejlesztés alatt áll, kérjük látogass vissza később, 
vagy vedd fel velünk a kapcsolatot az alábbi elérhetőségek egyikén!`,
          },
          iconDefinitions: {
            email: {
              title: "Phone",
              url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/icons/icons_jeliza-01.svg",
            },
            github: {
              title: "Email",
              url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/icons/icons_jeliza_envelope.svg",
            },
            mobile: {
              title: "Address",
              url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/icons/icons_jeliza_phone.svg",
            },
          },
          assetUrls: {
            heroBackground:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/img/hero.jpeg",
            effectLayer:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/img/jeliza_hero_gradient.svg",
          },
        },
      },
    },
    nav: {
      leafs: {
        contacts: {
          textContent: {
            email: "info@jelizaclean.com",
            phoneMain: "+36 30 123 4567",
            address: `1234. Budapest,
             Példa utca 12.`,
          },
          assetUrls: {
            emailHref: "mailto:info@jelizaclean.com",
            webSiteHref: "https://jelizaclean.com",
            phoneMainHref: "tel:+36301234567",
            logoImage:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/logo/jeliza_logo_horizontal_jeliza_logo_horizontal.svg",
          },
        },
      },
    },
    footer: {
      leafs: {
        maintainer: {
          textContent: {
            maintainer: `© 2022 All Rights Reserved | molitio llc. | ${"Champagne Swan v1.0.0"}`,
          },
        },
      },
    },
  },
};
