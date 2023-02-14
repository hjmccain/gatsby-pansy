import { getImage } from "gatsby-plugin-image";
import type FileTypes from "gatsby-source-filesystem";

export type AllFile = {
  edges: Array<Record<"node", FileTypes.FileSystemNode>>;
};

export function findImage(files: AllFile, stringToMatch: string) {
  const imageData = files.edges.find(
    (node) => node.node.name === stringToMatch
  );

  const data = imageData?.node;
  return data && getImage(data);
}

export default findImage;
