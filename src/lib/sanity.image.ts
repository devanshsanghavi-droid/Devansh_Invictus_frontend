import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './sanity';

const builder = imageUrlBuilder(sanityClient);

type ImageSource = { asset?: { _id?: string }; _id?: string } | null | undefined;

export function sanityImageUrl(source: ImageSource): string {
  if (!source?.asset?._id && !source?._id) return '';
  return builder.image(source).url();
}

/** Alias for sanityImageUrl (guide pattern: urlFor). Use for building image URLs from Sanity refs. */
export function urlFor(source: ImageSource): string {
  return sanityImageUrl(source);
}
