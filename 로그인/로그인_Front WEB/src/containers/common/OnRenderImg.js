import { useDispatch } from "react-redux";

export const OnRenderImg = (file, update) => {
  const dispatch = useDispatch();

  let render = new FileReader();

  render.readAsDataURL(file);

  render.onloadend = () => {
    // console.log(render.result);
    dispatch(update({ key: "img", value: render.result }));
  };
};
