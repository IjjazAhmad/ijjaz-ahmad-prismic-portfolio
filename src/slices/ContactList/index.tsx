import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactList`.
 */
export type ContactListProps = SliceComponentProps<Content.ContactListSlice>;

/**
 * Component for "ContactList" Slices.
 */
const ContactList = ({ slice }: ContactListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <p>{slice.primary.address}</p>
    </section>
  );
};

export default ContactList;
