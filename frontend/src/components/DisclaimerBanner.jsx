import "./DisclaimerBanner.css";

export default function DisclaimerBanner() {
    return (
        <div className="bannerContainer">
            <div className="bannerText">
                ⚠️ DayLenge wird kostenlos gehostet. Nach längerer Inaktivität kann es einige Minuten dauern bis Backend und Datenbank wieder hochgefahren sind. Dadurch können Funktionen wie Login, Register oder Leaderboard beim ersten Mal etwas länger dauern. ⚠️
            </div>
        </div>
    );
}