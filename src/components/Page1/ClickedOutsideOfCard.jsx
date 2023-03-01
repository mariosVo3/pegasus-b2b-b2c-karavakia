import React, { useRef, useEffect } from 'react';
import { useBoundStore } from '../../store/store';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, setSelectedCard, resetSelectedPeople ) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert('You clicked outside of me!');
        setSelectedCard(null);
        resetSelectedPeople();
        
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function ClickedOutsideOfCard(props) {
  const setSelectedCard = useBoundStore(state => state.setSelectedCard);
  const resetSelectedPeople = useBoundStore(state => state.resetSelectedPeople);
  const wrapperRef = useRef(null);
  const seterror_msg_pass = useBoundStore(
    state => state.seterror_msg_pass
  );
  useOutsideAlerter(wrapperRef, setSelectedCard, resetSelectedPeople);

  return <div ref={wrapperRef}>{props.children}</div>;
}
