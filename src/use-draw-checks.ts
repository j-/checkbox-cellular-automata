import * as React from 'react';

export const useDrawChecks = <TElement extends HTMLElement>() => {
  const elementRef = React.useRef<TElement>(null);
  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    // Remember what the initial checkbox state was
    let checkedValue: boolean;
    // Called after mousedown whenever the mouse moves until mouseup
    const handleMousemove = (e: MouseEvent) => {
      const checkbox = e.target as HTMLInputElement;
      // If target is not an input then exit early
      if (!checkbox || checkbox.nodeName !== 'INPUT') return;
      // Set the value and trigger a change event
      checkbox.checked = checkedValue;
      checkbox.click();
    };
    // Stops the mousemove listener firing
    const handleMouseup = (e: MouseEvent) => {
      window.removeEventListener('mousemove', handleMousemove);
    };
    // Starts the drawing process
    const handleMousedown = (e: MouseEvent) => {
      const checkbox = e.target as HTMLInputElement;
      // If target is not an input then exit early
      if (!checkbox || checkbox.nodeName !== 'INPUT') return;
      checkedValue = checkbox.checked;
      window.addEventListener('mousemove', handleMousemove);
      window.addEventListener('mouseup', handleMouseup);
    };
    element.addEventListener('mousedown', handleMousedown);
    // Remove all listeners on unmount
    return () => {
      element.removeEventListener('mousedown', handleMousedown);
      window.removeEventListener('mousemove', handleMousemove);
      window.removeEventListener('mouseup', handleMouseup);
    };
  }, []);
  return elementRef;
};
