/* 
The code represents the  Footer  component, which represents the footer section of the page. 
 
The component imports the  FC  (FunctionComponent) type from React and the  classNames  utility. 
 
The  Footer  component is defined as a functional component that takes in props of type  FooterProps . The  FooterProps  type includes an optional  className  property for additional CSS classes. 
 
Inside the component, a  footer  element is rendered with a className that combines the default classes "flex items-center justify-center bg-secondary-focus text-secondary-content text-sm h-8 md:h-10 xl:h-12 not-prose" with the provided  className  prop. 
 
Inside the  footer  element, a  p  element is rendered with the copyright symbol and the text "@leoneljrm". The text is wrapped in an  a  element that serves as a link to the specified URL. 
 
Overall, this component represents the footer section of the page, displaying the copyright information and a link to the author's profile.
*/

import { FC } from "react";
import classNames from "classnames";

type FooterProps = {
  className?: string;
};

/**
 * Footer component represents the footer section of the page.
 * @module Footer
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The additional CSS class for the footer.
 * @returns {JSX.Element} The Footer component.
 */
const Footer: FC<FooterProps> = ({ className }): JSX.Element => {
  return (
    <footer
      className={classNames(
        "flex items-center justify-center bg-secondary-focus text-secondary-content text-sm h-8 md:h-10 xl:h-12 not-prose",
        className
      )}
    >
      <p>
        {"©2023 "}
        <a
          className="link link-hover"
          href="https://www.freecodecamp.org/leoneljrm"
        >
          @leoneljrm
        </a>
      </p>
    </footer>
  );
};

export default Footer;
