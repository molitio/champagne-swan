export const ApplicationContextRoot = {
  appName: "Champagne Swan v1.0.0",
  navRoot: {
    home: {
      label: "Főoldal",
      path: "/",
    },
    services: {
      label: "Szolgáltatások",
      path: "/services",
      leafs: {
        mainContent: {
          label: "Bővebben...",
          path: "/services/#main-content",
        },
        privateServices: {
          label: "Bővebben...",
          path: "/services/#private-services",
        },
        highCeilingServices: {
          label: "Bővebben...",
          path: "/services/#high-ceiling-services",
        },
      },
    },
    about: {
      label: "Rólunk",
      path: "/about",
    },
    contact: {
      label: "Kapcsolat",
      path: "/contact",
    },
  },
  contentRoot: {
    common: {
      leafs: {
        images: {
          assetUrls: {
            gradientHero: "/web_content/img/cs_gradient_hero.webp",
            gradientTop: "/web_content/img/cs_gradient_top.webp",
            gradientBottom: "/web_content/img/cs_gradient_bottom.webp",
            waterSplash: "/web_content/img/water_splash-01.webp",
            stockPersonAvatar1: "/web_content/img/person1.webp",
            stockPersonAvatar2: "/web_content/img/person2.webp",
            logo: "/web_content/logo/jeliza_logokit_jeliza_logo_submark.svg",
            horizontalLogo:
              "/web_content/logo/jeliza_logokit_jeliza_logo_horizontal.svg",
            emailApi: "/api/email",
          },
        },
        footer: {
          textContent: {
            maintainer: `© 2022 All Rights Reserved | molitio llc | ${"Champagne Swan v1.0.0"}`,
          },
        },
      },
    },
    contact: {
      leafs: {
        contactInfo: {
          textContent: {
            title: "KAPCSOLAT",
            formText:
              "Írjon Nekünk az alábbi kapcsolati űrlapon keresztül vagy vegye fel velünk a kapcsolatot az alábbi elérhetőségek egyikén!",
            email: "info@gmail.com",
            phoneMain: "+36 20 416 0391",
            address1: "1134 Budapest",
            address2: "Lehel utca 11.",
          },
          assetUrls: {
            emailHref: "mailto:szatmari.marica@gmail.com",
            webSiteHref: "https://jelizaclean.com",
            addressHref: "https://goo.gl/maps/FK9mXYG25HLPXEvR6",
            phoneMainHref: "tel:+36204160391",
            logoImage:
              "/web_content/logo/jeliza_logo_horizontal_jeliza_logo_horizontal.svg",
            skyScraper: "/web_content/img/skyscraper.webp",
          },
          iconDefinitions: {
            phone: {
              title: "Mobile",
              url: "/web_content/icons/icons_jeliza-01.svg",
              hrefUrl: "tel:+36204160391",
            },
            email: {
              title: "E-mail",
              url: "/web_content/icons/icons_jeliza_phone.svg",
              hrefUrl: "mailto:info@jeliza.com",
            },
            address: {
              title: "Cím",
              url: "/web_content/icons/icons_jeliza_envelope.svg",
              hrefUrl: "https://goo.gl/maps/FK9mXYG25HLPXEvR6",
            },
          },
        },
        contactForm: {
          textContent: {
            namePlaceholder: "Név:",
            emailPlaceholder: "E-mail:",
            messagePlaceholder: "Üzenet:",
            nameRequired: "Kérjük, adja meg a nevét!",
            emailRequired: "Kérjük, adja meg az e-mail címét!",
            emailAddressInvalid: "Kérjük, adja meg egy érvényes e-mail címet!",
            messageRequired: "Kérjük, írjon üzenetet!",
            sendButtonText: "Elküld",
            reCaptchaTag: "CONTACT_FORM",
          },
        },
      },
    },
    brandMessage: {
      leafs: {
        cover: {
          textContent: {
            title: "PREMIUM MINŐSÉG",
            contentTitle: "Jeliza a tisztaság szinonimája",
            contentText:
              "Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen.",
            moreInfoButton: "Bővebben",
          },
          assetUrls: {
            officeCleaners: "/web_content/img/officecleaners.webp",
          },
        },
      },
    },
    partners: {
      leafs: {
        cover: {
          textContent: {
            title: "PARTNEREINK",
          },
          assetUrls: {
            mLogo: "/web_content/img/mlogo.webp",
            houseLogo: "/web_content/img/houselogo.webp",
            brandLogo: "/web_content/img/brand.webp",
            officeLogo: "/web_content/img/officelogo.webp",
          },
        },
      },
    },
    opinions: {
      leafs: {
        opinionCards: {
          textContent: {
            colleagues: "TAPASZTALT KOLLÉGÁK",
            colleaguesScore: "50",
            clients: "ELÉGEDETT ÜGYFÉL",
            clientsScore: "80",
            projects: "SIKERES PROJECT",
            projectsScore: "150",
            equipment: "DARABOS GÉPPARK",
            equipmentScore: "100",
          },
        },
        customerOpinions: {
          textContent: {
            title: "VÉLEMÉNYEK",
            defaultCostumerOpinion: "Hamarosan érkezik.",
            defaultCustomerName: "",
          },
        },
      },
    },
    home: {
      leafs: {
        hero: {
          textContent: {
            title: "TISZTASÁG FELSŐFOKON!",
            description:
              "Cégünk magas színvonalon kínál takarító szolgáltatást szállodák, irodaházak és magánszemélyek részére, valamint vállaljuk nagy belmagasságú ipari üzemek, gyártó csarnokok, raktárak és logisztikai központok speciális takarítását!",
            moreInfoButton: "Bővebben",
          },
          assetUrls: {
            heroBackground: "/web_content/img/hero.webp",
            effectLayer: "/web_content/img/jeliza_hero_gradient.svg",
          },
        },
      },
    },
    services: {
      leafs: {
        home: {
          textContent: {
            title: "SZOLGÁLTATÁSAINK",
            comercialServicesContentTitle: "Szállodák és irodaházak takarítása",
            comercialServicesContentText:
              "Szállodák és irodaházak takarítása Minden egyes  munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is",
            privateServicesContentTitle: "Magánszemélyeknél végzett takarítás",
            privateServicesContentText:
              "Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is",
            highCeilingContentTitle: "Nagy belmagasságú épületek takarítása",
            highCeilingContentText:
              "Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is",
          },
          assetUrls: {
            morning: "/web_content/img/morning.webp",
            flatRoom: "/web_content/img/flatroom.webp",
            industry: "/web_content/img/industrial.webp",
          },
        },
        cover: {
          textContent: {
            title: "A TISZTASÁG SZINONIMÁJA",
            introText:
              "Ismerkedj meg szolgáltatásainkkal és vedd fel velünk a kapcsolatot még ma!",
            introCta: "Szolgáltatásaink",
            calculatorContent:
              "Válassza ki a tisztítandó felületet és annak nagyságát, majd a “SZÁMOL” gombra kattintva tudja meg a szolgáltatás árát! Görgessen lejjebb és ismerje meg szolgáltatásainkat, majd foglalja le online időpontját az oldal alján!",
            calculatorWarning:
              "*a kalkulált árak tájékoztató jellegűek és nem minősülnek ajánlattételnek!",
          },
          assetUrls: {
            cover: "#main-content",
            window: "/web_content/img/window.webp",
          },
        },
        content: {
          textContent: {
            title: "SZOLGÁLTATÁSAINK",
            officeCleaningTitle: "Szállodák és irodaházak takarítása",
            officeCleaningText:
              "Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is",
            officeCleaningInfo: "",
            officeCleaningExtendedInfo: "",
            personalCleaningTitle: "Magánszemélyeknél végzett takarítás",
            personalCleaningText:
              "Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is",
            personalCleaningInfo: "",
            personalCleaningExtendedInfo: "",
            highCeilingTitle: "Nagy belmagasságú épületek takarítása",
            highCeilingText:
              "Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is",
            highCeilingInfo: "",
            highCeilingExtendedInfo: "",
          },
          assetUrls: {
            officeCleaners: "/web_content/img/officecleaners.webp",
            industrial: "/web_content/img/industrial.webp",
            flatRoom: "/web_content/img/flatroom.webp",
          },
        },
      },
    },
    about: {
      leafs: {
        cover: {
          textContent: {
            title: "SZAKKÉPZETT \\n MUNKAERŐ",
            subTitle: "MINŐSÉGI \\n SZOLGÁLTATÁS",
            contactLinkText: "Kapcsolat",
            description: "",
          },
          assetUrls: {
            cleaners: "/web_content/img/cleaners.webp",
          },
        },
        opinions: {
          textContent: {
            title: "KOLLÉGÁINK MONDTÁK",
            defaultCustomerName: "",
            defaultCustomerOpinion: "Hamarosan érkezik.",
          },
        },
        brandMessage: {
          textContent: {
            title: "ISMERJEN MEG\nBENNÜNKET",
            aboutQuote: `"A minőség azt jelenti, hogy akkor is jól csinálsz valamit amikor nem látják. \n"`,
            aboutQuoteAuthor: "Henry Ford",
            premiumQualityContentText: "Hamarosan érkezik.",
          },
          assetUrls: {
            mop: "/web_content/img/mop.webp",
            colleague: "/web_content/img/colleague.webp",
            machine: "/web_content/img/machine.webp",
          },
        },
      },
    },
  },
};
