import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// components
import PhotoCollection from "../../Components/restaurant/PhotosCollection";

const Photos = () => {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/2/1400382/050683b4f88ae6148ca2e0e3d4fdc475.jpg?",
    "https://b.zmtcdn.com/data/pictures/2/1400382/ba637a009bf5bc4bcf197e235f755c84.jpg?",
    "https://b.zmtcdn.com/data/reviews_photos/327/89d9486874180c0fa744633a3271e327_1548747742.jpg?",
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);

  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={CurrentImg}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeViewer}
        />
      )}
        <div className="flex flex-wrap gap-2">
      {photos.map((photo) => (
        <PhotoCollection image={photo} openViewer={openViewer} />
      ))}
      </div>
    </>
  );
};

export default Photos;
