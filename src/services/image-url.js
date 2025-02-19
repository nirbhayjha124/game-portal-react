
const getCroppedImageUrl =( url ) => {

  if (!url) return "https://via.placeholder.com/600x400"; // Default image if URL is missing

  const target = 'media/';
  const index = url.indexOf(target);
  if (index === -1) return url; // If "media/" not found, return original URL

  return url.slice(0, index + target.length) + "crop/600/400/" + url.slice(index + target.length);
}

export default getCroppedImageUrl;