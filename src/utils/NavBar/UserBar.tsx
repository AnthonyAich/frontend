import React, {useContext} from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider';
import { useLogout } from '../../hooks/providerHooks/useLogout';
import anthostudyLogo from '../../images/anthoStudyLogo.svg';

interface Props {
    userName: string;
}

const UserBar: React.FC<Props> = (props) => {
const { isAuth, user } = useContext(AuthContext);
const { logout } = useLogout();
const navigateTo = useNavigate();

const logoutHandler = () => {
    logout();
    navigateTo('/');
}

  return (
    <div className="md:ml-[3.35rem]">
        {user && (
        <>
            <h2 className='text-lg font-bold h-[50px] leading-[50px] bg-white px-5 border-b-2 flex justify-between group'>
                <img src={anthostudyLogo} alt="anthoStudy logo" className="h-5 p-0 m-0 my-auto" /> 
                <span>{props.userName}</span>
            <div className="absolute top-14 right-2 hidden rounded border-2 opacity-0 bg-white shadow-2xl transition-opacity group-hover:block group-hover:opacity-100 ">
                <p className="text-lg px-5 py-3">Welkom bij anthoStudy</p>
                <p className="text-base px-5 py-2">Profiel</p>
                <p className="text-base px-5 py-2 bg-red-600 text-white rounded" onClick={() => logoutHandler()}>Uitloggen</p>
            </div>
            </h2>
        </>
        )
            
        }
        
        
        {!user && (<h2 className='text-lg font-bold h-[50px] leading-[50px] bg-white px-5 border-b-2 flex justify-between animate-pulse'> <img src={anthostudyLogo} alt="anthoStudy logo" className="h-5 p-0 m-0 my-auto" /> Loading...</h2>)}
    </div>
  );
};

export default UserBar;