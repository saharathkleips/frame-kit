/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { imageMagick } from ".";

export async function loadAndRotate(): Promise<string | null> {
  const { buildInputFile, execute } = await imageMagick();

  const { outputFiles } = await execute({
    inputFiles: [
      await buildInputFile("https://picsum.photos/200/300", "200x300.png"),
    ],
    commands: [`convert 200x300.png -rotate 70 test1.png`],
  });

  const file = outputFiles?.[0];

  if (file?.blob) {
    return window.URL.createObjectURL(file.blob);
  } else {
    return null;
  }
}
