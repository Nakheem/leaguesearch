export default function ChampionStats(props) {
    const championDetails = props.championDetails;

    return (
        <>
            <div className="row">
                <div className="container text-white">
                    <table className="table table-bordered table-dark">
                        <tbody>
                            <tr>
                                <td className="text-center">
                                    <div>HP:</div>
                                    {championDetails.hp}
                                </td>
                                <td className="text-center">
                                    <div>MP:</div>
                                    {championDetails.mp}
                                </td>
                                <td className="text-center">
                                    <div>Attack Damage:</div>
                                    {championDetails.attackdamage}
                                </td>
                                <td className="text-center">
                                    <div>Attack Damage Per Level:</div>
                                    {championDetails.attackdamageperlevel}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <div>Attack Speed Per Level:</div>
                                    {championDetails.attackspeedperlevel}
                                </td>
                                <td className="text-center">
                                    <div>Attack Speed:</div>
                                    {championDetails.attackspeed}
                                </td>
                                <td className="text-center">
                                    <div>Armor:</div>
                                    {championDetails.armor}
                                </td>
                                <td className="text-center">
                                    <div>MP Per Level:</div>
                                    {championDetails.mpperlevel}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <div>Move Speed:</div>
                                    {championDetails.movespeed}
                                </td>
                                <td className="text-center">
                                    <div>Armor Per Level:</div>
                                    {championDetails.armorperlevel}
                                </td>
                                <td className="text-center">
                                    <div>Spell Block:</div>
                                    {championDetails.spellblock}
                                </td>
                                <td className="text-center">
                                    <div>Spell Block Per Level:</div>
                                    {championDetails.spellblockperlevel}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <div>Attack Range:</div>
                                    {championDetails.attackrange}
                                </td>
                                <td className="text-center">
                                    <div>HP Regen:</div>
                                    {championDetails.hpregen}
                                </td>
                                <td className="text-center">
                                    <div>HP Regen Per Level:</div>
                                    {championDetails.hpregenperlevsel}
                                </td>
                                <td className="text-center">
                                    <div>MP Regen:</div>
                                    {championDetails.mpregen}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <div>Crit:</div>
                                    {championDetails.crit}
                                </td>
                                <td className="text-center">
                                    <div>Crit Per Level:</div>
                                    {championDetails.critperlevel}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>



            </div>
        </>
    )
}