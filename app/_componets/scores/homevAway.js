

export default function HomeVAway ({gameObj}){
   
    let homeTeam  = gameObj.teams.home;
    let awayTeam  = gameObj.teams.visitors;
    let scores  = gameObj.scores;
    return(
    
        <div className="grid grid-cols-2 gap-y-2 gap-x-0 bg-secondaryColor border-t-2 mt-2 p-3 hover:bg-thirdColor rounded-sm">
            <div className="flex items-center">
                <img className="w-7 mr-2 rounded-md" alt={homeTeam.logo + "_logo"} src={homeTeam.logo} />
                <span className="mr-auto  text-nowrap">{homeTeam.name}</span>
            </div>
            <div className="flex items-center justify-end">
                {scores.home.points === null ? <p>-</p> : scores.home.points}
            </div>

            <div className="flex items-center">
                <img className="w-7  mr-2" alt={awayTeam.logo + "_logo"} src={awayTeam.logo} />
                <span className="mr-auto flex text-nowrap">{awayTeam.name}</span>
            </div>
            <div className="flex items-center justify-end">
                {scores.visitors.points === null ? (<p>-</p>) : (scores.visitors.points)}
            </div>
        </div>

    );
}