export type SvgProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
};

export type SvgColorProps = SvgProps & {
  color?: string;
  isEmpty?: boolean;
};
