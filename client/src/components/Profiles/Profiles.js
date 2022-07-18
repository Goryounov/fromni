import React, {useState} from 'react';
import ProfilesItem from './ProfilesItem/ProfilesItem';
import profilesService from '../../services/profiles.service';

const Profiles = () => {
    const [profiles, setProfiles] = useState([]);

    function getCampaigns() {
        profilesService.getAll().then(data => {
            if (data.message) alert(data.message);
            else setProfiles(data);
        });
    }

    return (
        <div className='form card'>
            <div className='card-body'>
                <div className='text-center'>
                    <button className='btn btn-primary' onClick={getCampaigns}>Загрузить профили</button>
                </div>
                {profiles?.length > 0 &&
                <div className='profiles mt-3'>
                    {profiles.map((profile) =>
                        <ProfilesItem key={profile.id} profile={profile}/>
                    )}
                </div>
                }
            </div>
        </div>
    );
};

export default Profiles;
