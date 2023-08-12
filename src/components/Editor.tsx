"use client";

/* 
The code represents the  Editor  component, which serves as a text editor for Markdown content. 
 
The component imports the  FC  (FunctionComponent) type from React, the  classNames  utility, the  PageHeader  component, and the  useCopyToClipboard  and  useFullscreen  hooks. 
 
The  Editor  component is defined as a functional component that takes in props of type  EditorProps . The  EditorProps  type includes an optional  className  property for additional CSS classes, a  value  property for the current value of the editor, a  setValue  function to update the value, and a  clearEditor  function to clear the editor's content. 
 
Inside the component, a  wrappRef  is created using the  useRef  hook to reference the section element. The  useCopyToClipboard  and  useFullscreen  hooks are used to handle copying to clipboard and fullscreen functionality, respectively. 
 
The component renders a  section  element with a ref to  wrappRef  and an id of "previewer-wrapped". The section element's className is determined using the  classNames  utility, combining an empty string with the "p-4 sm:p-6 lg:p-8" class when  isFullscreen  is true. 
 
Inside the section, a  div  element is rendered with a className that combines various classes using the  classNames  utility. The  className  prop,  isFullscreen , and "mx-auto max-w-7xl" class are conditionally applied. 
 
The  PageHeader  component is rendered with the necessary props, including the title, value, copied status, fullscreen status, and functions for copying to clipboard, entering fullscreen, exiting fullscreen, and clearing the editor. 
 
Finally, a  textarea  element is rendered for editing the content. It has an id of "editor" and a className that combines various classes for styling. The value is set to the  value  prop, and the  setValue  function is called on  onChange  to update the value as the user types. 
 
Overall, this component represents a text editor for Markdown content, providing features such as fullscreen mode, copying to clipboard, and clearing the editor's content.
*/

import { FC, useRef } from "react";
import classNames from "classnames";
import PageHeader from "./PageHeader";
import { useCopyToClipboard, useFullscreen } from "@/hooks";

type EditorProps = {
  className?: string;
  value: string;
  setValue: (value: string) => void;
  clearEditor: () => void;
};

/**
 * Editor component represents a text editor for Markdown content.
 * @module Editor
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The additional CSS class for the editor.
 * @param {string} props.value - The current value of the editor.
 * @param {Function} props.setValue - The function to update the value of the editor.
 * @param {Function} props.clearEditor - The function to clear the editor's content.
 * @returns {JSX.Element} The Editor component.
 */
const Editor: FC<EditorProps> = ({
  className,
  value,
  setValue,
  clearEditor,
}): JSX.Element => {
  const wrappRef = useRef<HTMLElement>(null);
  const { copyToClipboard, copied } = useCopyToClipboard(value);
  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen();

  /**
   * Handles entering fullscreen mode for the editor.
   */
  const handleEnterFullScreen = () => {
    enterFullscreen(wrappRef.current);
  };

  return (
    <section
      ref={wrappRef}
      id="previewer-wrapped"
      className={classNames("", [isFullscreen && "p-4 sm:p-6 lg:p-8"])}
    >
      <div
        className={classNames(
          "flex flex-col border border-secondary rounded-lg md:rounded-xl h-full overflow-hidden",
          className,
          [isFullscreen && "mx-auto max-w-7xl"]
        )}
      >
        {/* Render the PageHeader component */}
        <PageHeader
          title="Editor"
          value={value}
          showTrash
          copied={copied}
          isFullscreen={isFullscreen}
          copyToClipboard={copyToClipboard}
          enterFullscreen={handleEnterFullScreen}
          exitFullscreen={exitFullscreen}
          clearEditor={clearEditor}
        />
        {/* Render the textarea for editing */}
        <textarea
          id="editor"
          className={
            "textarea textarea-lg textarea-ghost resize-none h-full w-full min-h-[50vh] focus:border-none focus:outline-none focus-visible:outline-none rounded-none bg-slate-50"
          }
          placeholder="Enter Markdown"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </section>
  );
};

export default Editor;
