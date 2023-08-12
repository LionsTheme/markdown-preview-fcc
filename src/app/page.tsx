"use client";

import Previewer from "@/components/Previewer";
import mdExample from "../data/mdExport";
import Editor from "@/components/Editor";
import Container from "@/components/Container";
import { useClearEditor } from "@/hooks";

/**
 * Home component represents the main page of the application.
 *
 * @description The code represents the Home component, which serves as the main page of the application.
 *
 * The component imports the Previewer, Editor, Container, and useClearEditor dependencies.
 *
 * Inside the  Home  component, the useClearEditor hook is used to manage the state of the editor. It returns an array with three elements: value, clearTextarea, and handleChange.
 *
 * The component renders a  Container  component with an empty className. Inside the container, there is a  div  element with a className that defines a grid layout with one column on small screens and two columns on large screens. The gap between the columns is defined using the gap and md:gap CSS classes.
 *
 * The Editor component is rendered with the necessary props: className (empty for now), value  (the current value of the editor), setValue (a function to update the value), and clearEditor (a function to clear the editor's content).
 *
 * Similarly, the  Previewer  component is rendered with the necessary props: className (empty for now) and value (the current value of the editor).
 *
 * Overall, this component represents the main page of the application, displaying an editor and a previewer side by side.
 *
 * @module Home
 * @returns {JSX.Element} The Home component.
 */
const Home = (): JSX.Element => {
  // Use the useClearEditor hook to manage the state of the editor
  const [value, clearTextarea, handleChange] = useClearEditor(mdExample);

  return (
    <Container className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Render the Editor component */}
        <Editor
          className=""
          value={value}
          setValue={handleChange}
          clearEditor={clearTextarea}
        />
        {/* Render the Previewer component */}
        <Previewer className="" value={value} />
      </div>
    </Container>
  );
};

export default Home;
