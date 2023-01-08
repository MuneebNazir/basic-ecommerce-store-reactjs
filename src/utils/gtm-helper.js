import TagManager from "react-gtm-module";

export const fireGTMEvent = (dataLayerObj) => {
  TagManager.dataLayer({
    dataLayer: { ...dataLayerObj },
  });
};
