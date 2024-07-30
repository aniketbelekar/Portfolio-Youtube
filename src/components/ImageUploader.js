import React from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storage = getStorage(); // Ensure Firebase is initialized elsewhere

const ImageUploader = () => {
  const uploadImage = async (file) => {
    try {
      const imageRef = ref(storage, `images/${file.name}`);
      const snapshot = await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(imageRef);
      console.log('File available at', downloadURL);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file. Please try again.');
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = await uploadImage(file);
      console.log('Uploaded file URL:', url);
    }
  };

  return (
    <input type="file" onChange={handleFileChange} />
  );
};

export default ImageUploader;
