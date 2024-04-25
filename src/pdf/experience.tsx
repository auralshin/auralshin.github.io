export interface ExperienceProps {
    title: string;
    company: string;
    period: string;
    location: string;
    descriptions: string[];
  }

const Experience: React.FC<ExperienceProps> = ({
    title,
    company,
    period,
    location,
    descriptions,
  }) => {
    return (
      <div className="mb-5">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm font-semibold">{company}</p>
        <p className="text-sm text-gray-500">{`${period} - ${location}`}</p>
        <ul className="list-disc ml-5 text-gray-700">
          {descriptions.map((desc, index) => (
            <li key={index} className="text-sm">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default Experience;