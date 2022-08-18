function Image() {
  const setImageFromFile = ({ file, setImageUrl }) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImageUrl({ result: reader.result });
    };
  };
  return setImageFromFile;
}

export default Image;
