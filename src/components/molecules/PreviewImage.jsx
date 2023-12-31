/* eslint-disable react/prop-types */
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import Fancybox from './Fancybox';

export default function PreviewImage({ files }) {
  // Extract the URLs from the files array
  const imageUrls = files?.map(file => URL.createObjectURL(file));


  return (
    <div>
      <Fancybox
        options={{
          Carousel: {
            infinite: false
          }
        }}
      >
        {imageUrls.map((url, index) => (
          <a key={index} data-fancybox='gallery' href={url}>
            <img
              width={20}
              height={20}
              alt={files[index].name}
              className='w-[40px] h-[40px] single-file-image rounded-md'
              src={url}
            />
          </a>
        ))}
      </Fancybox>
    </div>
  );
}
