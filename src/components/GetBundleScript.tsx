"use client";

/**
 * GetBundleScript component loads the bundle script for FreeCodeCamp testable projects.
 *
 * @description The code represents the  GetBundleScript  component, which is responsible for loading the bundle script for FreeCodeCamp testable projects.
 *
 * The component does not take any props.
 *
 * Inside the component, a  script  element is rendered with a  src  attribute pointing to the bundle script URL provided by FreeCodeCamp.
 *
 * The  script  element is wrapped in a fragment ( <>...</> ) to avoid adding an additional wrapper element.
 *
 * Overall, this component serves the purpose of loading the necessary bundle script for FreeCodeCamp testable projects.
 *
 * @module GetBundleScript
 * @returns {JSX.Element} The GetBundleScript component.
 */
const GetBundleScript = (): JSX.Element => {
  return (
    <>
      {/* Load the bundle script for FreeCodeCamp testable projects */}
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </>
  );
};

export default GetBundleScript;
