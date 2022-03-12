
export const displayConclusionText = (MatchDetails ,fontSize) => {
        const getWicket = (detail) => {
           return parseInt(detail.substring(detail.indexOf("/")).replace("/",""))
        }
        let text = "" ;
        if(MatchDetails.tossResult === "Lose"){
            if(MatchDetails.matchResult === "Lose"){
                text = <p className="text-red"> {`${MatchDetails.teamName} Won by ${parseInt( MatchDetails.opponentScore.substring(0,MatchDetails.opponentScore.indexOf("/")).replace("/","") - MatchDetails.annihilatorScore.substring(0,MatchDetails.annihilatorScore.indexOf("/")).replace("/",""))} run` } </p>
            }else{
                text = <p className="text-green">{`Annihilators Won by ${parseInt(10 - getWicket(MatchDetails.annihilatorScore))} Wicket` }</p> 
            }
        } else {
             if(MatchDetails.matchResult === "Win"){
                text = <p className="text-green"> { `Annihilators Won by ${parseInt( MatchDetails.annihilatorScore.substring(0,MatchDetails.annihilatorScore.indexOf("/")).replace("/","") - MatchDetails.opponentScore.substring(0,MatchDetails.opponentScore.indexOf("/")).replace("/",""))} run` }</p>
            }else{
                text =  <p className="text-red"> { `${MatchDetails.teamName} Won by ${parseInt(10 - getWicket(MatchDetails.opponentScore))} Wicket` } </p>
            }
        }

        return <div className={fontSize ? fontSize : "font-24"}>{text}</div>
    }