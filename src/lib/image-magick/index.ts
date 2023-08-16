/**
 * Async load image-magic for optimization.
 * @returns the image-magick module.
 */
export async function imageMagick() {
  return await import("@xn-sakina/image-magick");
}
