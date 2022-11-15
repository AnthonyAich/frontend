import React from 'react';
import { Link } from 'react-router-dom';
//name, description, teacher
interface Props {
  name: string;
  description: string;
  teacher: string;
  id: string;
}

const MeetingBlok: React.FC<Props> = (props) => {
  return (
    <Link to={`/meeting/${props.id}`}>
        <div className="block p-6 w-72 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ml-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 overflow-hidden text-ellipsis line-clamp-1">{props.name}</h5>
            <p className="font-normal text-gray-700 line-clamp-2">{props.description}</p>
            <p className="font-normal text-gray-700 ">Leeraar: <span className="font-bold">{props.teacher}</span></p>
        </div>
    </Link>
  );
};

export default MeetingBlok;