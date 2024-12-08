

export default function HomeVAway ({gameObj}){
   
    let homeTeam  = gameObj.teams.home;
    let awayTeam  = gameObj.teams.visitors;
    let scores  = gameObj.scores;
    return(
        <div className=" bg-secondaryColor border-t-2 mt-2 p-3 hover:bg-thirdColor rounded-sm" >
            <div className="flex justify-center"><img className=" w-7 h-7" alt={homeTeam.logo+ "_logo"} src={homeTeam.logo}/>{homeTeam.name} {scores.home.points} - {scores.visitors.points} {awayTeam.name} <img className=" w-7 h-7" alt={awayTeam.name +"_logo"} src={awayTeam.logo}/> </div>

        </div>
    );
}