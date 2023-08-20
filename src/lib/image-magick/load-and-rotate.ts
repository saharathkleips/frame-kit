/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { imageMagick } from ".";
import imageData from "../../assets/vite.png?uint8array";

export async function loadAndRotate(): Promise<string | null> {
  const { call } = await imageMagick();

  const image = { name: "vite.png", content: imageData };
  const command = ["convert", "vite.png", "-rotate", "90", "out.png"];
  const { outputFiles } = await call([image], command);

  const file = outputFiles?.[0];

  if (file?.blob) {
    return window.URL.createObjectURL(file.blob);
  } else {
    return null;
  }
}
