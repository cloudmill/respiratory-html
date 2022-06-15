const CLASS = "no-transition-child";

const remove = () =>
  document
    .querySelectorAll(`.${CLASS}`)
    .forEach((el) => el.classList.remove(CLASS));

export { remove };
