import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { AuthContext } from '../../contexts/AuthProvider';
import SideBar from '../../utils/NavBar/SideBar';
import KlasBlok from './KlasBlok';
import MeetingBlok from './MeetingBlok';
import { MeetingContext } from '../../contexts/MeetingProvider';
import { ClassContext } from '../../contexts/ClassProvider';
import UserBar from '../../utils/NavBar/UserBar';



interface Props {
}

const Dashboard: React.FC<Props> = (props) => {    
  useEffect(() => {
    document.title = "anthoStudy - Dashboard";
  }, []);

  const { isAuth, user } = useContext(AuthContext);
  const { meetings, getAllMyMeetings, loading, error } = useContext(MeetingContext);
  const { classes, getAllMyClasses, loading : loadingClass } = useContext(ClassContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAllMyMeetings();
  }, [getAllMyMeetings]);

  useEffect(() => {
    getAllMyClasses();
  }, [getAllMyClasses]);

  useEffect(() => {
    if (!isAuth) {
        // navigate('/login');
    }
  }, [navigate, isAuth]);

  return (
    <>
    <SideBar id="home" />
    {user && <UserBar userName={user.firstName + ' ' + user.lastName} />}
    {!user && <UserBar userName="Loading..." />}
    <div className='md:ml-[3.35rem]'>

        <h1 className='text-3xl font-bold mt-3 pl-5'>Home</h1>
        {/* mijn klassen */}
        <h2 className='text-2xl font-bold mt-10 pl-5'>Mijn klassen</h2>
        <div className='overflow-x-scroll flex mt-5 scrollbar-hide pb-3'>
          {
            classes && classes.map((singleClass: any) => (
              <KlasBlok key={singleClass.id} name={singleClass.Class.name} description={singleClass.Class.description} teacher={`${singleClass.teacher.firstName} ${singleClass.teacher.lastName}`} />
            ))
          }
          {
            classes && (classes.length === 0 && (
                <p className='text-lg font-bold ml-5'>Je hebt nog geen klassen</p>
            ))
          }
          {
            loadingClass && (
              <div className='animate-pulse'>
                <KlasBlok name='Loading...' description='Loading...' teacher='Loading...' />
              </div>
            )
          }
        </div>
        {/* mijn meetings */}
        <h2 className='text-2xl font-bold mt-10 pl-5'>Mijn meetings</h2>
        <div className='overflow-x-scroll flex mt-5 scrollbar-hide pb-3'>
        {
          meetings && meetings.map((meeting: any) => {
            return (
              <MeetingBlok key={meeting.Meeting.id} id={meeting.Meeting.id} name={meeting.Meeting.name} description={meeting.Meeting.description} teacher={`${meeting.teacher.firstName} ${meeting.teacher.lastName}`} />
            )
          })
        }
        {
          meetings && (meetings.length === 0 && (
              <p className='text-lg font-bold ml-5'>Je hebt nog geen meetings</p>
           )
          )
        }
        {
          loading && (
            <div className='animate-pulse'>
              <MeetingBlok name='Loading...' id="Loading" description='Loading...' teacher='Loading...' />
            </div>
          )
        }
        {
          error && (
            <p className='text-lg font-bold ml-5'>Er is iets fout gegaan</p>
          )
        }
        </div>
        </div>
    </>
  );
};

export default Dashboard;