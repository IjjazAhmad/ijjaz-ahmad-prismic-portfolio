import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `Description`.
 */
export type DescriptionProps = SliceComponentProps<Content.DescriptionSlice>;

/**
 * Component for "Description" Slices.
 */
const Description = ({ slice }: DescriptionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextLink field={slice.primary.bloglink}>Link</PrismicNextLink>
      <h3>{slice.primary.description}</h3>
    </section>
  );
};

export default Description;
