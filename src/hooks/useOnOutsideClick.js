import { useEffect } from "react";

export const useOnOutsideClick = (node, node2, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!node.current || !node2.current || node.current.contains(event.target) || node2.current.contains(event.target)) {
        return
      }
      handler(event) // Set menu as closed
    }
    document.addEventListener("mousedown", listener)
    return () => {
        document.removeEventListener("mousedown", listener)
    }
  }, [node, node2, handler])
}