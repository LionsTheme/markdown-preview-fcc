import { FC } from "react";
import classNames from "classnames";

type HeaderProps = {
  className?: string;
};

/**
 * Header component represents the header section of the page.
 *
 * @description The code represents the  Header  component, which represents the header section of the page.
 *
 * The component imports the  FC  (FunctionComponent) type from React and the  classNames  utility.
 *
 * The  Header  component is defined as a functional component that takes in props of type  HeaderProps . The  HeaderProps  type includes an optional  className  property for additional CSS classes.
 *
 * Inside the component, a  header  element is rendered with a className that combines the default classes "flex items-center justify-center bg-primary text-primary-content h-12 md:h-14 lg:h-16 xl:h-20 prose-h1:text-xl md:prose-h1:text-2xl lg:prose-h1:text-3xl xl:prose-h1:text-4xl" with the provided  className  prop.
 *
 * Inside the  header  element, an  h1  element is rendered with the text "Markdown Live Preview" and a className of "mb-0 text-current".
 *
 * Overall, this component represents the header section of the page, displaying the title "Markdown Live Preview".
 *
 * @module Header
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The additional CSS class for the header.
 * @returns {JSX.Element} The Header component.
 */
const Header: FC<HeaderProps> = ({ className }): JSX.Element => {
  return (
    <header
      className={classNames(
        "flex items-center justify-center bg-primary text-primary-content h-12 md:h-14 lg:h-16 xl:h-20 prose-h1:text-xl md:prose-h1:text-2xl lg:prose-h1:text-3xl xl:prose-h1:text-4xl",
        className
      )}
    >
      <h1 className="mb-0 text-current">Markdown Live Preview</h1>
    </header>
  );
};

export default Header;
