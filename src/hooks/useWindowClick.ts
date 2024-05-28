import { useEffect } from 'react';

/**
 * This function listens for a click event on the window. If the click event does not originate from an element with the specified id within the specified HTML element, it will set the 'isOpen' state to false.
 *
 * @export
 * @param {Object} params - The parameters for the function.
 * @param {string} params.htmlEl - The HTML element to check if the click event originated from.
 * @param {string} params.elId - The id of the element to check if the click event originated from.
 * @param {Function} params.setIsOpen - The function to set the 'isOpen' state.
 */
export default function useWindowClick({
  htmlEl,
  elId,
  setIsOpen,
}: {
  htmlEl: string;
  elId: string;
  setIsOpen: (prev: boolean) => void;
}) {
  useEffect(() => {
    const handleWindowClick = (event: any) => {
      const target = event.target.closest(htmlEl);
      if (target && target.id === elId) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [elId, setIsOpen, htmlEl]);
}
