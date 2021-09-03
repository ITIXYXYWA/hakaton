const saveBlobUrl = ({ testModule, duration }) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    localStorage.setItem(testSpeakingFile, event.target.result);
  };
  
  reader.readAsDataURL(blob);

  localStorage.setItem(testModule, JSON.stringify({ blob: blobURL }));

  return duration;
};