import {useParams} from 'react-router'

function PlayerNames() {
    const params = useParams()
    return (
        <div>
            params: {params.numPlayers}
        </div>
    )
}

export default PlayerNames
