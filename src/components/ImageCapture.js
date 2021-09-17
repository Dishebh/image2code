import { Button, Typography } from '@material-ui/core';
import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

function ImageCapture() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    setImgSrc(image);
  }, [webcamRef, setImgSrc]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'environment',
  };

  return (
    <div>
      <Button
        color='primary'
        variant='contained'
        onClick={imgSrc === null ? capture : () => setImgSrc(null)}
      >
        {imgSrc === null ? 'Capture Image' : 'Take another image'}
      </Button>
      <Typography variant='h6' align='center'>
        Image Preview
      </Typography>
      <hr />
      {imgSrc === null ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          width='100%'
          videoConstraints={videoConstraints}
        />
      ) : (
        <></>
      )}
      {imgSrc && <img src={imgSrc} alt='preview' />}
    </div>
  );
}

export default ImageCapture;
