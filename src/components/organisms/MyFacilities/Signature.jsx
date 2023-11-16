/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { useRef, useState } from 'react';
import SignaturePad from 'react-signature-canvas';

function Signature({name}) {
  const [trimmedDataURL, setTrimmedDataURL] = useState(null);
  const sigPad = useRef(null);
  const {setFieldValue} = useFormikContext()

  const clear = () => {
    sigPad.current.clear();
  };

  const trim = () => {
    const trimmedCanvas = sigPad.current.getTrimmedCanvas();
    const dataURL = trimmedCanvas.toDataURL('image/png');
    const blob = dataURLtoBlob(dataURL);
    const file = new File([blob], 'signature.png', { type: 'image/png' });
    setFieldValue(name,file)
    console.log('File:', file);
    setTrimmedDataURL(dataURL);
  };
  const dataURLtoBlob = (dataURL) => {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div className={'  w-full p-5 rounded-2xl'}>
      <div className={'w-full flex '}>
        <SignaturePad canvasProps={{ className: 'w-full h-full border' }} ref={sigPad} />
      </div>
      <div className='flex justify-between my-3'>
        <Button className={''} variant='outlined' onClick={clear}>
          Clear
        </Button>
        <Button className={''} variant='outlined' onClick={trim}>
          Preview
        </Button>
      </div>
      <div className='border'>
        {trimmedDataURL ? <img className={''} src={trimmedDataURL} alt='Signature' /> : null}
      </div>
    </div>
  );
}

export default Signature;
