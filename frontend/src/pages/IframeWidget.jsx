// IframeWidget.js
const IframeWidget = ({ src }) => {
  return (
    <iframe
      width="300"
      height="300"
      frameBorder="0"
      src={src}
      title="Ubidots Widget"
    ></iframe>
  );
};

export default IframeWidget;
