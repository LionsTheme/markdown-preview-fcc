/**
 * This function copies the content of an HTML element to the user's clipboard memory. First, the text of the element referenced in the function argument is obtained. If there is no text, an error is thrown. Then, a Blob object is created with the text and the data type is specified to be plain text. A ClipboardItem object is then created with the Blob and stored in an array. Finally, the write method of the navigator.clipboard object is used to write the content to the clipboard. If the operation is successful, a message is displayed on the console. If an error occurs, another message is displayed on the console.
 *
 * @param divRef -React.RefObject<HTMLDivElement>
 *
 * @example copyToClipboard(divRef);
 */
function copyToClipboard(divRef: React.RefObject<HTMLDivElement>): void {
  const text = divRef.current?.textContent;
  const type = "text/plain";

  if (!text) {
    throw new Error("Error al copiar al portapapeles.");
  }

  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  navigator.clipboard.write(data).then(
    function () {
      console.log("Copiado al portapapeles!");
    },
    function () {
      console.log("Error al copiar al portapapeles.");
    }
  );
}

export default copyToClipboard;
