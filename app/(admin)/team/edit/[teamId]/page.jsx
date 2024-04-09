'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTeamById,
  selectTeamById,
  selectLoading,
  updateTeam,
} from '@/store/teamSlice';
import { Bars } from 'react-loader-spinner';

const editTeam = ({ params }) => {
  const { teamId } = params;
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(teamId)

  const team = useSelector((state) => selectTeamById(state, teamId));
  console.log(team)
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getTeamById(teamId));
  }, [dispatch, teamId]);

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (team) {
      setName(team.name || '');
      setPosition(team.position || '');
      setImage(team.image || '');
    }
  }, [team]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTeamData = {
      teamId: teamId,
      teamData: {
        name: name,
        position: position,
        image: image,
      },
    };

    dispatch(updateTeam(updatedTeamData));
    router.push('/team/view');

    setName('');
    setPosition('');
    setImage('');
  };

  if (loading) {
    return (
      <div className=' h-screen bg-white flex justify-center items-center'>
        <Bars
          height='40'
          width='40'
          color='#FF7F00'
          ariaLabel='bars-loading'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className=' flex justify-start pl-10 items-center bg-white py-5'>
      <div className='max-w-md  px-4 py-8 bg-white '>
        <h1 className='text-black font-bold text-2xl mb-4'>Edit Team</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-orange-500 font-bold mb-2'
            >
              Full Name
            </label>
            <input
              type='text'
              id='name'
              className='appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Name'
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-orange-500 font-bold mb-2'
            >
              Position
            </label>
            <input
              type='text'
              id='position'
              className='appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Position'
              value={position}
              onChange={handlePositionChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='image'
              className='block text-orange-500 font-bold mb-2'
            >
              Image URL
            </label>
            <FileBase64
              type='file'
              multiple={false}
              onDone={({ base64 }) => setImage(base64)}
              className='w-full p-2 rounded-md'
            />
          </div>
          <div>
            <img src={image} alt='' className='w-full p-2 rounded-md' />
          </div>
          <div className=''>
            <button
              type='submit'
              className='mt-6  bg-black hover:bg-orange-500 hover:text-black text-orange-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-36 tracking-wider'
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default editTeam;
