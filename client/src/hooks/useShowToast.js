import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

const useShowToast = () => {
  const toast = useToast();

  // useCallBack to cache the toast function so that it doesn't get recreated on every render.
  const showToast = useCallback(
    (title, description, status) => {
      toast({
        title,
        description,
        status,
        duration: 3000,
        isClosable: true,
      });
    }, [toast]);
    
  return showToast;
};

export default useShowToast;
