"use client";

import { useState } from "react";
import Image from "next/image";
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete, userProfile, onProfileUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(userProfile?.username || "");
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = async () => {
    setSaving(true);
    setMessage("");

    try {
      const formData = new FormData();
      if (editName && editName.trim() !== "") {
        formData.append("username", editName.trim());
      }
      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      const response = await fetch("/api/users/profile", {
        method: "PATCH",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Profile updated successfully!");
        setIsEditing(false);
        setProfileImage(null);
        setImagePreview(null);
        
        // Notify parent to refresh session/data
        if (onProfileUpdate) {
          onProfileUpdate(result.user);
        }
      } else {
        setMessage(result.error || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditName(userProfile?.username || "");
    setProfileImage(null);
    setImagePreview(null);
    setMessage("");
  };

  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      {/* User Profile Info Section - Only show for own profile */}
      {userProfile && (
        <div className='mt-8 glassmorphism p-6 rounded-xl'>
          <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6'>
            {/* Profile Image */}
            <div className='relative'>
              <Image
                src={imagePreview || userProfile.image || '/assets/images/default-avatar.svg'}
                alt='profile'
                width={100}
                height={100}
                className='rounded-full object-cover'
              />
              {isEditing && (
                <label className='absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer hover:bg-blue-600 transition-colors'>
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 13a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  <input
                    type='file'
                    accept='image/*'
                    onChange={handleImageChange}
                    className='hidden'
                  />
                </label>
              )}
            </div>

            {/* Profile Info */}
            <div className='flex-1 text-center sm:text-left'>
              {isEditing ? (
                <div className='space-y-3'>
                  <div>
                    <label className='font-satoshi font-semibold text-sm text-gray-700'>
                      Display Name
                    </label>
                    <input
                      type='text'
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className='form_input mt-1'
                      placeholder='Enter your name'
                    />
                  </div>
                  <div className='flex gap-3 justify-center sm:justify-start'>
                    <button
                      onClick={handleSaveProfile}
                      disabled={saving}
                      className='black_btn'
                    >
                      {saving ? "Saving..." : "Save Changes"}
                    </button>
                    <button
                      onClick={cancelEdit}
                      className='outline_btn'
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className='font-satoshi font-bold text-xl text-gray-900'>
                    {userProfile.username}
                  </h2>
                  <p className='font-inter text-sm text-gray-500 mt-1'>
                    {userProfile.email}
                  </p>
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setEditName(userProfile.username);
                    }}
                    className='mt-4 outline_btn'
                  >
                    Edit Profile
                  </button>
                </>
              )}
              
              {message && (
                <p className={`mt-3 text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
