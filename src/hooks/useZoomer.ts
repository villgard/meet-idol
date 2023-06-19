type ZoomType = {
  viewport: null | number;
  zoom: null | number;
}

export const useZoomer = () => {
  const width: number = window.innerWidth;
  const result: ZoomType = {
    viewport: null,
    zoom: null,
  };

  if (width >= 1024) {
    result.viewport = 1440;
    result.zoom = width / 1440;
  } else if (width >= 768 && width < 1024) {
    result.viewport = 375;
    result.zoom = width / 768;
  } else if (width < 768) {
    result.viewport = 375;
    result.zoom = 1;
  }

  return result;
}