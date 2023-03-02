export const ChampagneSwanContextRoot = {
  appName: "Champagne Swan v1.0.0",
  navRoot: {
    home: {
      label: "Home",
      path: "/",
    },
    services: {
      label: "Szolgáltatások",
      path: "/services",
    },
  },
  contentRoot: {
    home: {
      leafs: {
        hero: {
          textContent: {
            title: "TISZTASÁG FELSŐFOKON!",
            description: `Cégünk magas színvonalon kínál \n takarító szolgáltatást szállodák, irodaházak és magánszemélyek részére,
valamint vállaljuk nagy belmagasságú ipari üzemek, gyártó csarnokok, raktárak és logisztikai központok speciális takarítását!`,
            desciptionSubText: `Oldalunk fejlesztés alatt áll, kérjük látogass vissza később, 
vagy vedd fel velünk a kapcsolatot az alábbi elérhetőségek egyikén!`,
          },
          iconDefinitions: {
            phone: {
              title: "Phone",
              url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/icons/icons_jeliza-01.svg",
              hrefUrl: "tel:+36204160391",
            },
            email: {
              title: "Email",
              url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/icons/icons_jeliza_phone.svg",
              hrefUrl: "mailto:szatmari.marica@gmail.com",
            },
            address: {
              title: "Address",
              url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/icons/icons_jeliza_envelope.svg",
              hrefUrl: "https://goo.gl/maps/FK9mXYG25HLPXEvR6",
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
            email: "szatmari.marica@gmail.com",
            phoneMain: "+36 20 416 0391",
            address: "1134 Budapest, Lehel utca 11.",
          },
          assetUrls: {
            emailHref: "mailto:szatmari.marica@gmail.com",
            webSiteHref: "https://jelizaclean.com",
            addressHref: "https://goo.gl/maps/FK9mXYG25HLPXEvR6",
            phoneMainHref: "tel:+36204160391",
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
            maintainer: `© 2022 All Rights Reserved molitio llc. ${"Champagne Swan v1.0.0"}`,
          },
        },
      },
    },
  },
};
