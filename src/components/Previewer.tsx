"use client";

/* 
The code represents the  Previewer  component, which serves as a markdown previewer. 
 
The component imports the  FC  (FunctionComponent) type from React, the  marked  library, the  Prism  library, the  classNames  utility, and the  useCopyToClipboard  and  useFullscreen  hooks. 
 
The  Previewer  component is defined as a functional component that takes in props of type  PreviewerProps . The  PreviewerProps  type includes an optional  className  property for additional CSS classes and a required  value  property for the markdown content to be previewed. 
 
Inside the component, a  wrappRef  is created using the  useRef  hook to reference the section element. The  useCopyToClipboard  and  useFullscreen  hooks are used to handle copying to clipboard and fullscreen functionality, respectively. 
 
The  handleEnterFullScreen  function is defined to handle entering fullscreen mode for the previewer. 
 
The  marked  library is configured with options, including enabling line breaks and highlighting code using the  Prism  library. 
 
A new instance of the  marked.Renderer  is created, and the  link  method is overridden to open links in a new tab. 
 
The component renders a  section  element with a ref to  wrappRef  and an id of "previewer-wrapped". The section element's className is determined using the  classNames  utility, combining an empty string with the "p-4 sm:p-6 lg:p-8" class when  isFullscreen  is true. 
 
Inside the section, a  div  element is rendered with a className that combines various classes using the  classNames  utility. The  className  prop,  isFullscreen , and "mx-auto max-w-7xl" class are conditionally applied. 
 
The  PageHeader  component is rendered with the necessary props, including the title, value, copy functionality, copied status, fullscreen status, and functions for entering and exiting fullscreen. 
 
Finally, a  div  element is rendered for displaying the previewed markdown content. It has a ref to  divRef , an id of "preview", a className for styling, and the  dangerouslySetInnerHTML  prop to render the marked content using the configured renderer. 
 
Overall, this component represents a markdown previewer, providing features such as fullscreen mode, copying to clipboard, and rendering the previewed markdown content.
*/

import { FC, useRef } from "react";
import { marked } from "marked";
import Prism from "prismjs";
import classNames from "classnames";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import useFullscreen from "@/hooks/useFullscreen";
import PageHeader from "./PageHeader";

type PreviewerProps = {
  className?: string;
  value: string;
};

/**
 * Previewer component represents a markdown previewer.
 * @module Previewer
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The additional CSS class for the previewer.
 * @param {string} props.value - The markdown content to be previewed.
 * @returns {JSX.Element} The Previewer component.
 */
const Previewer: FC<PreviewerProps> = ({ className, value }): JSX.Element => {
  const wrappRef = useRef<HTMLElement>(null);
  const { divRef, copyToClipboard, copied } = useCopyToClipboard();
  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen();

  /**
   * Handles entering fullscreen mode for the previewer.
   */
  const handleEnterFullScreen = () => {
    enterFullscreen(wrappRef.current);
  };

  // Configure options for the marked library
  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
  });

  // Create a new instance of the marked renderer
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
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
          title="Previewer"
          value={value}
          copyToClipboard={copyToClipboard}
          copied={copied}
          isFullscreen={isFullscreen}
          enterFullscreen={handleEnterFullScreen}
          exitFullscreen={exitFullscreen}
        />
        <div
          ref={divRef}
          id="preview"
          className={
            "markdown-preview h-full overflow-y-auto px-4 py-6 bg-slate-200"
          }
          dangerouslySetInnerHTML={{
            __html: marked(value, { renderer: renderer }),
          }}
        />
      </div>
    </section>
  );
};

export default Previewer;
