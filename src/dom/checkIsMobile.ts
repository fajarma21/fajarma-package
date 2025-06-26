const checkIsMobile = () => {
  const userAgent = navigator.userAgent;
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    userAgent
  );
};

export default checkIsMobile;
