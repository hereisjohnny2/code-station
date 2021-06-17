import fs from "fs";

export const deleteFile = async (filename: string): Promise<void> => {
  try {
    await fs.promises.stat(filename);
    // eslint-disable-next-line no-empty
  } catch (error) {
    return;
  }

  await fs.promises.unlink(filename);
};
