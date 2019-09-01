import inception from './inception2.jpg';
import deepwaterHorizon from './deepwater horizon.jpg';
import kong from './kong.jpg';
import pulpFiction from './pulp fiction.jpg';
import starTrek from './star trek.jpg';
import theMist from './the mist.jpg';

export default function getGallery() {
    return [
        { id: 'inception', name: 'Inception', poster: inception },
        { id: 'deepwaterHorizon', name: 'Deepwater Horizon', poster: deepwaterHorizon },
        { id: 'kong', name: 'Kong', poster: kong },
        { id: 'pulpFiction', name: 'Pulp Fiction', poster: pulpFiction },
        { id: 'starTrek', name: 'Star Trek', poster: starTrek },
        { id: 'theMist', name: 'The Mist', poster: theMist }
    ];
}