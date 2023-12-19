// Profile.tsx
import React from 'react';

interface ProfileProps {
  summary: string;
}

const Profile: React.FC<ProfileProps> = ({ summary }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Profile</h2>
      <p className="text-gray-700 text-sm">{summary}</p>
    </div>
  );
};

export default Profile;
