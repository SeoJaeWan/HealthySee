export const onRenderImg = (file, update, dispatch) => {
  let render = new FileReader();

  render.readAsDataURL(file);

  render.onloadend = () => {
    // console.log(render.result);
    dispatch(update({ key: "img", value: render.result }));
  };
};
