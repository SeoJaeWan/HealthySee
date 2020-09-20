export const RenderImg = (blob, update, dispatch) => {
  let render = new FileReader();

  console.log(blob);
  render.readAsDataURL(blob);

  render.onloadend = () => {
    // console.log(render.result);
    dispatch(update({ key: "img", value: render.result }));
  };
};
