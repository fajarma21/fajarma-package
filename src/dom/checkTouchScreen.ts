const checkTouchScreen = () => {
  return (
    'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0
  );
};

export default checkTouchScreen;
