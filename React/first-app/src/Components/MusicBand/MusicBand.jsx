import React from 'react';
import Member from './MusicBandMember';
import Album from './Album';

const MusicBandArr = {
    imageMusicBand:
        'https://www.maniacsonline.com.au/sites/g/files/g2000010271/files/inline-images/MIW_0.jpg',
    nameMusicBand: 'Motionless In White',
    members: [
        {
            name: 'Chris Motionless',
            role: 'Lead Vocals',
            image: 'https://pbs.twimg.com/profile_images/1700188099366580224/le9XC-fH_400x400.jpg',
        },
        {
            name: 'Ryan Sitkowski',
            role: 'Lead Guitar',
            image: 'https://pbs.twimg.com/profile_images/481352836609892353/XneETn5L_400x400.jpeg',
        },
        {
            name: 'Vinny Mauro',
            role: 'Drums',
            image: 'https://pbs.twimg.com/profile_images/1700162776763658240/OzX_fJdW_400x400.jpg',
        },
        {
            name: 'Justin Morrow',
            role: 'Bass, Backing Vocals',
            image: 'https://www.spirit-of-metal.com/membre_groupe/photo/Justin_Morrow-335678_7b94.jpg',
        },
        {
            name: 'Ricky Horror',
            role: 'Rhythm Guitar, Backing Vocals',
            image: 'https://pbs.twimg.com/profile_images/1670042867983581186/UqpaLmXM_400x400.jpg',
        },
    ],
    albums: [
        {
            name: 'Scoring the End of the World',
            image: 'https://i.scdn.co/image/ab67616d0000b2733528a891d36d16d760cda271',
        },
        {
            name: 'Creatures',
            image: 'https://images.genius.com/73396176b739350bc48beb657f054fac.712x712x1.jpg',
        },
        {
            name: 'Reincarnate',
            image: 'https://i1.sndcdn.com/artworks-000084733421-thl692-t500x500.jpg',
        },
        {
            name: 'Graveyard Shift',
            image: 'https://m.media-amazon.com/images/I/71e7jHmIrWL._UF1000,1000_QL80_.jpg',
        },
        {
            name: 'Infamous',
            image: 'https://i.scdn.co/image/ab67616d0000b273f8d28063cccc7ab5c13bd168',
        },
        {
            name: 'Disguise',
            image: 'https://m.media-amazon.com/images/I/61W0gbTFZ2L._UF1000,1000_QL80_.jpg',
        },
    ],
};

const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

function MusicBand() {
    const memberChunks = chunkArray(MusicBandArr.members, 3);
    const albumsChunks = chunkArray(MusicBandArr.albums, 3);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                justifyContent: 'center',
            }}
        >
            <div>
                <div className="element">
                    <img
                        src={MusicBandArr.imageMusicBand}
                        alt={MusicBandArr.nameMusicBand}
                        style={{ width: '400px' }}
                    />
                </div>
                <div className="element">
                    <p style={{ fontWeight: 'bold' }}>
                        {MusicBandArr.nameMusicBand}
                    </p>
                </div>
                {memberChunks.map((chunk, index) => (
                    <div
                        key={index}
                        className="element"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            justifyContent: 'center',
                        }}
                    >
                        {chunk.map((member) => (
                            <Member
                                key={member.name} // Assuming name is unique
                                name={member.name}
                                role={member.role}
                                image={member.image}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div>
                {albumsChunks.map((chunk, index) => (
                    <div
                        key={index}
                        className="element"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            justifyContent: 'center',
                        }}
                    >
                        {chunk.map((album) => (
                            <Album
                                key={album.name}
                                name={album.name}
                                image={album.image}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MusicBand;
