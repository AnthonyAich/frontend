import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogout } from '../../hooks/providerHooks/useLogout';


interface Props {
  id: String;
}

const SideBar: React.FC<Props> = (props) => {

    const [homeActive, setHomeActive] = React.useState(false);
    const [classActive, setClasses] = React.useState(false);
    const [meetingActive, setMeetingActive] = React.useState(false);
    const [cursusActive, setCursusActive] = React.useState(false);
    const [profileActive, setProfileActive] = React.useState(false);

    useEffect(() => {
        props.id === "home" && setHomeActive(true);
        props.id === "classes" && setClasses(true);
        props.id === "meetings" && setMeetingActive(true);
        props.id === "courses" && setCursusActive(true);
        props.id === "profile" && setProfileActive(true);
    }, [props.id]);

  return (
    <>
      <nav className='fixed bottom-0 h-16 w-full bg-white flex justify-around items-center border-t-2'>
        <Link to="/dashboard" className={`w-full h-full ${(homeActive) ? 'fill-white bg-primary text-white' : 'fill-primary'}`}>
          <div className='h-full w-full flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 mx-auto`} viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
            <span className='text-sm font-bold text-center'>Home</span>
          </div>
        </Link>
        <Link to="/classes" className={`w-full h-full ${(classActive) ? 'fill-white bg-primary text-white' : 'fill-primary'}`}>
          <div className='h-full w-full flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-5 mx-auto' viewBox="0 0 640 512"><path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 256c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96zm-26.7 32h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"/></svg>
            <span className='text-sm font-bold text-center'>Klassen</span>
          </div>
        </Link>
        <Link to="/profile" className={`w-full h-full ${(cursusActive) ? 'fill-white bg-primary text-white' : 'fill-primary'}`}>
          <div className='h-full w-full flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-5 mx-auto' viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
            <span className='text-sm font-bold text-center'>cursussen</span>
          </div>
        </Link>
        <Link to="/meetings" className={`w-full h-full ${(meetingActive) ? 'fill-white bg-primary text-white' : 'fill-primary'}`}>
          <div className='h-full w-full flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-5 mx-auto' viewBox="0 0 576 512"><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg>            
            <span className='text-sm font-bold text-center'>Meetings</span>
          </div>
        </Link>
        <Link to="/profile" className={`w-full h-full ${(profileActive) ? 'fill-white bg-primary text-white' : 'fill-primary'}`}>
          <div className='h-full w-full flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-5 mx-auto' viewBox="0 0 640 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"/></svg>
            <span className='text-sm font-bold text-center'>Profiel</span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default SideBar;