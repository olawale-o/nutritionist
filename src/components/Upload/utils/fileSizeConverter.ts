export const fileSizeConverter = (size: number) => {
  let newSize: number = size;

  if (size >= 1000000000) {
    newSize = Math.round(size / 1000000000);
    return `${newSize}GB`;
  }

  if (size >= 1000000) {
    newSize = Math.round(size / 1000000);
    return `${newSize}MB`;
  }

  if (size >= 1000) {
    newSize = Math.round(size / 1000);
    return `${newSize}KB`;
  }

  return `${newSize}B`;
};
