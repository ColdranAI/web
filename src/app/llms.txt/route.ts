import { createGET } from "next-llms-generator/route";

export const GET = createGET({
  generatorOptions: {
    siteUrl: 'http://coldran.com/',
    enableRecursiveDiscovery: true,
  }
});
