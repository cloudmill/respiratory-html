import { Fancybox } from "@fancyapps/ui";

const start = () => {
  try {
    const imgs = document.querySelectorAll("[data-gallery]");
    const maxIndex = Math.max(
      ...Array.from(imgs).map((img) => img.dataset.gallery)
    );
    const count = maxIndex + 1;

    const items = [];
    for (let index = 0; index < count; index++) {
      const img = document.querySelector(`[data-gallery="${index}"]`);

      items.push({
        src: img.src,
        type: "image",
      });
    }

    console.log(items);

    imgs.forEach((img) => {
      const index = img.dataset.gallery;

      img.addEventListener("click", () => {
        Fancybox.show(items, {
          startIndex: index,
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export { start };
