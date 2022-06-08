const CLASS = "no-transition";

const remove = () =>
  document
    .querySelectorAll(`.${CLASS}`)
    .forEach((el) => el.classList.remove(CLASS));

export { remove };
