const size = {
  xs: '600px',
  sm: '960px',
  md: '1280px',
  lg: '1920px'
};

const sizesMax = {
    xs: `screen and (max-width: ${size.xs})`,
    sm: `screen and (max-width: ${size.sm})`,
    md: `screen and (max-width: ${size.md})`,
    lg: `screen and (max-width: ${size.lg})`,
    tablet: 'screen and (min-device-width : 600px) and (max-device-width : 1024px)',
};

const sizesMin = {
  xs: `screen and (min-width: ${size.xs})`,
  sm: `screen and (min-width: ${size.sm})`,
  md: `screen and (min-width: ${size.md})`,
  lg: `screen and (min-width: ${size.lg})`,
};

export default { sizesMax, size, sizesMin };