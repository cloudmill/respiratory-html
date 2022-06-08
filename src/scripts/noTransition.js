const CLASS = "no-transition";

const remove = () => {
  console.log(123);

  document
    .querySelectorAll(`.${CLASS}`)
    .forEach((el) => el.classList.remove(CLASS));
};

export { remove };
