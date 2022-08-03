function CovidVietNam({covid}) {
    console.log(covid)
    return (
        <div>
            <h1>Vietnam 10 last day covid</h1>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Death</th>
                </tr>
                </thead>
                <tbody>
                {
                    covid.map(item => (
                        <tr key={item.Date}>
                            <td>{new Date(item.Date).toLocaleString()}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Active}</td>
                            <td>{item.Recovered}</td>
                            <td>{item.Deaths}</td>

                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default CovidVietNam;

export async function getStaticProps(){

    const response = await fetch("https://api.covid19api.com/total/country/vietnam");
    const data = await response.json();

    return {
        props: {
            covid: data.reverse().slice(0,10)
        }
    }

}