export const ApplicationTheme = {
  palette: {
    primary: {
      main: "#00a7ccff",
    },
    secondary: {
      main: "#c1dadf",
    },
    background: {
      default: "#c6dde2ff",
      secondary: "#0c7b93ff",
      inverse: "#c1dadfff",
      interactive: "#c1a87dff",
    },
    text: {
      primary: "#076174ff",
      inverse: "#075E72ff",
      secondary: "#6C5741",
      /* TODO: select tone for default white hue */
      /* tertiary: "#fff", */
      tertiary: "#E6FAFFff",
      interactive: "#c1a87dff",
    },
    stars: {
      gold: "#bda982ff",
      blue: "#0c7b93ff",
      /* white: "#ffffff", */
      white: "#E6FAFFff",
    },
    gradient: {
      cover:
        "rgba(229, 236, 238, 0) 0%, rgba(153, 198, 208, 0.5) 42%, rgba(198, 221, 226, 1) 100%",
      partial:
        "rgba(255,255,255, 0) 0%, rgba(247, 255, 255, 0.2) 20%, rgba(198, 221, 226, 1) 100%",
      reversePartial:
        "rgba(255,255,255, 1) 0%, rgba(247, 255, 255, 0.6) 20%, rgba(198, 221, 226, 0) 100%",
    },
    visual: {
      appCoverTitleShadow: { textShadow: "3px 3px 5px #C1DFE6ff" },
      appCoverTextShadow: { textShadow: "2px 2px 4px #C1DFE6ff" },
      servicesTitleShadow: { textShadow: "3px 3px 5px #C1DFE6ff" },
      servicesTextShadow: { textShadow: "2px 2px 4px #C1DFE6ff" },
      opinionsTitleShadow: { textShadow: "3px 3px 5px #C1DFE6ff" },
      opinionsTextShadow: { textShadow: "2px 2px 4px #C1DFE6ff" },
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
