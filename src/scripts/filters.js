const start = () => {
  const filtersAll = document.querySelectorAll("[data-filters]");

  filtersAll.forEach((filters) => {
    const scrollbar = filters.querySelector("[data-filters-scrollbar]");
    const thumb = filters.querySelector("[data-filters-thumb]");
    const wind = filters.querySelector("[data-filters-window]");
    const content = filters.querySelector("[data-filters-content]");
    const tabAll = filters.querySelectorAll("[data-filters-tab]");
    const reset = filters.querySelector("[data-filters-reset]");
    const seriesAll = document.querySelectorAll("[data-filters-series]");

    seriesAll.forEach((series) =>
      series.addEventListener("click", () => {
        seriesAll.forEach((series) => series.classList.remove("tab--active"));
        series.classList.add("tab--active");
      })
    );

    tabAll.forEach((tab) =>
      tab.addEventListener("click", () => tab.classList.toggle("tab--active"))
    );

    reset.addEventListener("click", () =>
      tabAll.forEach((tab) => tab.classList.remove("tab--active"))
    );

    const getData = () => ({
      windowY: wind.getBoundingClientRect().top,
      windowHeight: wind.getBoundingClientRect().height,

      contentY: content.getBoundingClientRect().top,
      contentHeight: content.getBoundingClientRect().height,
    });

    const getCalcData = () => {
      const data = getData();

      const heightPercentage = Math.min(
        data.windowHeight / data.contentHeight,
        1
      );

      const dist = Math.abs(data.windowY - data.contentY);
      const maxDist = Math.max(0, data.contentHeight - data.windowHeight);

      const distPercentage = maxDist > 0 ? Math.min(dist / maxDist, 1) : 0;

      return {
        heightPercentage,
        distPercentage,
      };
    };

    const getPercentage = (value) => `${value * 100}%`;

    const updateScrollbar = () => {
      const { heightPercentage, distPercentage } = getCalcData();

      if (heightPercentage === 1) {
        scrollbar.style.opacity = "0";
      } else {
        scrollbar.style.opacity = "1";
      }

      thumb.style.height = getPercentage(heightPercentage);
      thumb.style.top = getPercentage((1 - heightPercentage) * distPercentage);
    };

    wind.addEventListener("scroll", () => {
      updateScrollbar();
    });

    setInterval(() => {
      updateScrollbar();
    }, 500);
  });
};

export { start };
