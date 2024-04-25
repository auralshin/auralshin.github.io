export interface ProfileProps {
    summary: string;
  }
  
const Profile: React.FC<ProfileProps> = ({ summary }) => {
    return (
      <div className="text-gray-700 text-sm">
        <h2 className="text-xl font-bold mb-2 tracking-wider">PROFILE</h2>
        <div className="flex-1 border-t-2 mb-4 border-black"></div>
        <p>{summary}</p>
      </div>
    );
  };

export default Profile;