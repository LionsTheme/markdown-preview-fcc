"use client";

import { FC, MouseEventHandler } from "react";
import classNames from "classnames";
import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  CheckIcon,
  CopyClipboardIcon,
  TrashIcon,
} from "./Icons";

type PageHeaderProps = {
  className?: string;
  title?: string;
  value: string;
  showTrash?: boolean;
  copied?: boolean;
  isFullscreen?: boolean;
  copyToClipboard: () => void;
  enterFullscreen: () => void;
  exitFullscreen: () => void;
  clearEditor?: () => void;
};

/**
 * Page Header Component
 *
 * @component PageHeader
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS classes for the component
 * @param {string} [props.title] - Header title
 * @param {string} props.value - Content value
 * @param {boolean} [props.showTrash=false] - Indicates whether to show the trash icon
 * @param {boolean} [props.copied] - Indicates whether the content has been copied to clipboard
 * @param {boolean} [props.isFullscreen] - Indicates whether the component is in fullscreen mode
 * @param {function} props.copyToClipboard - Function to copy the content to clipboard
 * @param {function} props.enterFullscreen - Function to enter fullscreen mode
 * @param {function} props.exitFullscreen - Function to exit fullscreen mode
 * @param {function} [props.clearEditor] - Function to clear the content of the editor
 * @returns {JSX.Element} - The rendered component
 */
const PageHeader: FC<PageHeaderProps> = ({
  className,
  title,
  value,
  showTrash = false,
  copyToClipboard,
  copied,
  isFullscreen,
  enterFullscreen,
  exitFullscreen,
  clearEditor,
}) => {
  /**
   * Event handler for the fullscreen button
   *
   * @param {React.MouseEvent<HTMLButtonElement>} _event - The button click event
   */
  const handleBtnFullScreen:
    | MouseEventHandler<HTMLButtonElement>
    | undefined = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  return (
    <div
      className={classNames(
        "flex items-center justify-between bg-secondary text-secondary-content font-semibold px-4 py-2",
        className
      )}
    >
      <p className="m-0 text-current md:text-lg lg:text-xl">
        {!!title ? title : ""}
      </p>
      <div className="flex items-center gap-1">
        {showTrash && (
          <button
            className="btn btn-xs btn-ghost btn-circle disabled:bg-transparent disabled:text-gray-400"
            onClick={clearEditor}
            disabled={!!!value}
          >
            <TrashIcon className="h-4 w-4" title="Clear" />
          </button>
        )}
        <div
          className={classNames("flex", [
            copied && "tooltip tooltip-success tooltip-bottom tooltip-open",
          ])}
          data-tip="Copied!"
        >
          <button
            className="btn btn-xs btn-ghost btn-circle disabled:bg-transparent disabled:text-gray-400"
            onClick={(_e) => copyToClipboard()}
            disabled={!!!value}
          >
            {copied ? (
              <CheckIcon className="h-4 w-4 text-success" />
            ) : (
              <CopyClipboardIcon className="h-4 w-4" />
            )}
          </button>
        </div>
        <button
          className="btn btn-xs btn-ghost btn-circle"
          onClick={handleBtnFullScreen}
        >
          {isFullscreen ? (
            <ArrowsPointingInIcon className="h-4 w-4" />
          ) : (
            <ArrowsPointingOutIcon className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
