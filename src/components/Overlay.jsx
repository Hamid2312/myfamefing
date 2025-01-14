const BackgroundOverlay = () => {
    return (
      <div
        className="overlay fixed inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Reference the imported image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1, // Ensure it's behind the content
        }}
      ></div>
    );
  };
  