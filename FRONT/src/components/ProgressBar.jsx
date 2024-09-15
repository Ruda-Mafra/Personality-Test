import { Progress } from "flowbite-react";

const Progressbar = () => {
  return (
    <Progress
      progress={45}
      progressLabelPosition="inside"
      textLabel
      textLabelPosition="outside"
      size="lg"
      labelProgress
      labelText
    />
  );
};
export default Progressbar;
