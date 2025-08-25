declare module "*.mdx" {
  import { MDXProps } from "@mdx-js/react";
  export default function MDXContent(props: MDXProps): JSX.Element;
  export const frontMatter: {
    title?: string;
    description?: string;
    date?: string;
    author?: string;
    tags?: string[];
    published?: boolean;
    client?: string;
    industry?: string;
    featured?: boolean;
    results?: {
      metric: string;
      value: string;
      description?: string;
    }[];
  };
}

declare module "@mdx-js/react" {
  import { ComponentType, ReactNode } from "react";

  export interface MDXProps {
    children?: ReactNode;
    components?: MDXComponents;
  }

  export interface MDXComponents {
    [key: string]: ComponentType<any>;
    h1?: ComponentType<any>;
    h2?: ComponentType<any>;
    h3?: ComponentType<any>;
    h4?: ComponentType<any>;
    h5?: ComponentType<any>;
    h6?: ComponentType<any>;
    p?: ComponentType<any>;
    a?: ComponentType<any>;
    ul?: ComponentType<any>;
    ol?: ComponentType<any>;
    li?: ComponentType<any>;
    blockquote?: ComponentType<any>;
    code?: ComponentType<any>;
    pre?: ComponentType<any>;
    img?: ComponentType<any>;
    hr?: ComponentType<any>;
    table?: ComponentType<any>;
    thead?: ComponentType<any>;
    tbody?: ComponentType<any>;
    tr?: ComponentType<any>;
    td?: ComponentType<any>;
    th?: ComponentType<any>;
  }

  export const MDXProvider: ComponentType<{
    children: ReactNode;
    components?: MDXComponents;
  }>;
}
