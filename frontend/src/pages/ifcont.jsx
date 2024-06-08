
const IframeContainer = () => {
  const iframeStyle = {
    // Add any specific styles for the iframes if needed
    width: '1080px', // Example width
    height: '400px', // Example height
    margin: '10px', // Example margin
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Adjust as needed
    alignItems: 'center', // Adjust as needed
    flexWrap: 'wrap', // Adjust as needed
  };

  return (
    <div style={containerStyle}>
      <iframe 
      width= "80%"
        title="iframe1"
        src="https://industrial.ubidots.com/app/dashboards/public/widget/Uos6QD2IOvZIsyFQOW7R0zWyhvir4lEI6uIW1QkHcyc?embed=true"
        style={iframeStyle}
      />
      <iframe
        title="iframe2"
        src="https://industrial.ubidots.com/app/dashboards/public/widget/w9WH32B-uRyKzmsIZTNTSIAk1Cjtjp_yY3ItJ7qLSnQ?embed=true"
        style={iframeStyle}
      />
      <iframe
        title="iframe3"
        src="https://industrial.ubidots.com/app/dashboards/public/widget/DZw64d4qznnF7B-Rg6ZXJn0fGayLgFhckgDdFrVfsg4?embed=true"
        style={iframeStyle}
      />
      <iframe
        title="iframe4"
        src="https://industrial.ubidots.com/app/dashboards/public/widget/iINVpFl0DTvb98qHXrTrL1S2pfeXXsQuM5WQaC3dUKo?embed=true"
        style={iframeStyle}
      />
    </div>
  );
};

export default IframeContainer;
