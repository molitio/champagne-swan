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
            gradientHero:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_hero.png",
            gradientTop:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_top.png",
            gradientBottom:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cs_gradient_bottom.png",
            waterSplash:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/water_splash-01.png",
            stockPersonAvatar:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/person2.png",
            logo: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/logo/jeliza_logokit_jeliza_logo_submark.svg",
            horizontalLogo:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/logo/jeliza_logokit_jeliza_logo_horizontal.svg",
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
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/logo/jeliza_logo_horizontal_jeliza_logo_horizontal.svg",
            skyScraper:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/skyscraper.jpg",
          },
          iconDefinitions: {
            phone: {
              title: "Mobile",
              url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/icons/icons_jeliza-01.svg",
              hrefUrl: "tel:+36204160391",
            },
            email: {
              title: "E-mail",
              url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/icons/icons_jeliza_phone.svg",
              hrefUrl: "mailto:info@jeliza.com",
            },
            address: {
              title: "Cím",
              url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/icons/icons_jeliza_envelope.svg",
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
            officeCleaners:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/officecleaners.jpg",
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
            mLogo:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/mlogo.png",
            houseLogo:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/houselogo.png",
            brandLogo:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/brand.png",
            officeLogo:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/officelogo.png",
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
            defaultCostumerOpinion:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.consectetur adipiscing elit.",
            defaultCustomerName: "John Doe",
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
              "Cégünk magas színvonalon kínál takarító szolgáltatást szállodák, irodaházak \\n és magánszemélyek részére, \\n valamint vállaljuk nagy belmagasságú ipari üzemek, \\ngyártó csarnokok, raktárak és logisztikai központok speciális \\ntakarítását!",
            moreInfoButton: "Bővebben",
          },
          assetUrls: {
            heroBackground:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/hero.webp",
            effectLayer:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/jeliza_hero_gradient.svg",
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
            morning:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/morning.jpg",
            flatRoom:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/flatroom.jpg",
            industry:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/industrial.jpg",
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
          },
        },
        content: {
          textContent: {
            title: "SZOLGÁLTATÁSAINK",
            officeCleaningTitle: "Szállodák és irodaházak takarítása",
            officeCleaningText:
              "Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is",
            officeCleaningInfo:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.",
            officeCleaningExtendedInfo:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.",
            personalCleaningTitle: "Magánszemélyeknél végzett takarítás",
            personalCleaningText:
              "Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is",
            personalCleaningInfo:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.",
            personalCleaningExtendedInfo:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.",
            highCeilingTitle: "Nagy belmagasságú épületek takarítása",
            highCeilingText:
              "Szállodák és irodaházak takarítása Minden egyes munkatársunk képzett szakember, akik a legmagasabb szintű takarító szolgáltatást nyújtják megbízóink számára. Munkánkat precízen és alaposan végezzük, ezáltal ügyfeleink helyiségei tökéletesen tiszták legyenek. Nagy figyelmet fordítunk az egészségügyi előírások betartására is, így biztosítva, hogy munkánk során az ügyfeleink és munkatársaink egészsége is védve legyen. Szolgáltatásaink között megtalálhatóak a lakások, irodák, üzlethelyiségek takarítása, valamint a különböző események előkészítéséhez szükséges takarítás is",
            highCeilingInfo:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.",
            highCeilingExtendedInfo:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum.",
          },
          assetUrls: {
            officeCleaners:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/officecleaners.jpg",
            industrial:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/industrial.jpg",
            flatRoom:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/flatroom.jpg",
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
            description: "Lorem ipusm dolor sit amet",
          },
          assetUrls: {
            cleaners:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/cleaners.jpg",
          },
        },
        opinions: {
          textContent: {
            title: "KOLLÉGÁINK MONDTÁK",
            defaultCustomerName: "John Doe",
            defaultCustomerOpinion:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.consectetur adipiscing elit.",
          },
        },
        brandMessage: {
          textContent: {
            title: "ISMERJEN MEG",
            subTitle: "BENNÜNKET",
            aboutQuote: `"A minőség azt jelenti, hogy akkor is jól csinálsz valamit amikor nem látják. \n"`,
            aboutQuoteAuthor: "Henry Ford",
            premiumQualityContentText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, lobortis in mi nec, scelerisque malesuada metus. Morbi massa sem, ultricies euismod nisl vitae, porttitor lacinia lorem. Vestibulum lectus eros, faucibus placerat ex id, pretium auctor lectus. Morbi fringilla odio sit amet turpis aliquet, at gravida nisl dictum. Cras convallis, elit in efficitur tristique, metus metus semper massa, consequat convallis orci diam quis massa. Integer varius laoreet augue sed mollis. Curabitur id scelerisque lacus, non pellentesque tellus. Cras molestie, ligula rutrum convallis placerat, arcu ante sollicitudin elit, pretium interdum sapien tortor nec urna. Cras molestie auctor nisi, nec fringilla nisl vulputate gravida. Suspendisse potenti. Morbi eu posuere leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse quis neque mollis, porta turpis in, fermentum lectus.",
          },
          assetUrls: {
            mop: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/mop.jpg",
            colleague:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/colleague.jpg",
            machine:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web_content/img/machine.jpg",
          },
        },
      },
    },
  },
};
