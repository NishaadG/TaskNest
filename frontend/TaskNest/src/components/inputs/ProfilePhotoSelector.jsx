import React, { useRef, useState, useEffect } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (image) {
      const preview = URL.createObjectURL(image);
      setPreviewUrl(preview);

      return () => URL.revokeObjectURL(preview);
    } else {
      setPreviewUrl(null);
    }
  }, [image]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      {/* Hidden Input */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Avatar Display */}
      <div className="relative">
        {previewUrl ? (
          <>
            <img
              src={previewUrl}
              alt="profile photo"
              className="w-20 h-20 rounded-full object-cover"
            />
            <button
              type="button"
              className="absolute -bottom-2 -right-2 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full shadow"
              onClick={handleRemoveImage}
            >
              <LuTrash size={16} />
            </button>
          </>
        ) : (
          <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full">
            <LuUser className="text-4xl text-primary" />
          </div>
        )}
      </div>

      {/* Upload Button */}
      <button
        type="button"
        className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded-full text-primary hover:bg-slate-100"
        onClick={onChooseFile}
      >
        <LuUpload size={16} />
      </button>
    </div>
  );
};

export default ProfilePhotoSelector;
