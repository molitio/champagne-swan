export const ApplicationTheme = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    unit: "px",
  },
  palette: {
    primary: {
      main: "#0C7B93ff",
    },
    secondary: {
      main: "#c1dadfff",
    },
    tertiary: {
      main: "#c1a87dff",
    },
    background: {
      default: "#c6dde2ff",
      secondary: "#0c7b93ff",
      interactive: "#c1a87dff",
    },
    text: {
      primary: "#0C7B93ff",
      secondary: "#E6FAFFff",
      /* TODO: select tone for default white hue */
      /* tertiary: "#fff", */
      tertiary: "#6C5741ff",
      interactive: "#c1a87dff",
    },
    stars: {
      gold: "#bda982ff",
      blue: "#0c7b93ff",
      /* white: "#ffffff", */
      white: "#E6FAFFff",
    },
    gradient: {
      appCoverBottom:
        "rgba(229, 236, 238, 0) 0%, rgba(153, 198, 208, 0.4) 40%, rgba(198, 221, 226, 1) 80%",
      appCoverTop:
        "rgba(255,255,255, 0) 0%, rgba(247, 255, 255, 0.2) 60%, rgba(198, 221, 226, 1) 90%",
      cover:
        "rgba(229, 236, 238, 0) 0%, rgba(153, 198, 208, 0.5) 42%, rgba(198, 221, 226, 1) 100%",
      partial:
        "rgba(255,255,255, 0) 0%, rgba(247, 255, 255, 0.2) 20%, rgba(198, 221, 226, 1) 100%",
      reversePartial:
        "rgba(255,255,255, 1) 0%, rgba(247, 255, 255, 0.6) 20%, rgba(198, 221, 226, 0) 100%",
      contactCoverTop:
        "rgba(229, 236, 238, 0.9) 0%, rgba(153, 198, 208, 0.6) 24%, rgba(198, 221, 226, 0) 68%",
      contactCoverBottom:
        "rgba(198, 221, 226, 1) 0%, rgba(198, 221, 226, 0.6), 36%, rgba(229, 236, 238, 0.0) 100%",
    },

    visual: {
      navBarMenuTextShadow: { textShadow: "2px 2px 4px #c6dde2ff" },
      appCoverTitleShadow: { textShadow: "2px 2px 4px #424E51ff" },
      appCoverTextShadow: { textShadow: "2px 2px 2px #424E51ff" },
      brandMessageTitleShadow: { textShadow: "2px 2px 4px #C1DFE6ff" },
      brandMessageContentTitleShadow: { textShadow: "1px 1px 2px #C1DFE6ff" },
      brandMessageContentTextShadow: { textShadow: "1px 1px 2px #C1DFE6ff" },
      brandMessageImageShadow: { boxShadow: "0px 3px 3px 0px #424E51ff" },
      aboutContentTitleShadow: { textShadow: "2px 2px 4px #C1DFE6ff" },
      aboutCoverTitleShadow: { textShadow: "2px 2px 4px #424E51ff" },
      aboutCoverSubTitleShadow: { textShadow: "2px 2px 4px #424E51ff" },
      aboutCoverTextShadow: { textShadow: "1px 1px 2px #424E51ff" },
      buttonDafaultShadow: { boxShadow: "2px 4px 4px #424E51ff" },
      servicesTitleShadow: { textShadow: "3px 3px 5px #C1DFE6ff" },
      servicesTextShadow: { textShadow: "2px 2px 4px #C1DFE6ff" },
      opinionsTitleShadow: { textShadow: "3px 3px 5px #C1DFE6ff" },
      opinionsTextShadow: { textShadow: "2px 2px 4px #C1DFE6ff" },
      contactTitleShadow: { textShadow: "2px 2px 4px #424E51ff" },
      contactTextShadow: { textShadow: "1px 1px 2px #424E51ff" },
    },
  },
  dimensions: {
    page: {
      height: "1150px",
    },
    header: {
      height: "5em",
    },
    footer: {
      height: "4.2em",
    },
  },
};
