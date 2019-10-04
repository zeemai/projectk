import inception from './inception2.jpg';
import deepwaterHorizon from './deepwater horizon.jpg';
import kong from './kong.jpg';
import pulpFiction from './pulp fiction.jpg';
import starTrek from './star trek.jpg';
import theMist from './the mist.jpg';

export default function getGallery() {
    return [
        { 
          id: 'inception', 
          name: 'Inception', 
          poster: inception, 
          details: 'Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas.' 
        },
        { id: 'deepwaterHorizon', 
          name: 'Deepwater Horizon', 
          poster: deepwaterHorizon,
          details: 'Deepwater Horizon is a 2016 American disaster film based on the Deepwater Horizon explosion and oil spill in the Gulf of Mexico.'
        },
        { id: 'kong', 
          name: 'Kong', 
          poster: kong,
          details: 'Kong is a 2017 American monster film directed by Jordan Vogt-Roberts and written by Dan Gilroy, Max Borenstein and Derek Connolly.'
        },
        { id: 'pulpFiction', 
          name: 'Pulp Fiction', 
          poster: pulpFiction,
          details: 'Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles.'
        },
        { id: 'starTrek', 
          name: 'Star Trek', 
          poster: starTrek,
          details: 'Star Trek is a 2009 American science fiction film directed by J. J. Abrams and written by Roberto Orci and Alex Kurtzman.'
        },
        { id: 'theMist', 
          name: 'The Mist', 
          poster: theMist,
          details: 'The Mist is a 2007 American science fiction horror film based on the 1980 novella The Mist by Stephen King.'
        }
    ];
}