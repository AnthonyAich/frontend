import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import anthostudyLogo from '../../images/anthoStudyLogo.svg';

interface Props {
    userName: string;
}

const UserBar: React.FC<Props> = (props) => {
const { isAuth, user } = useContext(AuthContext);
  return (
    <div className="md:ml-[3.35rem]">
        {user && (<h2 className='text-lg font-bold h-[50px] leading-[50px] bg-white px-5 border-b-2 flex justify-between'> <img src={anthostudyLogo} alt="anthoStudy logo" className="h-5 p-0 m-0 my-auto" /> {props.userName}</h2>)}
        {!user && (<h2 className='text-lg font-bold h-[50px] leading-[50px] bg-white text-right pr-5 border-b-2 animate-pulse'> Loading...</h2>)}
    </div>
  );
};

export default UserBar;