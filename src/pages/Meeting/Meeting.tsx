import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider';
import SideBar from '../../utils/NavBar/SideBar';
import { MeetingContext } from '../../contexts/MeetingProvider';
import { useParams } from 'react-router';
import UserBar from '../../utils/NavBar/UserBar';

interface Props {
}

const Meeting: React.FC<Props> = (props) => {

  useEffect(() => {
    document.title = "anthoStudy - Meeting";
  }, []);



  const {meeting, getMeeting, loading, error} = useContext(MeetingContext);
  const { isAuth, user } = useContext(AuthContext);
  const navigation = useNavigate();

  useEffect(() => {
    document.title = `anthoStudy - ${meeting.name}`;
  }, [meeting.name]);

  useEffect(() => {
    if (!isAuth && isAuth !== undefined) {
      navigation('/Login');
    }
  }, [isAuth, navigation]);

    // get id from url
    const { id } = useParams();

  useEffect(() => {
    getMeeting(id);
    }, [getMeeting, id]);

    const meetingJoinHandler = () => {
        window.open(`http://192.168.0.196:9000/join/${meeting.Room[0].roomId}?name=${user.firstName} ${user.lastName}`, "room", "width=1000, height=600");
    }

  return (
    <>
    <SideBar id="meetings" />
    {user && <UserBar userName={user.firstName + ' ' + user.lastName} />}
    {!user && <UserBar userName="Loading..." />}
    <div className='md:ml-[3.35rem]'>
        {
          (!loading && meeting) && (
                <>
                <h1 className='text-3xl font-bold mt-10 pl-5'>{meeting.name}</h1>
                <p className='text-lg mt-5 pl-5'>{meeting.description}</p>
                <p className='text-lg mt-5 pl-5'><span className="font-bold block">Start van de meeting</span> {new Date(meeting.meetingTime).toLocaleString()}</p>
                <button className='bg-primary text-white py-2 px-4 rounded mt-5 ml-5' onClick={() => {meetingJoinHandler()}}>Join de meeting</button>
                </>
                )
        }
        {loading && (<>
                <h1 className='text-3xl font-bold mt-10 pl-5 animate-pulse'>Loading...</h1>
                <p className='text-lg mt-5 pl-5 animate-pulse'>Loading...</p>
                <p className='text-lg mt-5 pl-5 animate-pulse'><span className="font-bold">Start:</span> Loading...</p>
        </>)}
        {error && (<><h1 className='text-3xl font-bold mt-10 pl-5 animate-pulse'>Error</h1></>)}
    </div>
    </>
  );
};

export default Meeting;